// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

document.getElementById("amigo");


function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
        console.log(nombre);
        console.log(listaDeAmigos);
        // Alerta si no se ingreso un nombre
    if (nombre === "") {
       alert("por favor, inserte un nombre.");
        
    } else{
         revisarLista(nombre);
         limpiarCaja();
         mostrarLista(nombre);
        }
}


function limpiarCaja(){
    document.getElementById("amigo").value = "";
}


function revisarLista(nombre){
    if (listaDeAmigos.includes(nombre)) {
        alert("El nombre ya se encuentra en la lista.");
        }
        else{
            listaDeAmigos.push(nombre);
            console.log(listaDeAmigos);
        }
}

function mostrarLista(nombre) {
    document.getElementById("resultado");
    resultado.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        resultado.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
    }
}


function asignarTextoEnLista(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function sortearNombres() {
    if (listaAmigos.length != 0) {
        let amigoSorteado;
        let seleccionado =  Math.floor(Math.random()*listaDeAmigos.length);
        console.log(seleccionado);
        document.getElementById("resultado");
        resultado.innerHTML = "";
        resultado.innerHTML += `<li> El amigo sorteado es:  ${listaDeAmigos[seleccionado]} </li>`;
        
    }else{
        alert("La lista esta vacia");
    }
}
