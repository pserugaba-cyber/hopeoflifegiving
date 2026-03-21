(function () {
  'use strict';



  const translations = {
    en: {
      churchName: 'Hope of Life International Church',
      heroCopy: 'Support our ministry through tithes, offerings, missions, and the building fund.',
      scripture: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
      scriptureRef: '1 Thessalonians 5:16-18',
      cardKicker: 'Online Giving',
      cardTitle: 'Choose your gift',
      cardCopy: 'Fast, secure giving in a simple flow.',
      amountLabel: 'Amount',
      amountHelp: 'Minimum $1.00',
      amountError: 'Enter a valid amount between $1 and $10,000.',
      amountPlaceholder: '0.00',
      fundLabel: 'Fund',
      fundHelp: 'For tithes or the building fund, please also fill out an envelope.',
      tithe: 'Tithe',
      offering: 'Offering',
      missions: 'Missions',
      building: 'Building Fund',
      titheDesc: 'Your biblical 10%',
      offeringDesc: 'General ministry needs',
      missionsDesc: 'Global outreach',
      buildingDesc: 'Our new sanctuary',
      detailsLabel: 'Your Details',
      nameLabel: 'Your Name',
      namePlaceholder: 'Full name',
      nameError: 'Please enter your name.',
      emailLabel: 'Email',
      emailOptional: 'if you want to recieve reciept',
      emailPlaceholder: 'you@example.com',
      emailError: 'Enter a valid email address.',
      summaryLabel: 'Gift summary',
      summaryPending: 'Choose an amount',
      continueLabel: 'Continue with',
      finePrint: 'Secure and encrypted. A receipt can be sent to your email.',
      paymentEyebrow: 'Secure checkout',
      paymentTitle: 'Secure Payment',
      sheetFund: 'Fund',
      sheetTotal: 'Total',
      tabCards: 'Cards',
      tabWallets: 'Wallets',
      tabBank: 'Bank',
      cardHint: 'Card entry preview for your giving flow.',
      cardNumber: 'Card number',
      cardName: 'Name on card',
      cardNamePlaceholder: 'Name as shown on card',
      expiry: 'Expiry',
      cvc: 'CVC',
      paymentError: 'Enter valid card details before confirming.',
      walletTitle: 'Wallets',
      walletCopy: 'Apple Pay, Google Pay, and Cash App can be connected once your processor is ready.',
      bankTitle: 'Bank Transfer',
      bankCopy: 'ACH or connected-bank giving can be added once your payment backend is wired in.',
      cancel: 'Cancel',
      confirm: 'Confirm & Give',
      processing: 'Processing...',
      successKicker: 'Gift received',
      successTitle: 'Thank you!',
      successCopy: 'Your gift has been received. God bless you.',
      successAction: 'Make another gift',
      footerLead: 'Hope of Life International Church',
      cardPreviewNameDefault: 'Your Name'
    },
    rw: {
      churchName: 'Hope of Life International Church',
      heroCopy: 'Shyigikira umurimo wacu binyuze mu icyacumi, amaturo, ubutumwa n ikigega cyo kubaka.',
      scripture: 'Mwishime iminsi yose, musenge ubudasiba, mushime mu byerekeye byose; kuko ari ko Imana ibashakira muri Kristo Yesu.',
      scriptureRef: '1 Abatesalonika 5:16-18',
      cardKicker: 'Gutanga Online',
      cardTitle: 'Hitamo impano yawe',
      cardCopy: 'Uburyo bworoshye, bwihuse kandi bwizewe bwo gutanga.',
      amountLabel: 'Amafaranga',
      amountHelp: 'Make ni $1.00',
      amountError: 'Shyiramo amafaranga yemewe hagati ya $1 na $10,000.',
      amountPlaceholder: '0.00',
      fundLabel: 'Ikigega',
      fundHelp: 'Niba utanga icyacumi cyangwa ku kigega cyo kubaka, nyamuneka wuzuze envelopu.',
      tithe: 'Icyacumi',
      offering: 'Ituro',
      missions: 'Ubutumwa',
      building: 'Ikigega cyo kubaka',
      titheDesc: '10% ya Bibiliya',
      offeringDesc: 'Ibikenewe mu murimo',
      missionsDesc: 'Kwamamaza ubutumwa',
      buildingDesc: 'Urusengero rwacu rushya',
      detailsLabel: 'Amakuru yawe',
      nameLabel: 'Izina ryawe',
      namePlaceholder: 'Amazina yose',
      nameError: 'Andika izina ryawe.',
      emailLabel: 'Email',
      emailOptional: 'niba bashaka kwakira receipt',
      emailPlaceholder: 'you@example.com',
      emailError: 'Andika email yemewe.',
      summaryLabel: 'Incamake y impano',
      summaryPending: 'Hitamo amafaranga',
      continueLabel: 'Komeza na',
      finePrint: 'Bifite umutekano kandi birafunze. Receipt ishobora koherezwa kuri email yawe.',
      paymentEyebrow: 'Kwishyura mu mutekano',
      paymentTitle: 'Kwishyura',
      sheetFund: 'Ikigega',
      sheetTotal: 'Igiteranyo',
      tabCards: 'Amakarita',
      tabWallets: 'Wallets',
      tabBank: 'Banki',
      cardHint: 'Iyi ni preview y uko kwishyura n ikarita bizaba bimeze.',
      cardNumber: 'Numero y ikarita',
      cardName: 'Amazina ku ikarita',
      cardNamePlaceholder: 'Amazina ari ku ikarita',
      expiry: 'Irangira',
      cvc: 'CVC',
      paymentError: 'Andika neza amakuru y ikarita mbere yo kwemeza.',
      walletTitle: 'Wallets',
      walletCopy: 'Apple Pay, Google Pay na Cash App bishobora kongerwaho processor yawe imaze gutegurwa.',
      bankTitle: 'Kohereza kuri banki',
      bankCopy: 'ACH cyangwa bank giving bishobora kongerwaho backend yawe imaze guhurizwa hamwe.',
      cancel: 'Hagarika',
      confirm: 'Emeza kandi utange',
      processing: 'Birimo gukorwa...',
      successKicker: 'Impano yakiriwe',
      successTitle: 'Murakoze!',
      successCopy: 'Impano yawe yakiriwe. Imana ibahe umugisha.',
      successAction: 'Tanga indi mpano',
      footerLead: 'Hope of Life International Church',
      cardPreviewNameDefault: 'Izina ryawe'
    },
    fr: {
      churchName: 'Hope of Life International Church',
      heroCopy: 'Soutenez notre ministere par la dime, les offrandes, les missions et le fonds de construction.',
      scripture: "Soyez toujours joyeux, priez sans cesse, rendez grace en toute circonstance; c est la volonte de Dieu pour vous en Jesus-Christ.",
      scriptureRef: '1 Thessaloniciens 5:16-18',
      cardKicker: 'Don En Ligne',
      cardTitle: 'Choisissez votre don',
      cardCopy: 'Un parcours simple, rapide et securise pour donner.',
      amountLabel: 'Montant',
      amountHelp: 'Minimum 1 $',
      amountError: 'Entrez un montant valide entre 1 $ et 10 000 $.',
      amountPlaceholder: '0.00',
      fundLabel: 'Fonds',
      fundHelp: 'Pour la dime ou le fonds de construction, veuillez aussi remplir une enveloppe.',
      tithe: 'Dime',
      offering: 'Offrande',
      missions: 'Missions',
      building: 'Fonds de construction',
      titheDesc: 'Votre 10% biblique',
      offeringDesc: 'Besoins generaux du ministere',
      missionsDesc: 'Rayonnement mondial',
      buildingDesc: 'Notre nouveau sanctuaire',
      detailsLabel: 'Vos coordonnees',
      nameLabel: 'Votre nom',
      namePlaceholder: 'Nom complet',
      nameError: 'Veuillez saisir votre nom.',
      emailLabel: 'Email',
      emailOptional: 'si vous voulez recevoir un recu',
      emailPlaceholder: 'vous@example.com',
      emailError: 'Entrez une adresse email valide.',
      summaryLabel: 'Resume du don',
      summaryPending: 'Choisissez un montant',
      continueLabel: 'Continuer avec',
      finePrint: 'Securise et chiffre. Un recu peut etre envoye a votre email.',
      paymentEyebrow: 'Paiement securise',
      paymentTitle: 'Paiement',
      sheetFund: 'Fonds',
      sheetTotal: 'Total',
      tabCards: 'Cartes',
      tabWallets: 'Wallets',
      tabBank: 'Banque',
      cardHint: 'Apercu du flux de paiement par carte.',
      cardNumber: 'Numero de carte',
      cardName: 'Nom sur la carte',
      cardNamePlaceholder: 'Nom tel qu affiche sur la carte',
      expiry: 'Expiration',
      cvc: 'CVC',
      paymentError: 'Entrez des details de carte valides avant de confirmer.',
      walletTitle: 'Wallets',
      walletCopy: 'Apple Pay, Google Pay et Cash App peuvent etre ajoutes quand votre processeur est pret.',
      bankTitle: 'Virement bancaire',
      bankCopy: 'ACH ou le don bancaire peut etre ajoute quand votre backend de paiement est branche.',
      cancel: 'Annuler',
      confirm: 'Confirmer et donner',
      processing: 'Traitement...',
      successKicker: 'Don recu',
      successTitle: 'Merci!',
      successCopy: 'Votre don a ete recu. Que Dieu vous benisse.',
      successAction: 'Faire un autre don',
      footerLead: 'Hope of Life International Church',
      cardPreviewNameDefault: 'Votre nom'
    }
  };

  const presetAmounts = [10, 20, 50, 100, 250];
  const localeMap = {
    en: 'en-US',
    rw: 'en-US',
    fr: 'fr-FR'
  };

  const storage = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        return;
      }
    }
  };

  const initialLang = translations[storage.get('holi.lang')] ? storage.get('holi.lang') : 'en';

  const state = {
    lang: initialLang,
    fund: 'offering',
    amount: 50,
    activeTab: 'card'
  };

  const ui = {
    mainSubmitted: false,
    touched: { amount: false, name: false, email: false }
  };

  const amountInput = document.getElementById('amountInput');
  const amountError = document.getElementById('amountError');
  const nameInput = document.getElementById('nameInput');
  const nameError = document.getElementById('nameError');
  const emailInput = document.getElementById('emailInput');
  const emailError = document.getElementById('emailError');
  const summaryText = document.getElementById('summaryText');
  const openSheetBtn = document.getElementById('openSheetBtn');
  const openSheetLabel = document.getElementById('openSheetLabel');
  const donationForm = document.getElementById('donationForm');
  const langSelect = document.getElementById('langSelect');
  const paySheet = document.getElementById('paySheet');
  const sheetFundValue = document.getElementById('sheetFundValue');
  const sheetTotalValue = document.getElementById('sheetTotalValue');
  const confirmPayBtn = document.getElementById('confirmPayBtn');
  const confirmSpinner = document.getElementById('confirmSpinner');
  const confirmLabel = document.getElementById('confirmLabel');
  const paymentError = document.getElementById('paymentError');
  const successOverlay = document.getElementById('successOverlay');
  const successAmount = document.getElementById('successAmount');
  const successDetails = document.getElementById('successDetails');
  const successClose = document.getElementById('successClose');
  const yearEl = document.getElementById('year');

  let lastFocusedElement = null;

  function t(key) {
    return translations[state.lang][key] || translations.en[key] || key;
  }

  function formatCurrency(value) {
    const amount = Number(value) || 0;
    return new Intl.NumberFormat(localeMap[state.lang], {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
      maximumFractionDigits: 2
    }).format(amount);
  }

  function getFundLabel(key) {
    return t(key);
  }

  function isEmailValid(value) {
    const normalized = (value || '').trim();
    return normalized === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
  }

  function sanitizeAmount(value) {
    const cleaned = value.replace(/[^0-9.]/g, '');
    const parts = cleaned.split('.');
    if (parts.length === 1) {
      return parts[0];
    }
    return parts[0] + '.' + parts.slice(1).join('').slice(0, 2);
  }

  function parseAmountValue() {
    const parsed = parseFloat((amountInput.value || '').replace(/,/g, ''));
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function setErrorState(input, errorEl, invalid, showError) {
    input.classList.toggle('is-invalid', invalid && showError);
    errorEl.classList.toggle('visible', invalid && showError);
  }

  function setActiveChip(value) {
    document.querySelectorAll('.chip').forEach((chip) => {
      chip.classList.toggle('is-active', chip.dataset.amount === value);
    });
  }

  function setFund(fund) {
    state.fund = fund;
    document.querySelectorAll('.fund-card').forEach((card) => {
      const isSelected = card.dataset.fund === fund;
      card.classList.toggle('selected', isSelected);
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
    });
    updateMainState();
  }

  function updateMainState(showErrors) {
    if (showErrors) {
      ui.mainSubmitted = true;
    }

    const parsedAmount = parseAmountValue();
    const amountValid = parsedAmount >= 1 && parsedAmount <= 10000;
    const nameValid = nameInput.value.trim().length > 0;
    const emailValid = isEmailValid(emailInput.value);

    state.amount = parsedAmount;

    setErrorState(amountInput, amountError, !amountValid, ui.mainSubmitted || ui.touched.amount);
    setErrorState(nameInput, nameError, !nameValid, ui.mainSubmitted || ui.touched.name);
    setErrorState(emailInput, emailError, !emailValid, ui.mainSubmitted || ui.touched.email);

    const amountLabel = amountValid ? formatCurrency(parsedAmount) : t('summaryPending');
    const fundLabel = getFundLabel(state.fund);

    summaryText.textContent = amountLabel + ' / ' + fundLabel;
    openSheetLabel.textContent = t('continueLabel') + ' ' + (amountValid ? formatCurrency(parsedAmount) : '--');

    openSheetBtn.disabled = !(amountValid && nameValid && emailValid);
    syncSheetSummary();

    return amountValid && nameValid && emailValid;
  }

  function syncSheetSummary() {
    sheetFundValue.textContent = getFundLabel(state.fund);
    sheetTotalValue.textContent = formatCurrency(state.amount);
  }

  function applyTranslations() {
    document.documentElement.lang = state.lang;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
    });

    updateMainState();
  }

  const SQUARE_APP_ID      = 'sq0idp-WzfaWH2IYbzq-mUNSYP8jA';
  const SQUARE_LOCATION_ID = 'KGVW2WRARTYFE';

  let sqPayments = null;
  let sqCard     = null;
  let sqPayReq   = null;

  async function initSquare() {
    if (!window.Square) {
      console.warn('Square.js not loaded');
      return;
    }
    try {
      sqPayments = Square.payments(SQUARE_APP_ID, SQUARE_LOCATION_ID);

      sqCard = await sqPayments.card({
        style: {
          '.input-wrapper': {
            borderRadius: '14px',
            border: '1px solid rgba(0,0,0,0.1)',
            outline: 'none'
          },
          '.input-wrapper.is-focus': {
            borderColor: '#bf0a0a',
            boxShadow: '0 0 0 3px rgba(191,10,10,0.12)'
          },
          'input': {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
            fontSize: '15px',
            color: '#1d1d1f'
          },
          '::placeholder': { color: '#86868b' }
        }
      });
      await sqCard.attach('#sq-card');

      sqPayReq = sqPayments.paymentRequest({
        countryCode: 'US',
        currencyCode: 'USD',
        total: { amount: state.amount.toFixed(2), label: 'Hope of Life International Church' }
      });

      try {
        const ap = await sqPayments.applePay(sqPayReq);
        ap.addEventListener('tokenize', (e) => handleWalletToken(e));
        await ap.attach('#sq-apple-pay');
        showWalletDivider();
      } catch (_) { document.getElementById('sq-apple-pay').style.display = 'none'; }

      try {
        const gp = await sqPayments.googlePay(sqPayReq);
        gp.addEventListener('tokenize', (e) => handleWalletToken(e));
        await gp.attach('#sq-google-pay');
        showWalletDivider();
      } catch (_) { document.getElementById('sq-google-pay').style.display = 'none'; }

      try {
        const ca = await sqPayments.cashAppPay(sqPayReq, {
          redirectURL: window.location.href,
          referenceId: 'holi-' + Date.now()
        });
        ca.addEventListener('tokenize', (e) => handleWalletToken(e));
        await ca.attach('#sq-cash-app-pay');
        showWalletDivider();
      } catch (_) { document.getElementById('sq-cash-app-pay').style.display = 'none'; }

    } catch (err) {
      console.error('Square init failed:', err);
    }
  }

  function showWalletDivider() {
    document.getElementById('sqWallets').classList.add('visible');
    document.getElementById('sqOr').classList.add('visible');
  }

  async function handleWalletToken(event) {
    if (event.detail.status !== 'OK') return;
    await submitPayment(event.detail.token);
  }

  async function submitPayment(token) {
    confirmPayBtn.disabled = true;
    confirmSpinner.classList.remove('hidden');
    confirmLabel.textContent = t('processing');
    paymentError.classList.remove('visible');

    try {
      const res = await fetch('/api/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          amountCents: Math.round(state.amount * 100),
          fund: getFundLabel(state.fund),
          donorName: nameInput.value.trim(),
          donorEmail: emailInput.value.trim()
        })
      });

      if (!res.ok) throw new Error('Payment declined');

      closeSheet({ restoreFocus: false });
      openSuccess();
    } catch (err) {
      paymentError.textContent = err.message || 'Payment failed. Please try again.';
      paymentError.classList.add('visible');
    } finally {
      confirmSpinner.classList.add('hidden');
      confirmLabel.textContent = t('confirm');
      confirmPayBtn.disabled = false;
    }
  }

  function openSheet() {
    lastFocusedElement = document.activeElement;
    syncSheetSummary();

    if (sqPayReq) {
      sqPayReq.update({ total: { amount: state.amount.toFixed(2), label: 'Hope of Life International Church' } });
    }

    paySheet.classList.remove('hidden');
    paySheet.setAttribute('aria-hidden', 'false');
    document.body.classList.add('sheet-open');

    requestAnimationFrame(() => {
      paySheet.classList.add('is-open');
    });
  }

  function closeSheet(options) {
    const restoreFocus = !(options && options.restoreFocus === false);
    paySheet.classList.remove('is-open');
    paySheet.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('sheet-open');

    setTimeout(() => {
      paySheet.classList.add('hidden');
      if (restoreFocus && lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }, 260);
  }

  function openSuccess() {
    successAmount.textContent = formatCurrency(state.amount);
    successDetails.textContent = getFundLabel(state.fund);
    successOverlay.classList.remove('hidden');
    successOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    successClose.focus();
  }

  function closeSuccess() {
    successOverlay.classList.add('hidden');
    successOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    openSheetBtn.focus();
  }

  async function handlePaymentSubmit() {
    if (!sqCard) return;
    paymentError.classList.remove('visible');
    const result = await sqCard.tokenize();
    if (result.status !== 'OK') {
      const msg = result.errors ? result.errors.map((e) => e.message).join(' ') : 'Please check your card details.';
      paymentError.textContent = msg;
      paymentError.classList.add('visible');
      return;
    }
    await submitPayment(result.token);
  }


  document.querySelectorAll('.chip').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.amount;
      state.amount = Number(value);
      amountInput.value = state.amount.toFixed(2);
      ui.touched.amount = true;
      setActiveChip(value);
      updateMainState();
    });
  });

  amountInput.addEventListener('input', () => {
    ui.touched.amount = true;
    amountInput.value = sanitizeAmount(amountInput.value);
    const parsed = parseAmountValue();
    state.amount = parsed;

    if (presetAmounts.includes(parsed)) {
      setActiveChip(String(parsed));
    } else {
      setActiveChip('');
    }

    updateMainState();
  });

  amountInput.addEventListener('blur', () => {
    ui.touched.amount = true;
    const parsed = parseAmountValue();
    if (parsed > 0) {
      amountInput.value = parsed.toFixed(2);
    }
    updateMainState();
  });

  document.querySelectorAll('.fund-card').forEach((button) => {
    button.addEventListener('click', () => {
      setFund(button.dataset.fund);
    });
  });

  nameInput.addEventListener('input', updateMainState);
  nameInput.addEventListener('blur', () => {
    ui.touched.name = true;
    updateMainState();
  });

  emailInput.addEventListener('input', updateMainState);
  emailInput.addEventListener('blur', () => {
    ui.touched.email = true;
    updateMainState();
  });

  donationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (updateMainState(true)) {
      openSheet();
    }
  });

  document.querySelectorAll('[data-close-sheet]').forEach((button) => {
    button.addEventListener('click', () => closeSheet());
  });

  confirmPayBtn.addEventListener('click', handlePaymentSubmit);
  successClose.addEventListener('click', closeSuccess);

  langSelect.addEventListener('change', () => {
    state.lang = translations[langSelect.value] ? langSelect.value : 'en';
    storage.set('holi.lang', state.lang);
    applyTranslations();

  });

  window.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
      return;
    }

    if (!successOverlay.classList.contains('hidden')) {
      closeSuccess();
      return;
    }

    if (!paySheet.classList.contains('hidden')) {
      closeSheet();
    }
  });

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  langSelect.value = state.lang;
  amountInput.value = state.amount.toFixed(2);
  setActiveChip('50');
  setFund(state.fund);
  applyTranslations();

  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    initSquare();

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  });
})();
