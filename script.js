
// Variables y Constantes
let intentos = 6;
const button = document.getElementById('guess-button')
const input = document.getElementById('guess-input')
const valor = input.value
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

// Eventos
window.addEventListener('load', init)
button.addEventListener('click', intentar)

//Funciones
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}

function leerIntento(){
    let intento = document.getElementById('guess-input')
    intento = intento.value
    intento = intento.toUpperCase()
    return intento
}

function intentar(){
    let INTENTO = leerIntento()
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    if(INTENTO == palabra){
        terminar('Ganate')
        return
    }
    intentos --
    if(intentos <= 0){
        terminar('Perdiste')
    }

    function terminar (mensaje){
        const INPUT = document.getElementById('guess-input')
        const BOTON = document.getElementById('guess-button')
        INPUT.disabled = true
        BOTON.disabled = true
        let contenedor = document.getElementById('guesses')
        contenedor.innerHTML = mensaje

    }
}




