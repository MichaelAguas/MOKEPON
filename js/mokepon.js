const sectionAttack = document.getElementById("choose-attack");
const sectionRestart = document.getElementById("restarting")
const petSelection = document.getElementById("select-pet"); // Lee el html para obtener un elemento por ID
const reloadGame = document.getElementById("restart-bottom");

const sectionPet = document.getElementById("pet-selection");

const $ = selector => document.getElementById(selector);  
const checkedLangostelvis = $("langostelvis"); 
const checkedTucapalma = $("tucapalma"); 
const checkedPydos = $("Pydos"); 

const imagePet = document.getElementById("image-div")
const attacksContainer = document.getElementById("select-attack");
const playerPet = document.getElementById("player-pet");

const enemyPet = document.getElementById("enemy-pet");
const imaPet = document.getElementById("ima-div")

const spanAlyLives = document.getElementById("pet-lives"); 
const spanEnemyLives = document.getElementById("enemy-lives"); 

const petAttack = document.getElementById("pet-attack");
const enemyAttack = document.getElementById("enemy-attack");
const loseWin = document.getElementById("result")

const sectionMessage = document.getElementById("result-attack");

const cardsPet = document.getElementById("cards-pet");

let checkedHipodoge; 
let checkedCapipepo;
let checkedRatigueya;
let divTemplate; 

let playerAttack = [];
let randomAttacking = []; 
let attackRandom;

let fireAttack;
let waterAttack;
let earthAttack;
let buttonsAttack = []
let optionPlayer; 
let optionEnemy;

let playerVictories = 0; 
let enemyVictories = 0;  

let mokepones = []
let optionPet; 
let petPlayer;

let attacksMokepon;

class Mokepon { 
    constructor(nombre, imagen, vida) {
        this.name = nombre;
        this.image = imagen;
        this.life = vida; 
        this.attacks = []; // Allow to fill with information
    }
}

let hipodoge = new Mokepon("Hipodoge", "/estilos/images/hipodoge.png", 5 );
let capipepo = new Mokepon("Capipepo", "/estilos/images/capipepo.png", 5);
let ratigueya = new Mokepon("Ratigueya", "/estilos/images/ratigueya.png", 5);


hipodoge.attacks.push( 
    {attack: "💧", id: "Botton-Water"},
    {attack: "💧", id: "Botton-Water"},
    {attack: "💧", id: "Botton-Water"},
    {attack: "🔥", id: "Botton-Fire"},
    {attack: "🌱", id: "Botton-Earth"},
)

capipepo.attacks.push( 
    {attack: "🌱", id: "Botton-Earth"},
    {attack: "🌱", id: "Botton-Earth"},
    {attack: "🌱", id: "Botton-Earth"},
    {attack: "🔥", id: "Botton-Fire"},
    {attack: "💧", id: "Botton-Water"},
)

ratigueya.attacks.push( 
    {attack: "🔥", id: "Botton-Fire"},
    {attack: "🔥", id: "Botton-Fire"},
    {attack: "🔥", id: "Botton-Fire"},
    {attack: "💧", id: "Botton-Water"},
    {attack: "🌱", id: "Botton-Earth"},
)

mokepones.push(hipodoge, capipepo, ratigueya);


function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gameStarts() {
    sectionAttack.style.display = "none"; 
    sectionRestart.style.display = "none"; 

    mokepones.forEach((mokepon) => {
        optionPet = `
        <input type="radio" name="pet" id=${mokepon.name}>  
        <label class="pet-card" id="pet-card" for=${mokepon.name}>
            <p>${mokepon.name}</p>
            <img src=${mokepon.image} alt=${mokepon.name}>
        </label>
        `
        cardsPet.innerHTML += optionPet

        checkedHipodoge = $("Hipodoge");    
        checkedCapipepo = $("Capipepo"); 
        checkedRatigueya = $("Ratigueya")
    })

    petSelection.addEventListener("click", selectionPet);     // Agrega los eventos que ejecutan las acciones programadas    
    reloadGame.addEventListener("click", restartGame)
}

function selectionPet() {
    sectionAttack.style.display = "flex"; 
    sectionPet.style.display = "none"; 


    if (checkedHipodoge.checked) {
        playerPet.innerHTML = checkedHipodoge.id;
        imagePet.innerHTML = `<img src="${mokepones[0].image}" alt="${mokepones.name}">` 
        petPlayer = checkedHipodoge.id
    } else if (checkedCapipepo.checked) {
        playerPet.innerHTML = checkedCapipepo.id;
        imagePet.innerHTML = `<img src="${mokepones[1].image}" alt="${mokepones.name}">` 
        petPlayer = checkedCapipepo.id
    } else if (checkedRatigueya.checked) {
        playerPet.innerHTML = checkedRatigueya.id;
        imagePet.innerHTML = `<img src="${mokepones[2].image}" alt="${mokepones.name}">` 
        petPlayer = checkedRatigueya.id
    } else if (checkedLangostelvis.checked) {
        playerPet.innerHTML = checkedLangostelvis.id;
    } else if (checkedTucapalma.checked) {
        playerPet.innerHTML = checkedTucapalma.id;  
    } else if (checkedPydos.checked) {
        playerPet.innerHTML = checkedPydos.id;
    } else {
        alert("You haven´t chosen a pet");
    }

    selectAttack(petPlayer)
    petEnemy()
}

