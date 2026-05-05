const backToTopBtn = document.getElementById("back-to-top");

// Show / Hide button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("hidden");
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.add("hidden");
    backToTopBtn.classList.remove("show");
  }
});

// Scroll to top on click
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});