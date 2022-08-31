const url = "https://www.breakingbadapi.com/api/characters"


var mejorNumeroRandom = (desde, hasta) => { return Math.random() * (hasta - desde) + desde }



document.querySelector(".row").classList.add("d-none")

//genera un numero alazar entre el 0 y el 62, para elegir un personaje de la api
var random = Math.trunc(mejorNumeroRandom(0,62))

var random2 = Math.trunc(mejorNumeroRandom(0,62))

fetch (url)

.then(response => response.json())
.then (data =>{     
    
    document.querySelector(".container-fluid").classList.remove("d-none")
    document.querySelector(".titulo").classList.remove("d-none")
    document.querySelector(".row").classList.remove("d-none")
    document.querySelector(".spinner").classList.add("d-none")


    //completa la informacion de la primera card

    var elementoNombre = document.querySelector("#nombre")
    elementoNombre.innerText  = data[random].name;

    var elementoActor = document.querySelector("#actor")
    elementoActor.innerText  = data[random].portrayed;

    var elementoImagen = document.querySelector(".card-img-top").setAttribute("src", data[random].img)
    

    //completa la informacion de la segunda card

    var elementoName = document.querySelector("#name")
    elementoName.innerText  = data[random2].name;

    var elementoPortrayed = document.querySelector("#portrayed")
    elementoPortrayed.innerText  = data[random2].portrayed;

    var elementoImg = document.querySelector("#imagen").setAttribute("src", data[random2].img)
    
    //no uso esta forma porque al clonar la primera card, se repite el personaje

    // var elementoCol = document.querySelector(".col-lg-4")
    // var dupNode = elementoCol.cloneNode(true);

    // var elementoRow = document.querySelector(".row")
    // elementoRow.appendChild(dupNode)
    
})