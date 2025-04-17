function editNav() {
  var x = document.getElementById("header");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".btn-signup");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const closeConfirmationBtns = document.querySelectorAll(".close-confirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  const isMobile = window.matchMedia("(max-width: 425px)").matches;
  modalbg.style.display = isMobile ? "flex" : "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close confirmation modal event
closeConfirmationBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    const confirmationModal = document.querySelector(".confirmation-modal");
    confirmationModal.style.display = "none";
  })
);
