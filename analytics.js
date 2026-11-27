/* GA4 con consenso cookie — BQA Homes and Villas
   Nessun cookie/tracciamento prima del consenso. Scelta salvata in localStorage. */
(function () {
  var GA_ID = 'G-D3TKN8B7RF';
  var KEY = 'bqa_consent';
  var isEN = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0;
  var T = isEN
    ? { text: 'We use analytics cookies (Google Analytics) to understand how the site is used and improve it. You can accept or decline.', yes: 'Accept', no: 'Decline' }
    : { text: 'Usiamo cookie di analisi (Google Analytics) per capire come viene usato il sito e migliorarlo. Puoi accettare o rifiutare.', yes: 'Accetta', no: 'Rifiuta' };

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  var loaded = false;
  function loadGA() {
    if (loaded) return; loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
    var s = document.createElement('script');
    s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    bindEvents();
  }

  function track(name, params) {
    if (loaded && window.gtag) { params = params || {}; params.page_path = location.pathname; gtag('event', name, params); }
  }

  var bound = false;
  function bindEvents() {
    if (bound) return; bound = true;
    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      var h = a.getAttribute('href') || '';
      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)/i.test(h)) track('whatsapp_click', { link_url: h });
      else if (/^mailto:/i.test(h)) track('email_click', { link_url: h });
      else if (/^tel:/i.test(h)) track('phone_click', { link_url: h });
      else if (/booking\.com/i.test(h)) track('ota_click', { ota: 'booking', link_url: h });
      else if (/airbnb\./i.test(h)) track('ota_click', { ota: 'airbnb', link_url: h });
    }, true);
  }

  function banner() {
    var d = document.createElement('div');
    d.setAttribute('role', 'dialog');
    d.setAttribute('aria-label', 'Cookie');
    d.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;max-width:560px;margin:0 auto;background:#fff;color:#222;border:1px solid #ddd;border-radius:10px;box-shadow:0 6px 24px rgba(0,0,0,.18);padding:14px 16px;font:14px/1.45 system-ui,sans-serif;';
    d.innerHTML = '<p style="margin:0 0 10px">' + T.text + '</p><div style="display:flex;gap:8px;justify-content:flex-end"><button type="button" data-c="no" style="padding:8px 14px;border:1px solid #bbb;background:#fff;border-radius:6px;cursor:pointer">' + T.no + '</button><button type="button" data-c="yes" style="padding:8px 14px;border:0;background:#222;color:#fff;border-radius:6px;cursor:pointer">' + T.yes + '</button></div>';
    d.addEventListener('click', function (e) {
      var c = e.target.getAttribute && e.target.getAttribute('data-c');
      if (!c) return;
      set(c === 'yes' ? 'granted' : 'denied');
      d.parentNode.removeChild(d);
      if (c === 'yes') loadGA();
    });
    document.body.appendChild(d);
  }

  var v = get();
  if (v === 'granted') loadGA();
  else if (v !== 'denied') {
    if (document.body) banner(); else document.addEventListener('DOMContentLoaded', banner);
  }
})();
