const submitButton = document.getElementById('submit-btn');
// const usernameDisplay = document.getElementById('displayUsername').innerText;

submitButton.addEventListener("click", () => {
    const name = document.getElementById('username');
    // const password = document.getElementById('')
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