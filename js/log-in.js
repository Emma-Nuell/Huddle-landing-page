const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
const form = document.getElementById("form");
const errormsg = document.getElementById("error");
console.log("helllo");

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

login.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value == "") {
    errormsg.textContent = "Email cannot be empty";
    e.preventDefault();
  } else if (!isValidEmail(email.value)) {
    errormsg.textContent = "Invalid email address.";
    e.preventDefault();
  } else if (password.value == "") {
    errormsg.textContent = "Password cannot be empty";
    e.preventDefault();
  } else {
      errormsg.textContent = "";
      
    let user = {
      email: email.value,
      password: password.value,
      };
      
    form.reset();
  }
});