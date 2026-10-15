/* Kanny's Games: tiny enhancement script.
   1) restrained scroll reveals, 2) homepage ambient colour that follows the game in view. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window) || reduce) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var amb = document.getElementById('amb');
  function setAmb(v) {
    if (!amb || !v) return;
    var p = v.split('|');
    amb.style.setProperty('--amb-a', p[0]);
    amb.style.setProperty('--amb-b', p[1]);
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      var host = e.target.closest('[data-amb]');
      if (host) setAmb(host.getAttribute('data-amb'));
      io.unobserve(e.target);
    });
  }, { threshold: 0.2 });
  els.forEach(function (el) { io.observe(el); });
  document.querySelectorAll('a.card[data-amb]').forEach(function (c) {
    c.addEventListener('mouseenter', function () { setAmb(c.getAttribute('data-amb')); });
    c.addEventListener('focus', function () { setAmb(c.getAttribute('data-amb')); });
  });
})();
