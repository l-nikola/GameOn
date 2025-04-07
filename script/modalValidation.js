function validate() {
  let isValid = true;

  // First Name
  const firstName = document.getElementById("first");
  const firstNameError = firstName.parentElement;

  if (firstName.value.trim().length < 2) {
    firstNameError.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    firstNameError.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Last Name
  const lastName = document.getElementById("last");
  const lastNameError = lastName.parentElement;
  if (lastName.value.trim().length < 2) {
    lastNameError.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    lastNameError.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Email
  const email = document.getElementById("email");
  const emailError = email.parentElement;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.setAttribute(
      "data-error",
      "Veuillez entrer une adresse email valide."
    );
    emailError.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Birthdate
  const birthdate = document.getElementById("birthdate");
  const birthdateError = birthdate.parentElement;
  const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!birthdateRegex.test(birthdate.value)) {
    birthdateError.setAttribute(
      "data-error",
      "Vous devez entrer une date valide."
    );
    birthdateError.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Quantity
  const quantity = document.getElementById("quantity");
  const quantityError = quantity.parentElement;
  if (isNaN(quantity.value) || quantity.value < 0 || quantity.value === "") {
    quantityError.setAttribute(
      "data-error",
      "Vous devez entrer un nombre valide."
    );
    quantityError.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Location
  const locationInputs = document.querySelectorAll('input[name="location"]');
  const locationWrapper = locationInputs[0].closest(".formData");

  const locationChecked = Array.from(locationInputs).some(
    (input) => input.checked
  );

  if (!locationChecked) {
    locationWrapper.setAttribute(
      "data-error",
      "Vous devez sélectionner une localisation."
    );
    locationWrapper.setAttribute("data-error-visible", "true");
    isValid = false;
  } else {
    locationWrapper.removeAttribute("data-error");
    locationWrapper.removeAttribute("data-error-visible");
  }

  // Terms
  const terms = document.getElementById("checkbox1");
  const termsError = terms.parentElement;
  if (!terms.checked) {
    termsError.setAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    termsError.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  if (isValid) {
    document.querySelector(".bground").style.display = "none";

    const confirmationModal = document.querySelector(".confirmation-modal");
    confirmationModal.style.display = "block";
  }

  return false;
}
