const password = document.getElementById("password");
const iconinput = document.getElementById("iconinput");
const username = document.getElementById("username");
const myform = document.getElementById("myform");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordErorr");

// password alanında icon değişikliği
iconinput.addEventListener("click", function () {
  const type = password.attributes.type.value;
  if (type === "password") {
    password.attributes.type.value = "text";
    iconinput.classList.remove("fa-eye");
    iconinput.classList.add("fa-eye-slash");
  } else {
    password.attributes.type.value = "password";
    iconinput.classList.replace("fa-eye-slash", "fa-eye");
  }
});
// form onaylandığında  submit işlemi
myform.addEventListener("submit", function (event) {
  event.preventDefault();
  /* validation */
  /*email*/

  if (username.value === "") {
    usernameError.innerText = "Email alanını doldurun.";
    usernameError.style.visibility = "visible";
    username.focus();
    return false;
  }

  // regex formatı
  const emailFormat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  const isValidEmail = username.value.match(emailFormat);
  if (isValidEmail === null) {
    // alert ile bize uyarı verecek (email formatı yanlış)
    usernameError.İnnerText = "Email formatı yanlış";
    usernameError.style.visibility = "visible";
    username.focus();
    return false;
  }
  // password değerleri
  if (password.value === "") {
    passwordError.innerText = "şifre alanını doldurunuz.";
    passwordError.style.visibility = "visible";
    password.focus();
    return false;
  }
  // password değer uzunluğu
  if (password.value.length < 6) {
    passwordError.innerText = "En az 6 karakter olmalı";
    passwordError.style.visibility = "visible";
    password.focus();
    return false;
  }
  // send form
  console.log("form gönderiliyor...");
  //https .....
  window.location.href = "profile.html";
});
username.addEventListener("focusout", () => {
  usernameError.style.visibility = "hidden";
});
password.addEventListener("focusout", () => {
  passwordError.style.visibility = "hidden";
});
