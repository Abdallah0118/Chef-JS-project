const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (username.value === "" || username.value.length < 5) {
    alert("Please enter your username of 5 characters or more.");
    return false;
  }

  if (password.value === "" || password.value.length < 8) {
    alert("Please enter your password of 8 characters or more.");
    return false;
  }

  if (email.value === "") {
    alert("Please enter your email.");
    return false;
  }

  if (!validateEmail(email.value)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Form submitted successfully!");
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
