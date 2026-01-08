// Neon Why — count-up animation on scroll
(() => {
  const numbers = document.querySelectorAll('#why .grad-num');
  if (!numbers.length) return;

  const ease = t => 1 - Math.pow(1 - t, 3); // плавная анимация
  const duration = 1200; // скорость в мс

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (el.dataset.animated) return; // не повторять
      el.dataset.animated = "true";

      const target = parseFloat(el.textContent.replace(/\D+/g,'')) || 0;
      let start = 0;
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(1, (timestamp - startTime) / duration);
        const value = Math.floor(ease(progress) * target);
        el.textContent = value;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      el.textContent = "0";
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });

  numbers.forEach(num => observer.observe(num));
})();



