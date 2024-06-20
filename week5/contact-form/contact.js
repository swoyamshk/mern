const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const messageInput = document.getElementById("message");

const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(addressInput.value);
    console.log(messageInput.value);
});



