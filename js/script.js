//recupero elementi DOM
const form = document.getElementById('form')
const nome = document.getElementById('nome')
const km = document.getElementById('km')
const age = document.getElementById('age')
const bottone = document.getElementById('bottone')
const cancel = document.getElementById('cancel')

const risultato = document.getElementById('risultato')


//creo la costante che indica il prezzo base del biglietto per km
const price = 0.21
let ticketPrice = 0


//comportamento bottone
bottone.addEventListener('click', function(event){
    event.preventDefault()

    if (age.value == "Minorenne") {
        ticketPrice = price * km.value * 0.8

        risultato.innerText = "Hai diritto allo sconto minorenni. Il prezzo del biglietto è di " + ticketPrice.toFixed(2) + "€"

    } else if (age.value == "Over") {
        ticketPrice = price * km.value * 0.6

        risultato.innerText = "Hai diritto allo sconto per over 65. Il prezzo del biglietto è di " + ticketPrice.toFixed(2) + "€"

    } else {
        ticketPrice = price * km.value

        risultato.innerText = "Non hai accesso a sconti. Il prezzo del biglietto è di " + ticketPrice.toFixed(2) + "€"
        
    }
})