function selectAttack(petPlayer) {
    let playerAttacks 
    for (let i = 0; i < mokepones.length; i++) {
        if (petPlayer === mokepones[i].name) { 
            playerAttacks = mokepones[i].attacks;
        }  
    }
    showAttacks(playerAttacks)
}

function showAttacks(playerAttacks) {
    playerAttacks.forEach((attack) => {
        attacksMokepon = `<button class="bAttack" id=${attack.id}>${attack.attack}</button>`
        attacksContainer.innerHTML += attacksMokepon
    })

    fireAttack = document.getElementById("Botton-Fire");
    waterAttack = document.getElementById("Botton-Water");
    earthAttack = document.getElementById("Botton-Earth");
    buttonsAttack = document.querySelectorAll(".bAttack"); //CHOOSE THE ALL BUTTOM HERE
}

function petEnemy () {
    let randomPet = aleatorio(0, mokepones.length -1);

    enemyPet.innerHTML = mokepones[randomPet].name 
    imaPet.innerHTML = `<img src="${mokepones[randomPet].image}" alt="${mokepones[randomPet].name}">` 
    attackRandom = mokepones[randomPet].attacks
    buttonInteraction()
}

function buttonInteraction() {
    buttonsAttack.forEach((button) => {
        button.addEventListener("click", (e) => { //Dinamic adding eventListener
            if (e.target.textContent === "🔥") {
                playerAttack.push("🔥");
                button.style.background = "#4c4242";
                button.disabled = true;  
            } else if (e.target.textContent === "💧") {
                playerAttack.push("💧"); 
                button.style.background = "#4c4242";
                button.disabled = true;  
            } else { 
                playerAttack.push("🌱");
                button.style.background = "#4c4242";
                button.disabled = true;  
            }
            console.log(playerAttack); 
            randomAttack()
        })
    })
}

function randomAttack() {
    let attackingRandom =  aleatorio(0, attackRandom.length -1);
    
    if (attackingRandom == 0 || attackRandom == 1) {
        randomAttacking.push("🔥"); 
    } else if (attackingRandom == 3 || attackRandom == 4) {
        randomAttacking.push("💧");
    } else {
        randomAttacking.push("🌱"); 
    }
    console.log(randomAttacking);
    startingGame()
}

function startingGame(){
    if (playerAttack.length === 5) { 
        fighting()
    }
}

function powerPlayers(player, pc) { 
    optionPlayer = playerAttack[player];
    optionEnemy = randomAttacking[pc];
}

function fighting () {

    for (let index = 0; index < playerAttack.length; index++) {
        if (playerAttack[index] === randomAttacking[index]) {
            powerPlayers(index, index);
            fightResult("TIE!");                
        } else if (playerAttack[index] === "🔥" && randomAttacking[index] === "🌱" ) {
            powerPlayers(index, index);
            playerVictories++ 
            spanAlyLives.innerHTML = playerVictories;
            fightResult("WON!");
        } else if (playerAttack[index] === "💧" && randomAttacking[index] === "🔥") {
            powerPlayers(index, index);
            playerVictories++ 
            spanAlyLives.innerHTML = playerVictories;
            fightResult("WON!");
        } else if (playerAttack[index] === "🌱" && randomAttacking[index] === "💧") {
            powerPlayers(index, index);
            playerVictories++ 
            spanAlyLives.innerHTML = playerVictories;
            fightResult("WON!");
        } else  { 
            powerPlayers(index, index);
            enemyVictories++
            spanEnemyLives.innerHTML = enemyVictories;
            fightResult("LOSE!");
        }
    }
    checkinglives(); 
}

function checkinglives() {
    if (playerVictories === enemyVictories) {
        fightFinalResult("THAT´S TIE! ")
    } else if (playerVictories > enemyVictories) {
        fightFinalResult("YOU WIN! 🔥")
    } else  {
        fightFinalResult("YOU LOSE! ☠️")
    }
}

function restartGame() {
    location.reload()
}

function fightResult (result) {
    let spellPet = document.createElement("p"); 
    let spellEnemy = document.createElement("p");
    // let howWin = document.createElement("p");
    
    spellPet.innerHTML = optionPlayer;
    // howWin.innerHTML = result;
    spellEnemy.innerHTML = optionEnemy;

    petAttack.appendChild(spellPet);
    // loseWin.appendChild(howWin);
    enemyAttack.appendChild(spellEnemy);
}

function fightFinalResult (finalResult) {
    sectionRestart.style.display = "block"; 
    let paragraph = document.createElement("h2"); 
    paragraph.innerHTML = finalResult; 
    sectionMessage.appendChild(paragraph)
}

window.addEventListener("load", gameStarts); // Crea el evento en Windows de que cargue la "página" primero