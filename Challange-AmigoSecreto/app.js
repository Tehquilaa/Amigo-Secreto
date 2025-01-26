// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
lista = document.getElementById("listaAmigos");

function agregarAmigo() {

    let ingresarAmigo = document.getElementById("amigo").value
   

    if (ingresarAmigo == ''){
        alert('Por favor ingrese el nombre de un amigo');

    }else if(/\d/.test(ingresarAmigo)){
        alert('Por favor ingrese un nombre válido');
    }else{
        amigos.push(ingresarAmigo)
    }

    document.querySelector('#amigo').value = '';
    actualizarAmigos();
    console.log(amigos);
    return;
}

function actualizarAmigos() {
    
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){

        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    return;
}

function sortearAmigo(){
    if (amigos.length < 2){
        alert('Por favor ingrese mas de 1 amigo');
    }else{
        let random = Math.floor(Math.random() * amigos.length);
        let amigoElegido = amigos[random];
       
        document.getElementById("resultado").textContent = (`El amigo secreto es: ${amigoElegido}`);
    }
}