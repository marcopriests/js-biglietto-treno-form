//recupero elementi DOM
const age = document.getElementById('age')
const km = document.getElementById('km')
const bottone = document.getElementById('bottone')

//creo la costante che indica il prezzo base del biglietto per km
const price = 0.21
let ticketPrice = 0


//comportamento bottone
bottone.addEventListener('click', function(){
    if (age.value < 18) {
        ticketPrice = price * km.value * 0.8

        console.log("Hai diritto allo sconto minorenni. Il prezzo del biglietto è di " + ticketPrice.toFixed(2) + "€")

    } else if (age.value >= 65) {
        ticketPrice = price * km.value * 0.6

        console.log("Hai diritto allo sconto per over 65. Il prezzo del biglietto è di " + ticketPrice.toFixed(2) + "€")

    } else {
        ticketPrice = price * km.value

        console.log("Non hai accesso a sconti. Il prezzo del biglietto è di " + ticketPrice.toFixed(2) + "€")
        
    }
})