// create team popup functionality
const popup = document.getElementById('createTeam');
const openBtn = document.getElementById('addTeam');
const closeBtn = document.getElementById('closeBtn');
const submitBtn = document.getElementById('submitTeam');
let userInput = document.getElementById('teamName');
let selectedTeam;

// const teams = [
//   {
//     title: 'FrontEnd Team',
//     logo: 0,
//     team_pics: ['a.jpg', 'b.jpg']
//   }
// ]
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
      selectedTeam = btn.textContent;
      console.log(`Selected team: ${selectedTeam}`);
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
// card creation functionality
function addCard() {

    if (userInput.value === '' && selectedTeam === '') {
    alert('Please enter a team name!');
    return;}

    const newCard = document.createElement('div');
    newCard.className = 'team';

    //template literal for html
    newCard.innerHTML = 
    `
        <h4><span style="font-size: 17px;">${selectedTeam}</span> ${userInput.value}</h4>
        <a href="#"><i class="fas fa-arrow-right"></i></a>
              <div class="user-img">
                  <img src="IMG/man-in-office.jpg" alt="user">
              </div>
    `;
    const section = document.getElementById('teamCards');
    const teams = section.getElementsByClassName('teams');
    const lastCard = teams[teams.length - 1] ;

    section.insertBefore(newCard, lastCard);

    //reset values
    userInput.value ='';
    userInput.innerText= '';
    selectedTeam = '';

  };

