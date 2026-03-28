(function () {
  'use strict';



  const translations = {
    en: {
      churchName: 'Hope of Life International Church',
      heroCopy: 'A simple, secure way to give from your phone.',
      heroChipOne: 'Simple steps',
      heroChipTwo: 'Secure payment',
      heroChipThree: 'Receipt by email',
      scripture: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
      scriptureRef: '1 Thessalonians 5:16-18',
      cardKicker: 'Online Giving',
      cardTitle: 'Give',
      cardCopy: 'Tap an amount, choose a fund, and continue.',
      stepOneTitle: 'Choose a fund',
      stepOneCopy: 'Pick where you want your gift to go.',
      stepTwoTitle: 'Enter an amount',
      stepTwoCopy: 'Use a quick amount or type your own gift.',
      stepThreeTitle: 'Pay securely',
      stepThreeCopy: 'Card checkout is always available, with wallets when supported.',
      amountLabel: 'Amount',
      amountPanelLabel: 'Tap amount',
      amountHelp: 'Minimum $1.00',
      amountClear: 'Clear',
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
      emailOptional: 'optional, for your receipt',
      emailPlaceholder: 'you@example.com',
      emailError: 'Enter a valid email address.',
      summaryLabel: 'Gift summary',
      summaryPending: 'Choose an amount',
      continueLabel: 'Give',
      finePrint: 'Your gift is processed securely, and a receipt can be sent to your email.',
      trustCard: 'Card',
      trustGooglePay: 'Google Pay',
      trustCashApp: 'Cash App',
      trustApplePay: 'Apple Pay',
      checkoutLoading: 'Preparing secure checkout...',
      checkoutUnavailableConfig: 'Online giving is not configured yet. Add your Square application ID, location ID, and access token on the server.',
      checkoutUnavailableSecure: 'Secure checkout needs HTTPS. For local testing, open this site with http://localhost instead of a raw IP address.',
      checkoutUnavailableLibrary: 'Secure checkout could not load. Refresh the page and try again.',
      checkoutUnavailableTemporary: 'Secure checkout is temporarily unavailable. Please try again in a moment.',
      paymentEyebrow: 'Secure checkout',
      paymentTitle: 'Secure Payment',
      walletGuide: 'Apple Pay appears only on supported Safari devices on your live HTTPS site. Google Pay and Cash App appear when available.',
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
      successCopy: 'Your gift has been received. Thank you for supporting the ministry.',
      successAction: 'Make another gift',
      footerLead: 'Hope of Life International Church',
      cardPreviewNameDefault: 'Your Name'
    },
    rw: {
      churchName: 'Hope of Life International Church',
      heroCopy: 'Uburyo bworoshye kandi bwizewe bwo gutanga ukoresheje telefone yawe.',
      scripture: 'Mwishime iminsi yose, musenge ubudasiba, mushime mu byerekeye byose; kuko ari ko Imana ibashakira muri Kristo Yesu.',
      scriptureRef: '1 Abatesalonika 5:16-18',
      cardKicker: 'Gutanga Online',
      cardTitle: 'Tanga',
      cardCopy: 'Kanda amafaranga, hitamo ikigega, hanyuma ukomeze.',
      amountLabel: 'Amafaranga',
      amountPanelLabel: 'Kanda amafaranga',
      amountHelp: 'Make ni $1.00',
      amountClear: 'Siba',
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
      continueLabel: 'Tanga',
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
      heroCopy: 'Une facon simple et sure de donner depuis votre telephone.',
      scripture: "Soyez toujours joyeux, priez sans cesse, rendez grace en toute circonstance; c est la volonte de Dieu pour vous en Jesus-Christ.",
      scriptureRef: '1 Thessaloniciens 5:16-18',
      cardKicker: 'Don En Ligne',
      cardTitle: 'Donner',
      cardCopy: 'Touchez un montant, choisissez un fonds, puis continuez.',
      amountLabel: 'Montant',
      amountPanelLabel: 'Touchez le montant',
      amountHelp: 'Minimum 1 $',
      amountClear: 'Effacer',
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
      continueLabel: 'Donner',
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
    amountRaw: '50',
    activeTab: 'card',
    paymentStatus: 'loading',
    paymentMessageKey: 'checkoutLoading',
    squareApplicationId: '',
    squareLocationId: ''
  };

  const ui = {
    mainSubmitted: false,
    touched: { amount: false, name: false, email: false }
  };

  const amountPanel = document.getElementById('amountPanel');
  const amountDisplay = document.getElementById('amountDisplay');
  const amountClearBtn = document.getElementById('amountClearBtn');
  const amountError = document.getElementById('amountError');
  const nameInput = document.getElementById('nameInput');
  const nameError = document.getElementById('nameError');
  const emailInput = document.getElementById('emailInput');
  const emailError = document.getElementById('emailError');
  const summaryText = document.getElementById('summaryText');
  const openSheetBtn = document.getElementById('openSheetBtn');
  const openSheetLabel = document.getElementById('openSheetLabel');
  const checkoutNotice = document.getElementById('checkoutNotice');
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

  function getPaymentMessage() {
    return state.paymentMessageKey ? t(state.paymentMessageKey) : '';
  }

  function isPaymentReady() {
    return state.paymentStatus === 'ready';
  }

  function isEmailValid(value) {
    const normalized = (value || '').trim();
    return normalized === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
  }

  function parseAmountValue() {
    const parsed = parseFloat(state.amountRaw || '0');
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function setTextErrorState(input, errorEl, invalid, showError) {
    input.classList.toggle('is-invalid', invalid && showError);
    errorEl.classList.toggle('visible', invalid && showError);
  }

  function setAmountErrorState(invalid, showError) {
    amountPanel.classList.toggle('is-invalid', invalid && showError);
    amountError.classList.toggle('visible', invalid && showError);
    amountPanel.setAttribute('aria-invalid', invalid && showError ? 'true' : 'false');
  }

  function formatAmountDisplayValue() {
    return state.amountRaw || '0';
  }

  function syncAmountDisplay() {
    amountDisplay.textContent = formatAmountDisplayValue();
  }

  function appendAmountValue(value) {
    const current = state.amountRaw || '0';

    if (value === '.') {
      if (current.includes('.')) {
        return;
      }
      state.amountRaw = current + '.';
      return;
    }

    if (current.includes('.')) {
      const decimals = current.split('.')[1] || '';
      if (decimals.length >= 2) {
        return;
      }
      state.amountRaw = current + value;
      return;
    }

    state.amountRaw = current === '0' ? value : current + value;
  }

  function backspaceAmountValue() {
    const next = (state.amountRaw || '').slice(0, -1);
    state.amountRaw = next ? next : '0';
  }

  function clearAmountValue() {
    state.amountRaw = '0';
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

  function setPaymentState(status, messageKey) {
    state.paymentStatus = status;
    state.paymentMessageKey = messageKey || '';
    updateMainState();
  }

  function renderPaymentState() {
    const paymentMessage = isPaymentReady() ? '' : getPaymentMessage();

    checkoutNotice.textContent = paymentMessage;
    checkoutNotice.classList.toggle('visible', Boolean(paymentMessage));
    checkoutNotice.classList.toggle('is-error', state.paymentStatus === 'unavailable');

    confirmPayBtn.disabled = !isPaymentReady();

    if (!paySheet.classList.contains('hidden')) {
      if (paymentMessage) {
        paymentError.textContent = paymentMessage;
        paymentError.classList.add('visible');
      } else {
        paymentError.classList.remove('visible');
      }
    }
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

    syncAmountDisplay();
    setAmountErrorState(!amountValid, ui.mainSubmitted || ui.touched.amount);
    setTextErrorState(nameInput, nameError, !nameValid, ui.mainSubmitted || ui.touched.name);
    setTextErrorState(emailInput, emailError, !emailValid, ui.mainSubmitted || ui.touched.email);

    const amountLabel = amountValid ? formatCurrency(parsedAmount) : t('summaryPending');
    const fundLabel = getFundLabel(state.fund);
    const formValid = amountValid && nameValid && emailValid;

    summaryText.textContent = amountLabel + ' / ' + fundLabel;
    openSheetLabel.textContent = t('continueLabel') + ' ' + (amountValid ? formatCurrency(parsedAmount) : '--');

    openSheetBtn.disabled = !(formValid && isPaymentReady());
    syncSheetSummary();
    renderPaymentState();

    return formValid;
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

  let sqPayments = null;
  let sqCard     = null;
  let sqPayReq   = null;

  async function loadPaymentConfig() {
    try {
      const response = await fetch('/api/config', { cache: 'no-store' });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'Unable to load payment config');
      }

      state.squareApplicationId = data.squareApplicationId || '';
      state.squareLocationId = data.squareLocationId || '';

      if (!data.paymentsEnabled || !state.squareApplicationId || !state.squareLocationId) {
        setPaymentState('unavailable', 'checkoutUnavailableConfig');
        return false;
      }

      return true;
    } catch (error) {
      console.error('Payment config failed:', error);
      setPaymentState('unavailable', 'checkoutUnavailableTemporary');
      return false;
    }
  }

  function isSupportedSquareContext() {
    const hostname = window.location.hostname;

    return window.location.protocol === 'https:' || hostname === 'localhost' || hostname === '[::1]';
  }

  function getSquareInitMessage(error) {
    const message = error && error.message ? error.message : '';

    if (/secure context/i.test(message)) {
      return 'checkoutUnavailableSecure';
    }

    return 'checkoutUnavailableTemporary';
  }

  async function initSquare() {
    if (!window.Square) {
      console.warn('Square.js not loaded');
      setPaymentState('unavailable', 'checkoutUnavailableLibrary');
      return;
    }

    if (!isSupportedSquareContext()) {
      setPaymentState('unavailable', 'checkoutUnavailableSecure');
      return;
    }

    try {
      sqPayments = Square.payments(state.squareApplicationId, state.squareLocationId);

      sqCard = await sqPayments.card();
      await sqCard.attach('#sq-card');
      setPaymentState('ready');

      sqPayReq = sqPayments.paymentRequest({
        countryCode: 'US',
        currencyCode: 'USD',
        total: { amount: state.amount.toFixed(2), label: 'Hope of Life International Church' }
      });

      void initWallets();
    } catch (err) {
      console.error('Square init failed:', err);
      setPaymentState('unavailable', getSquareInitMessage(err));
    }
  }

  async function initWallets() {
    if (!sqPayments || !sqPayReq) {
      return;
    }

    try {
      const ap = await sqPayments.applePay(sqPayReq);
      ap.addEventListener('tokenize', (e) => handleWalletToken(e));
      await ap.attach('#sq-apple-pay');
      showWalletDivider();
    } catch (_) {
      document.getElementById('sq-apple-pay').style.display = 'none';
    }

    try {
      const gp = await sqPayments.googlePay(sqPayReq);
      gp.addEventListener('tokenize', (e) => handleWalletToken(e));
      await gp.attach('#sq-google-pay');
      showWalletDivider();
    } catch (_) {
      document.getElementById('sq-google-pay').style.display = 'none';
    }

    try {
      const ca = await sqPayments.cashAppPay(sqPayReq, {
        redirectURL: window.location.href,
        referenceId: 'holi-' + Date.now()
      });
      ca.addEventListener('tokenize', (e) => handleWalletToken(e));
      await ca.attach('#sq-cash-app-pay');
      showWalletDivider();
    } catch (_) {
      document.getElementById('sq-cash-app-pay').style.display = 'none';
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

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Payment failed. Please try again.');
      }

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
    if (!isPaymentReady()) {
      renderPaymentState();
      return;
    }

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
    if (!isPaymentReady() || !sqCard) {
      paymentError.textContent = getPaymentMessage() || t('checkoutUnavailableTemporary');
      paymentError.classList.add('visible');
      return;
    }

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


  document.querySelectorAll('[data-pad-value]').forEach((button) => {
    button.addEventListener('click', () => {
      ui.touched.amount = true;
      appendAmountValue(button.dataset.padValue);
      updateMainState();
    });
  });

  document.querySelectorAll('[data-pad-action]').forEach((button) => {
    button.addEventListener('click', () => {
      ui.touched.amount = true;

      if (button.dataset.padAction === 'backspace') {
        backspaceAmountValue();
      }

      updateMainState();
    });
  });

  amountClearBtn.addEventListener('click', () => {
    ui.touched.amount = true;
    clearAmountValue();
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
  setFund(state.fund);
  applyTranslations();

  window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    loadPaymentConfig().then((hasConfig) => {
      if (hasConfig) {
        initSquare();
      }
    });
  });
})();
