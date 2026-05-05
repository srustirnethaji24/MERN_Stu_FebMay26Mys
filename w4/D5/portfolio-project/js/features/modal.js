document.addEventListener("DOMContentLoaded", () => {

  const openBtn = document.getElementById("modal-trigger");
  const modal = document.getElementById("contact-modal");
  const closeBtn = document.getElementById("modal-close");
  const cancelBtn = document.getElementById("form-cancel");

  console.log("Modal JS loaded");

  if (!openBtn || !modal) {
    console.error("Modal elements not found");
    return;
  }

  // OPEN
  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // CLOSE (X)
  closeBtn?.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // CLOSE (Cancel)
  cancelBtn?.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // CLOSE OUTSIDE CLICK
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

});