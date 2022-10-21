// Creare un array di oggetti con informazioni
const team = [
    {
        nome: 'Wayne Bernett',
        role: 'Founder & CEO',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias sapiente maxime dolores esse saepe iste perferendis quod, distinctio fuga, totam mollitia aliquam!',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caoll',
        role: 'Chief Editor',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias sapiente maxime dolores esse saepe iste perferendis quod, distinctio fuga, totam mollitia aliquam!',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        role: 'Office Manager',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias sapiente maxime dolores esse saepe iste perferendis quod, distinctio fuga, totam mollitia aliquam!',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        role: 'Social Media Manager',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias sapiente maxime dolores esse saepe iste perferendis quod, distinctio fuga, totam mollitia aliquam!',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        role: 'Developer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias sapiente maxime dolores esse saepe iste perferendis quod, distinctio fuga, totam mollitia aliquam!',
        image: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        role: 'Graphic Designer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias sapiente maxime dolores esse saepe iste perferendis quod, distinctio fuga, totam mollitia aliquam!',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
]

const wrapperHtml = document.getElementById('wrapper');
const addTeamHtml = document.getElementById('add-team');
const addTeam = document.getElementById('add-form');

for(let key in team){
    console.log('Nome: ' + team[key].nome);
    console.log('Ruolo: ' + team[key].role);
    console.log('Path img: ' + team[key].image);
    console.log('');
}

createCard();

addTeamHtml.addEventListener('click', btnAddTeam);

/********* FUNZIONI *********/
function createCard(){
    for(let key in team){
        let teamName = team[key].nome;
        if(teamName == 0){
            teamName = 'Pietro Brighella';
        }
        let teamRole = team[key].role;
        if(teamRole == 0){
            teamRole = 'Marketer';
        }
        let teamDesc = team[key].desc;
        if(teamDesc == 0){
            teamDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias sapiente maxime dolores esse saepe iste perferendis quod, distinctio fuga, totam mollitia aliquam!';
        }
        let teamImage = team[key].image;
        if(teamImage == 0){
                teamImage = `https://picsum.photos/400?random=${randomNumber(1,10)}`;
            } else {
                teamImage = './img/' + teamImage;
            }
        const cardHtml = document.createElement('div');
        cardHtml.setAttribute('id', 'card');
        cardHtml.classList = ('d-flex flex-column flex-sm-row container m-auto align-items-start col-12 col-md-6');
        cardHtml.innerHTML = `
                <div>
                    <img src="${teamImage}" alt="" class="rounded-circle user-img" width="180px" height="180px">
                </div>
                <div class="user-info">
                    <h3 class="fs-4 fw-bold green">${teamName}</h3>
                    <h5 class="fs-6 fst-italic">${teamRole}</h5>
                    <p>${teamDesc}</p>
                    <i class="fa-solid fa-arrow-right fs-1 green"></i>
                </div>
        `
        wrapperHtml.append(cardHtml);
    }
}

function btnAddTeam(){
    addTeamHtml.classList.add('add-team-box');
    const addTeamForm = document.createElement('div');
    addTeamForm.setAttribute('id', 'add-team-form');
    addTeamForm.classList = ('fixed-bottom');
    addTeamForm.innerHTML = `
    <h2 class="pb-3">Entra a far parte del nostro team</h2>
    <div class="form-floating mb-2">
        <input type="text" class="form-control" id="nome" placeholder="Inerisci nome e cognome">
        <label for="nome">Inserisci il tuo nome e cognome</label>
    </div>
    <div class="form-floating mb-2">
        <input type="text" class="form-control" id="role" placeholder="Qual &eacute; il tuo ruolo?">
        <label for="role">Qual &eacute; il tuo ruolo?</label>
    </div>
    <div class="form-floating mb-2">
        <input type="text" class="form-control" id="desc" placeholder="Raccontaci brevemente di te ...">
        <label for="desc">Raccontaci brevemente di te ...</label>
    </div>
    <div class="mb-2">
        <input type="file" class="form-control" id="photo" disabled>
    </div>
    <button id="btn-add" class="btn btn-lg w-100">Entra nel team</button>
    `
    setTimeout(() => {
        addTeam.append(addTeamForm);
        const btnAddHtml = document.getElementById('btn-add');
        btnAddHtml.addEventListener('click', addTeamMembers);
        btnAddHtml.addEventListener('click', reset);
        addTeam.classList.remove('d-none');
    }, 800);

    function reset(){
        addTeamHtml.classList.remove('add-team-box');
        addTeamForm.innerHTML = '';
    }

    wrapperHtml.addEventListener('click', reset);
}

function addTeamMembers(){
    const nomeHtml = document.getElementById('nome').value;
    const roleHtml = document.getElementById('role').value;
    const descHtml = document.getElementById('desc').value;
    const photoHtml = document.getElementById('photo').value;

    const newMember = {
        nome: nomeHtml,
        role: roleHtml,
        desc: descHtml,
        image: photoHtml,
    };  
    team.push(newMember);

    addTeamHtml.classList.remove('add-team-box');
    addTeam.classList.add('d-none');

    wrapperHtml.innerHTML = '';

    createCard();
};

console.log(team);