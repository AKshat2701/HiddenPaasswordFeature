let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

eyeIcon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeIcon.scr = "eyeOpen.png";
  } else {
    password.type = "password";
    eyeIcon.scr = "eyeClose.png";
  }
};
