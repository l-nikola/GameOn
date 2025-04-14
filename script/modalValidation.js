// Set error message on the form element
function setError(element, condition, message, customErrorContainer = null) {
  if (!condition) {
    const parent = customErrorContainer || element.parentElement;
    parent.setAttribute("data-error", message);
    parent.setAttribute("data-error-visible", "true");
    return false;
  }
  return true;
}

// Clear previous errors
function clearErrors() {
  document.querySelectorAll(".formData").forEach((formData) => {
    formData.removeAttribute("data-error");
    formData.removeAttribute("data-error-visible");
  });
}

// Validate the form
function validate() {
  let isValid = true;
  clearErrors();

  // First Name
  const firstName = document.getElementById("first");
  isValid &= setError(
    firstName,
    firstName.value.trim().length >= 2,
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
  );

  // Last Name
  const lastName = document.getElementById("last");
  isValid &= setError(
    lastName,
    lastName.value.trim().length >= 2,
    "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  );

  // Email
  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isValid &= setError(
    email,
    emailRegex.test(email.value),
    "Veuillez entrer une adresse email valide."
  );

  // Birthdate
  const birthdate = document.getElementById("birthdate");
  const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
  isValid &= setError(
    birthdate,
    birthdateRegex.test(birthdate.value),
    "Vous devez entrer votre date de naissance."
  );

  // Quantity
  const quantity = document.getElementById("quantity");
  isValid &= setError(
    quantity,
    !isNaN(quantity.value) && quantity.value >= 0 && quantity.value !== "",
    "Vous devez entrer un nombre valide."
  );

  // Location
  const locationInputs = document.querySelectorAll('input[name="location"]');
  const locationWrapper = locationInputs[0].closest(".formData");
  const locationChecked = Array.from(locationInputs).some(
    (input) => input.checked
  );
  isValid =
    setError(
      locationInputs[0],
      locationChecked,
      "Vous devez choisir une option.",
      locationWrapper
    ) && isValid;

  // Terms
  const terms = document.getElementById("checkbox1");
  isValid &= setError(
    terms,
    terms.checked,
    "Vous devez vérifier que vous acceptez les termes et conditions."
  );

  // Display confirmation modal if all validations pass
  if (isValid) {
    document.querySelector(".bground").style.display = "none";
    document.getElementById("inscriptionForm").reset();
    document.querySelector(".confirmation-modal").style.display = "block";
  }

  return false;
}
