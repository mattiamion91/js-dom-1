const buttonToOn = document.getElementById('accensione') //seleziono elemento dom usando id
console.log(buttonToOn); //check in console per capire se ho selezionato l'elemento giusto
const lampadina = document.getElementById('foto-lampadina') //seleziono elemento dom usando id

let lampadinaAccesa = false

buttonToOn.addEventListener('click', function () { //aggancio una funzione che quando premo pulsante mi cambia sia src immagine sia alt immagine
    if (lampadinaAccesa === false) { //se la lampadina é spenta...
        
        lampadina.src = './img/yellow_lamp.png' //cambio l'immagine cambiando src

        lampadina.alt = 'lampadina-accesa' //cambio l'alt

        buttonToOn.innerHTML = '<button id="accensione">SPEGNI</button>' //cambio cio che c'e scritto nel bottone

        lampadinaAccesa = true // cambio la variabile booleana in true perche la lampadina si é accecsa
    
    } else { //se la lampadina é accesa
        
        lampadina.src = './img/white_lamp.png' //ritorno all'immagine di lampadina spenta

        lampadina.alt = 'lampadina-spenta' //ritorno alt lampadina spenta

        buttonToOn.innerHTML = '<button id="accensione">ACCENDI</button>' //ritorno alla scritta accendi perche ormai la lampadina é spenta

        lampadinaAccesa = false //ormai la lampadina é spenta qundi la mia variabile booleana é falsa

    }

    console.log('cliccato'); //check in console

})