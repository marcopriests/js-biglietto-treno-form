//recupero elementi DOM
const age = document.getElementById('age')
const km = document.getElementById('km')
const bottone = document.getElementById('bottone')

//creo la costante che indica il prezzo base del biglietto per km
const price = 0.21


//comportamento bottone
bottone.addEventListener('click', function(){
    if (age.value < 18) {
        console.log("minorenne")
    } else if (age.value >= 65) {
        console.log("over 65")
    } else {
        console.log("pepperoni")
    }

    console.log(age.value)
    console.log(km.value)


    console.log('cliccato')
})