const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const signUp = document.getElementById("signUp");
const form = document.getElementById("form");
const errormsg = document.getElementById("error");
const passwordDescription = document.getElementById("password-description");
const passwordStrength = document.getElementById("passwordStrength");
console.log("hello");

// console.log(lname, fname, email, password, cpassword, signUp, login )

let userTyping = false;
function isStrongPassword(password) {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return hasUppercase && hasLowercase && hasSpecialChar && hasNumber;
}
const displayDescription = () => {
  if (!userTyping) {
    passwordDescription.textContent = `Password must contain at least one uppercase letter,
        one lowercase letter, one special character, and one number`;
  }
};

function checkPasswordStrength(password) {
  if (password === "") {
    passwordStrength.textContent = "";
  } else {
    passwordDescription.style.display = "none";

    if (isStrongPassword(password)) {
      passwordStrength.textContent = "Strong password!";
      passwordStrength.style.color = "green";
    } else {
      passwordStrength.textContent = "Password is not strong enough.";
      passwordStrength.style.color = "red";
    }
  }
}
password.addEventListener("focus", displayDescription);
password.addEventListener("input", function () {
  checkPasswordStrength(this.value);
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
signUp.addEventListener("click", (e) => {
  e.preventDefault();

  if (fname.value == "") {
    errormsg.textContent = "Firstname cannot be empty";
    e.preventDefault();
  } else if (lname.value == "") {
    errormsg.textContent = "Lastname cannot be empty";
    e.preventDefault();
  } else if (email.value == "") {
    errormsg.textContent = "Email cannot be empty";
    e.preventDefault();
  } else if (!isValidEmail(email.value)) {
    errormsg.textContent = "Invalid email address.";
    e.preventDefault();
  } else if (phone.value == "") {
    errormsg.textContent = "Phone Number cannot be empty";
    e.preventDefault();
  } else if (phone.value.length < 11) {
    errormsg.textContent = "Invalid Phone Number";
    e.preventDefault();
  } else if (password.value == "") {
    errormsg.textContent = "Password cannot be empty";
    e.preventDefault();
  } else {
    errormsg.textContent = "";

    const user = {
      firstName: fname.value,
      lastName: lname.value,
      email: email.value,
      phoneNo: phone.value,
      password: password.value,
    };

    form.reset();
  }
});
