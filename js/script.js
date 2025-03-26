//recupero elementi DOM
const form = document.getElementById('form')
const nome = document.getElementById('nome')
const km = document.getElementById('km')
const age = document.getElementById('age')
const bottone = document.getElementById('bottone')
const cancel = document.getElementById('cancel')

const nomeBiglietto = document.getElementById('nome-biglietto')
const tipoBiglietto = document.getElementById('tipo-biglietto')
const distanzaBiglietto = document.getElementById('distanza-biglietto')
const prezzoBiglietto = document.getElementById('prezzo-biglietto')

//creo la costante che indica il prezzo base del biglietto per km
const price = 0.21
let ticketPrice = 0


//comportamento bottone
bottone.addEventListener('click', function (event) {
    event.preventDefault()

    nomeBiglietto.innerHTML = nome.value
    distanzaBiglietto.innerHTML = km.value

    if (age.value == "Minorenne") {
        ticketPrice = price * km.value * 0.8

        tipoBiglietto.innerHTML = "Ridotto Minorenni"
        prezzoBiglietto.innerHTML = ticketPrice.toFixed(2) + "€"

    } else if (age.value == "Over") {
        ticketPrice = price * km.value * 0.6

        tipoBiglietto.innerHTML = "Ridotto Over 65"
        prezzoBiglietto.innerHTML = ticketPrice.toFixed(2) + "€"
    } else {
        ticketPrice = price * km.value

        tipoBiglietto.innerHTML = "Biglietto Intero"
        prezzoBiglietto.innerHTML = ticketPrice.toFixed(2) + "€"
    }

    nome.value = ''
    km.value = ''
    age.value = 'Default'
})

cancel.addEventListener('click', function () {
    nome.value = ''
    km.value = ''
    age.value = 'Default'
})