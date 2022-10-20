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

for(let key in team){
    console.log('Nome: ' + team[key].nome);
    console.log('Ruolo: ' + team[key].role);
    console.log('Path img: ' + team[key].image);
    console.log('');
}

const wrapperHtml = document.getElementById('wrapper');

function createCard(){
    for(let key in team){
        let teamName = team[key].nome;
        let teamRole = team[key].role;
        let teamDesc = team[key].desc;
        let teamImage = team[key].image;
        const cardHtml = document.createElement('div');
        cardHtml.setAttribute('id', 'card');
        cardHtml.classList = ('d-flex flex-column flex-sm-row container m-auto align-items-start col-12 col-md-6');
        cardHtml.innerHTML = `
                <div>
                    <img src="./img/${teamImage}" alt="" class="rounded-circle user-img" width="180px" height="180px">
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

createCard();