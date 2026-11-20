/* ============================================================
   BQA Homes and Villas — script condivisi del sito
   Tutte le pagine IT/EN sono statiche: il dizionario delle
   traduzioni e lo switch di lingua JS sono stati rimossi.
   Qui restano solo gli helper usati dalle pagine (modali,
   accordion FAQ, fade-in, CTA mobile, carosello hero).
   ============================================================ */

/* ============================================================
   Helper condivisi di accessibilità per i modali (lightbox foto,
   modale recensioni): focus trap + focus management. Usati da
   trastevere.html e flaminio.html.
   ============================================================ */
(function () {
  var lastFocused = null;

  function getFocusable(container) {
    if (!container) return [];
    return Array.prototype.slice
      .call(container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
      .filter(function (el) { return el.offsetParent !== null && !el.disabled; });
  }

  function openModalA11y(container) {
    lastFocused = document.activeElement;
    var focusables = getFocusable(container);
    if (focusables.length) focusables[0].focus();
  }

  function closeModalA11y() {
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
    lastFocused = null;
  }

  function trapFocusKeydown(e, container) {
    if (e.key !== "Tab") return;
    var focusables = getFocusable(container);
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function setBackgroundInert(modalRoot, on) {
    Array.prototype.forEach.call(document.body.children, function (el) {
      if (el === modalRoot || el.tagName === "SCRIPT") return;
      if (on) {
        el.setAttribute("inert", "");
        el.setAttribute("aria-hidden", "true");
      } else {
        el.removeAttribute("inert");
        el.removeAttribute("aria-hidden");
      }
    });
  }

  window.BQA_openModalA11y = openModalA11y;
  window.BQA_closeModalA11y = closeModalA11y;
  window.BQA_trapFocusKeydown = trapFocusKeydown;
  window.BQA_setBackgroundInert = setBackgroundInert;
})();

/* ============================================================
   Helper condiviso per l'accordion FAQ (trastevere/flaminio/masseriola).
   ============================================================ */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".faq-question").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var expanded = btn.getAttribute("aria-expanded") === "true";
        var panel = document.getElementById(btn.getAttribute("aria-controls"));
        btn.setAttribute("aria-expanded", String(!expanded));
        if (panel) {
          panel.classList.toggle("open", !expanded);
          panel.setAttribute("aria-hidden", String(expanded));
        }
      });
    });
  });
})();

/* ============================================================
   Helper condiviso: fade-in + slide-up allo scroll, con
   IntersectionObserver unico. Elementi con classe "fade-in-section".
   Fallback: se IntersectionObserver non è supportato, la classe
   "js-fade-ready" non viene aggiunta e gli elementi restano
   visibili di default (nessun rischio contenuto invisibile).
   Riutilizzabile su qualunque pagina del sito.
   ============================================================ */
(function () {
  if (!("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("js-fade-ready");

  document.addEventListener("DOMContentLoaded", function () {
    var els = document.querySelectorAll(".fade-in-section");
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    els.forEach(function (el) { observer.observe(el); });
  });
})();

/* ============================================================
   Helper: nasconde il CTA sticky mobile "Prenota Diretto" quando
   il footer entra in viewport, così non copre footer/altri CTA
   quando l'utente è già in fondo alla pagina.
   ============================================================ */
(function () {
  if (!("IntersectionObserver" in window)) return;

  document.addEventListener("DOMContentLoaded", function () {
    var cta = document.getElementById("mobile-book-cta");
    var footer = document.getElementById("site-footer");
    if (!cta || !footer) return;

    var footerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        cta.classList.toggle("hide-at-footer", entry.isIntersecting);
      });
    }, { threshold: 0 });

    footerObserver.observe(footer);
  });
})();

/* ============================================================
   Helper: carosello automatico foto di sfondo nella hero della
   homepage (.hero-bg-slide). Crossfade ogni 6s, loop infinito,
   nessun controllo manuale. Rispetta prefers-reduced-motion:
   se attivo, resta ferma la prima foto (già "active" via HTML/CSS),
   nessun setInterval.
   ============================================================ */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll(".hero-bg-slide");
    if (!slides.length) return;

    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    var current = 0;
    setInterval(function () {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 6000);
  });
})();
