const emailInput = document.querySelector("#email-input");

emailInput.addEventListener("focus", () => {
  emailInput.placeholder = "";
});

emailInput.addEventListener("blur", () => {
  emailInput.placeholder = "Email Address";
});
