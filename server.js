const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/api/pay', async (req, res) => {
  const { token, amountCents, fund, donorName, donorEmail } = req.body;

  if (!token || !amountCents || amountCents < 100) {
    return res.status(400).json({ error: 'Missing or invalid payment details' });
  }

  const accessToken = process.env.SQUARE_ACCESS_TOKEN;
  if (!accessToken) {
    return res.status(500).json({ error: 'Server configuration error' });
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
        'Square-Version': '2025-01-23'
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`HOLI Give running on port ${PORT}`));
