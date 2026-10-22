
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contactForm");

  if (!form) return;

  const nameInput = form.querySelector("#name");
  const emailInput = form.querySelector("#email");

  if (!nameInput || !emailInput) return;

  // Display an error directly beside its field.
  function showError(input, message) {
    let error = document.getElementById(input.id + "-error");

    if (!error) {
      error = document.createElement("span");
      error.id = input.id + "-error";
      error.className = "validation-error";
      input.insertAdjacentElement("afterend", error);
    }

    error.textContent = message;
    error.style.color = "#b42318";
    error.style.display = message ? "block" : "none";
    error.style.fontSize = "0.9rem";
    error.style.marginTop = "5px";

    input.setAttribute("aria-invalid", message ? "true" : "false");
    input.setAttribute("aria-describedby", error.id);
  }

  function validateName() {
    const name = nameInput.value.trim();

    if (name.length < 2) {
      showError(nameInput, "Enter at least 2 characters.");
      return false;
    }

    showError(nameInput, "");
    return true;
  }

  function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      showError(emailInput, "Enter a valid email address.");
      return false;
    }

    showError(emailInput, "");
    return true;
  }

  // Validate both fields when the form is submitted.
  form.addEventListener("submit", function (event) {
    const validName = validateName();
    const validEmail = validateEmail();

    if (!validName || !validEmail) {
      event.preventDefault();

      if (!validName) {
        nameInput.focus();
      } else {
        emailInput.focus();
      }
    }
  });

  // Recheck fields as customers correct their entries.
  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
});
