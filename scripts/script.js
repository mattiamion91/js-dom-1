const button = document.getElementById('accensione') //seleziono elemento dom usando id
console.log(button); //check in console per capire se ho selezionato l'elemento giusto
const lampadina = document.getElementById('foto-lampadina') //seleziono elemento dom usando id

button.addEventListener('click', function(){ //aggancio una funzione che quando premo pulsante mi cambia sia src immagine sia alt immagine
    
    lampadina.src = './img/yellow_lamp.png'
    
    lampadina.alt = 'lampadina-accesa' 
    
    console.log('cliccato'); //check in console
    
})
