const submitButton = document.getElementById('submit-btn');
// const usernameDisplay = document.getElementById('displayUsername').innerText;

submitButton.addEventListener("click", () => {
    const name = document.getElementById('username');
    // const password = document.getElementById('')
    let username = name.value;
    localStorage.setItem('username',username);
});