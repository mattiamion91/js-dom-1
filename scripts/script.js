const buttonToOn = document.getElementById('accensione') //seleziono elemento dom usando id
console.log(buttonToOn); //check in console per capire se ho selezionato l'elemento giusto
const lampadina = document.getElementById('foto-lampadina') //seleziono elemento dom usando id

buttonToOn.addEventListener('click', function(){ //aggancio una funzione che quando premo pulsante mi cambia sia src immagine sia alt immagine
    
    lampadina.src = './img/yellow_lamp.png'
    
    lampadina.alt = 'lampadina-accesa'

    buttonToOn.innerHTML = '<button id="accensione">SPEGNI</button>'

    
    console.log('cliccato'); //check in console
    
})


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const buttonToOff = document.getElementById('spegnimento') //seleziono elemento dom usando id
console.log(buttonToOff); //check in console per capire se ho selezionato l'elemento giusto
const lamp = document.getElementById('lamp-pic') //seleziono elemento dom usando id

buttonToOff.addEventListener('click', function(){ //aggancio una funzione che quando premo pulsante mi cambia sia src immagine sia alt immagine
    
    lamp.src = './img/white_lamp.png'
    
    lamp.alt = 'off-lamp' 
    
    console.log('cliccato'); //check in console
    
})
*/