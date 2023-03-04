function gameStarts() {
    let petSelection = document.getElementById("select-pet"); // Lee el html para obtener un elemento por ID
    petSelection.addEventListener("click", selectionPet);     // Agrega los eventos que ejecutan las acciones programadas    

}

function selectionPet() {

    const $ = selector => document.getElementById(selector); 

    let checkedHipodoge = $("hipodoge"); 
    let checkedCapipepo = $("capipepo"); 
    let checkedRatigueya = $("ratigueya"); 
    let checkedLangostelvis = $("langostelvis"); 
    let checkedTucapalma = $("tucapalma"); 
    let checkedPydos = $("Pydos"); 
    let playerPet = document.getElementById("player-pet");

    if (checkedHipodoge.checked) {
        playerPet.innerHTML = "Hipodoge";
        alert("Elegiste a Hipodoge");

    } else if (checkedCapipepo.checked) {
        playerPet.innerHTML = "Capipepo";
        alert("Elegiste a Capipepo");

    } else if (checkedRatigueya.checked) {
        playerPet.innerHTML = "Ratigueya";
        alert("Elegiste a Ratigueya");

    } else if (checkedLangostelvis.checked) {
        playerPet.innerHTML = "Langostelvis";
        alert("Elegiste a Langostelvis");

    } else if (checkedTucapalma.checked) {
        playerPet.innerHTML = "Tucapalma";
        alert("Elegiste a Tucapalma");

    } else if (checkedPydos.checked) {
        playerPet.innerHTML = "Pydos";
        alert("Elegiste a Pydos");
        
    } else {
        alert("No has elegido mascota");
    }
}

window.addEventListener("load", gameStarts); // Crea el evento en Windows de que cargue la "página" primero