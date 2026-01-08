document.addEventListener("DOMContentLoaded", () => {
  const body   = document.body;
  const toggle = document.querySelector(".nav-toggle");
  const panel  = document.getElementById("nav-panel");

  if (!toggle || !panel) return;

  // --- a11y атрибуты
  toggle.setAttribute("aria-controls", "nav-panel");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open menu");
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-hidden", "true");

  // --- helpers
  const isOpen = () => panel.classList.contains("open");

  function lockScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    body.dataset.scrollY = String(y);
    body.classList.add("no-scroll");
    body.style.top = `-${y}px`;
  }

  function unlockScroll() {
    const y = parseInt(body.dataset.scrollY || "0", 10);
    body.classList.remove("no-scroll");
    body.style.top = "";
    window.scrollTo(0, y);
    delete body.dataset.scrollY;
  }

  function openMenu() {
    panel.classList.add("open");
    toggle.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    panel.setAttribute("aria-hidden", "false");
    lockScroll();
  }

  function closeMenu() {
    panel.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    panel.setAttribute("aria-hidden", "true");
    unlockScroll();
  }

  // --- бургер
  toggle.addEventListener("click", () => (isOpen() ? closeMenu() : openMenu()));

  // --- делегирование кликов внутри панели:
  //     1) по крестику .nav-close
  //     2) по пунктам-якорям
  panel.addEventListener("click", (e) => {
    // 1) крестик
    if (e.target.closest(".nav-close")) {
      e.preventDefault();
      if (isOpen()) closeMenu();
      toggle.focus();
      return;
    }

    // 2) ссылки-якоря
    const a = e.target.closest("a[href^='#']");
    if (!a) return;

    if (window.matchMedia("(max-width: 1023.98px)").matches && isOpen()) {
      e.preventDefault();
      const id = a.getAttribute("href");
      closeMenu();
      requestAnimationFrame(() => {
        const el = id ? document.querySelector(id) : null;
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        if (id && id !== "#") history.replaceState(null, "", id);
      });
    }
  });

  // --- закрыть по ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) {
      closeMenu();
      toggle.focus();
    }
  });

  // --- при переходе на десктоп — снять блокировки/сбросить состояние
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addEventListener("change", () => {
    if (mq.matches && isOpen()) closeMenu();
  });
});
