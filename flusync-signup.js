const submitButton = document.getElementById('submit-btn');
// const usernameDisplay = document.getElementById('displayUsername').innerText;

submitButton.addEventListener("click", () => {
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const name = document.getElementById('username');
    // const password = document.getElementById('')
    checkPasswords();
     if (password !== password2) {
      event.preventDefault();
     } else {
        window.location.href = "http://127.0.0.1:5500/Challenge/recreate2.html";
     }
    let username = name.value;
    localStorage.setItem('username',username);

});
let isVisible = false;

  eyeIcon.addEventListener("click", () => {
      const passwordInput = document.getElementById("password");
      const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        eyeIcon.src = isPassword ? "icons/eye-on.svg" : "icons/eye-off.svg";
        eyeIcon.alt = isPassword ? "Hide password" : "Show password";
    });
 
  eyeIcon2.addEventListener("click", () => {
      const passwordInput = document.getElementById("password2");
      const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        eyeIcon2.src = isPassword ? "icons/eye-on.svg" : "icons/eye-off.svg";
        eyeIcon2.alt = isPassword ? "Hide password" : "Show password";
    }); 

   function checkPasswords() {
      const password = document.getElementById('password').value;
      const password2 = document.getElementById('password2').value;
      const message = document.getElementById('message');

      if (password !== password2) {
        message.textContent = "Passwords do not match.";
        return false;
      }

      message.textContent = "";
      return true;
    };
