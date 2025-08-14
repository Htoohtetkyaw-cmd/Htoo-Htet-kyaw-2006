// Simple fade-in effect when scrolling (for performance, minimal JS)
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".profile-card, .glow-text");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});
