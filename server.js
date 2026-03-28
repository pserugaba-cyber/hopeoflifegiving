const express = require('express');
const fs = require('fs');
const path = require('path');

loadEnvFile(path.join(__dirname, '.env'));

const app = express();
const SQUARE_API_VERSION = '2025-01-23';

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/api/config', (req, res) => {
  const paymentConfig = getPaymentConfig();

  res.set('Cache-Control', 'no-store');
  res.json({
    paymentsEnabled: paymentConfig.paymentsEnabled,
    squareApplicationId: paymentConfig.applicationId,
    squareLocationId: paymentConfig.locationId
  });
});

app.post('/api/pay', async (req, res) => {
  const { token, amountCents, fund, donorName, donorEmail } = req.body;

  if (!token || !amountCents || amountCents < 100) {
    return res.status(400).json({ error: 'Missing or invalid payment details' });
  }

  const paymentConfig = getPaymentConfig();
  const accessToken = paymentConfig.accessToken;
  if (!accessToken) {
    return res.status(503).json({
      error: 'Online giving is not configured on the server yet.'
    });
  }

  const idempotencyKey = `holi-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

  const payload = {
    source_id: token,
    idempotency_key: idempotencyKey,
    amount_money: { amount: amountCents, currency: 'USD' },
    note: `HOLI Give — ${fund || 'General'}`,
    ...(donorEmail ? { buyer_email_address: donorEmail } : {}),
    ...(donorName ? { billing_address: { first_name: donorName } } : {})
  };

  try {
    const response = await fetch('https://connect.squareup.com/v2/payments', {
      method:  'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Square-Version': SQUARE_API_VERSION
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      const msg = data.errors?.[0]?.detail || 'Payment was declined';
      return res.status(response.status).json({ error: msg });
    }

    res.json({ success: true, paymentId: data.payment?.id });

  } catch (err) {
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

function getPaymentConfig() {
  return {
    applicationId: process.env.SQUARE_APPLICATION_ID || '',
    locationId: process.env.SQUARE_LOCATION_ID || '',
    accessToken: process.env.SQUARE_ACCESS_TOKEN || '',
    paymentsEnabled: Boolean(
      process.env.SQUARE_APPLICATION_ID &&
      process.env.SQUARE_LOCATION_ID &&
      process.env.SQUARE_ACCESS_TOKEN
    )
  };
}

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');

  fileContents.split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line || line.startsWith('#')) {
      return;
    }

    const separatorIndex = line.indexOf('=');
    if (separatorIndex === -1) {
      return;
    }

    const key = line.slice(0, separatorIndex).trim();
    if (!key || Object.prototype.hasOwnProperty.call(process.env, key)) {
      return;
    }

    let value = line.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith('\'') && value.endsWith('\''))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`HOLI Give running on port ${PORT}`));
