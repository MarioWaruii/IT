// create team popup functionality
const popup = document.getElementById('createTeam');
const openBtn = document.getElementById('addTeam');
const closeBtn = document.getElementById('closeBtn');
const submitBtn = document.getElementById('submitTeam');
const userInput = document.getElementById('teamName');

openBtn.onclick = () => {
  popup.style.display = 'block';
};

closeBtn.onclick = () => {
  popup.style.display = 'none';
};
//activate submit button functionality
function activatebutton(clickedBtn){
    const group = clickedBtn.parentElement;
    const buttons = group.querySelectorAll('.team-icon');

buttons.forEach(btn => {
    if (btn === clickedBtn) {
      btn.classList.add('active-btn');
      btn.classList.remove('disabled-btn');
    } else {
      btn.classList.remove('active-btn');
      btn.classList.add('disabled-btn');
    }
  });
}
document.querySelectorAll('.team-icon').forEach(button => {
  button.addEventListener('click', function () {
    activatebutton(this);
  });
});

