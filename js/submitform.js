const scriptURL =
  "https://script.google.com/macros/s/AKfycbyrqDvK0Mi1TF1ok3IdMWWh3LeraOzuW1aLSocJk1HS8w3KFsCBawFFe-20F40r2xaH6Q/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
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
});

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}
