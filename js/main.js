/* ============================================
   白室 HAKUSHITSU — Interactions
   克制、安静、缓慢
   ============================================ */

(function () {
  'use strict';

  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById('nav');

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    if (y > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    '.section-title, .section-sub, .series, .craft-step, .product-card, .journal-item, .stockist, .contact-item, .founder-body p, .founder-quote, .about-body p, .about-en, .craft-images img'
  );

  revealTargets.forEach(function (el) {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    }
  );

  revealTargets.forEach(function (el) {
    observer.observe(el);
  });

})();
