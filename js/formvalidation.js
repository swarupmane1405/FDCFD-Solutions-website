// const form = document.forms["contact-form"];
// const sendButton = form.querySelector("button");

// // Add event listeners to input fields
// const inputFields = form.querySelectorAll("input, textarea");
// inputFields.forEach((input) => {
//   input.addEventListener("input", validateForm);
// });

// // Function to validate form fields
// function validateForm() {
//   const isValid = Array.from(inputFields).every(
//     (input) => input.value.trim() !== ""
//   );
//   sendButton.disabled = !isValid;
// }

// // Initial validation on page load
// validateForm();
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyrqDvK0Mi1TF1ok3IdMWWh3LeraOzuW1aLSocJk1HS8w3KFsCBawFFe-20F40r2xaH6Q/exec";
const form = document.forms["contact-form"];
const sendButton = form.querySelector("button");

// Function to validate form fields
function validateForm() {
  const inputFields = form.querySelectorAll("input, textarea");
  const isValid = Array.from(inputFields).every(
    (input) => input.value.trim() !== ""
  );
  sendButton.disabled = !isValid;
}

// Add event listeners to input fields for real-time validation
const inputFields = form.querySelectorAll("input, textarea");
inputFields.forEach((input) => {
  input.addEventListener("input", validateForm);
});

// Function to submit the form
function submitForm() {
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then((data) => {
      openPopup();
      console.log(data); // You might want to handle this data as per your requirement
    })
    .catch((error) => console.error("Error!", error.message));
}

// Function to handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (sendButton.disabled) {
    // If send button is disabled, form is not valid, do nothing
    return;
  }
  submitForm();
});

// Function to open popup
function openPopup() {
  popup.classList.add("open-popup");
}

// Function to close popup
function closePopup() {
  popup.classList.remove("open-popup");
}

// Initial validation on page load
validateForm();
