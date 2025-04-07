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
  } else {
    firstNameError.setAttribute("data-error-visible", "false");
  }

  return isValid;
}
