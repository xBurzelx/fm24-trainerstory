  // Scroll-Button ein-/ausblenden
  window.addEventListener("scroll", function () {
    const btn = document.getElementById("scrollToTopBtn");
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  // Nach oben scrollen
  document.getElementById("scrollToTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Theme-Switcher
  document.querySelectorAll(".theme-switcher button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.setAttribute("data-theme", btn.dataset.theme);
    });
  });