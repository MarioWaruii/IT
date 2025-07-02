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
// filter cards
let selectedCategory = 'all'; // Default to showing all

function filterByCategory(event) {
  event.preventDefault(); // Stop link from navigating
  const links = document.querySelectorAll('#filterLinks a');

    // Remove 'active' class from all, add to clicked
  links.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');

  selectedCategory = event.target.getAttribute('data-filter');
  filterCards();
};

function filterCards() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.team-members .team-member-card');

  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    const content = card.textContent.toLowerCase();

    const categoryMatches = (selectedCategory === 'all' || category === selectedCategory);
    const textMatches = content.includes(searchTerm);

      if (categoryMatches && textMatches) {
        card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}