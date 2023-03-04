function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var playerAttack; 

function gameStarts() {
    let petSelection = document.getElementById("select-pet"); // Lee el html para obtener un elemento por ID
    petSelection.addEventListener("click", selectionPet);     // Agrega los eventos que ejecutan las acciones programadas    

    let fireAttack = document.getElementById("Botton-Fire");
    fireAttack.addEventListener("click", attackingFire);

    let waterAttack = document.getElementById("Botton-Water");
    waterAttack.addEventListener("click", attackingWater);

    let earthAttack = document.getElementById("Botton-Earth");
    earthAttack.addEventListener("click", attackingEarth);
}

// function

function selectionPet() {

    const $ = selector => document.getElementById(selector); 
    const play = 1; 

    let checkedHipodoge = $("hipodoge"); 
    let checkedCapipepo = $("capipepo"); 
    let checkedRatigueya = $("ratigueya"); 
    let checkedLangostelvis = $("langostelvis"); 
    let checkedTucapalma = $("tucapalma"); 
    let checkedPydos = $("Pydos"); 
    let playerPet = document.getElementById("player-pet");

    if (checkedHipodoge.checked) {
        playerPet.innerHTML = "Hipodoge";
        alert("You chose Hipodoge");

    } else if (checkedCapipepo.checked) {
        playerPet.innerHTML = "Capipepo";
        alert("You chose Capipepo");

    } else if (checkedRatigueya.checked) {
        playerPet.innerHTML = "Ratigueya";
        alert("You chose Ratigueya");

    } else if (checkedLangostelvis.checked) {
        playerPet.innerHTML = "Langostelvis";
        alert("You chose Langostelvis");

    } else if (checkedTucapalma.checked) {
        playerPet.innerHTML = "Tucapalma";
        alert("You chose Tucapalma");

    } else if (checkedPydos.checked) {
        playerPet.innerHTML = "Pydos";
        alert("You chose Pydos");
        
    } else {
        alert("You haven´t chosen a pet");
        play = 0;
    }

    if (play == 1) { 
        petEnemy(); 
    }
}

function petEnemy () {
    
    let randomPet = aleatorio(1,6);
    let enemyPet = document.getElementById("enemy-pet");

    if (randomPet == 1) {
        enemyPet.innerHTML = "Hipodoge"; 
    } else if (randomPet == 2) {
        enemyPet.innerHTML = "Capipepo"; 
    } else if (randomPet == 3) {
        enemyPet.innerHTML = "Ratigueya";
    } else if (randomPet == 4) {
        enemyPet.innerHTML = "Langostevil";
    } else if (randomPet == 5) {
        enemyPet.innerHTML = "Tucapalma";
    } else {
        enemyPet.innerHTML= "Pydos";
    }
}

function attackingFire() {
    playerAttack = "Fire"; 
    alert(`You attack with ${playerAttack}`);
    randomAttack()
}

function attackingWater() {
    playerAttack = "Water"; 
    alert(`You attack with ${playerAttack}`);
    randomAttack()
}

function attackingEarth() {
    playerAttack = "Earth"; 
    alert(`You attack with ${playerAttack}`);   
    randomAttack()
}

function randomAttack() {
    var attackingRandom =  aleatorio(1,3);
    if (attackingRandom == 1) {
        alert("Enemy attack with Fire");
    } else if (attackingRandom == 2) {
        alert("Enemy attack with Water");
    } else {
        alert("Enemy attack with Earth");
    }
}
window.addEventListener("load", gameStarts); // Crea el evento en Windows de que cargue la "página" primero