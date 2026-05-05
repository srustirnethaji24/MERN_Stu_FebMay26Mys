// function initModal(){
//     const modal = document.getElementById("contact-modal");
//     const modalContent = document.getElementById("modal-content");
//     const modalTrigger = document.getElementById("modal-trigger");
//     const modalClose = document.getElementById("modal-close");
//     const formCancel = document.getElementById("form-cancel");

//     if(!modal || !modalContent || !modalTrigger || !modalClose || !formCancel){
//         console.log("Modal Elements Not Found");
//         return;
//     }
//     function openModal(){
//         modal.classList.remove("hidden");

//         setTimeout(function(){
//             modalContent.classList.remove("scale-95","opacity-0");
//         },10);
//     }
//     function closeModal(){
//         modalContent.classList.add("scale--95","opacity-0");

//         setTimeout(function(){
//             modal.classList.add("hidden");
//         },200);
//     }
//     modalTrigger.addEventListener("click",openModal);
//     modalClose.addEventListener("click",closeModal);
//     formCancel.addEventListener("click",closeModal);

//     // Close when clicking on backup
//     modal.addEventListener("click",function(event){
//         if(event.target === modal){
//             closeModal()
//         }
//     });
//     console.log("Modal Opened Successfully");
// }
// function initModal() {
//     const trigger = document.getElementById("modal-trigger");
//     const modal = document.getElementById("contact-modal");
//     const close = document.getElementById("modal-close");

//     trigger.addEventListener("click", () => {
//         modal.classList.remove("hidden");
//     });

//     close.addEventListener("click", () => {
//         modal.classList.add("hidden");
//     });
// }
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