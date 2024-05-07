const scriptURL =
  "https://script.google.com/macros/s/AKfycbyrqDvK0Mi1TF1ok3IdMWWh3LeraOzuW1aLSocJk1HS8w3KFsCBawFFe-20F40r2xaH6Q/exec";
const form = document.forms["contact-form"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
