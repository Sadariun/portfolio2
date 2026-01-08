document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.copy);
    if (target) {
      navigator.clipboard.writeText(target.textContent.trim()).then(() => {
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy"), 1500);
      });
    }
  });
});
