/*
const boton = document.getElementById('miBoton');
const midiv = document.getElementById('miDiv');

boton.addEventListener("click", () => {
    midiv.style.display = (midiv.style.display === "none") ? "block" : "none";
})
*/
/*
const bottonContador = document.getElementById("sumarClic");
const parrafoCont = document.getElementById("contador");
const bottonReset = document.getElementById("reset");
let cont = 0;

bottonContador.addEventListener("click", function() {
    cont++;
    parrafoCont.textContent = cont;
})

bottonReset.addEventListener("click", () => {
    cont = 0;
    parrafoCont.textContent = cont;
})
*/
/*
const botonCambiaColor = document.getElementById("botonColor");

botonCambiaColor.addEventListener("mouseover", function() {
    document.body.style.background = "red";
})
botonCambiaColor.addEventListener("mouseout", function() {
    document.body.style.background = "white";
})
*/
/*
const validarInput = document.getElementById("miInput");
const mensaje = document.getElementById("mensaje");
validarInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        mensaje.textContent = `Has escrito ${validarInput.value}`
        validarInput.value = "";
    }
})
*/
/*
let temporizadorID; 
let segundos = 0;

const elementoContador = document.querySelector("#temporizador");
const botonIniciar = document.querySelector("#iniciar");
const botonDetener = document.querySelector("#detener");

function actualizarContador() {
    segundos++;
    elementoContador.textContent = segundos;
}

botonIniciar.addEventListener("click", () => {
    temporizadorID = setInterval(actualizarContador, 1000);
})

botonDetener.addEventListener("click", () => {
    clearInterval(temporizadorID);
    segundos = 0;
    temporizadorID.textContent = segundos;
    document.getElementById("temporizador").textContent = segundos;
})
*/
/*
let contador = 0;

const counterElement = document.querySelector(".counter");

document.querySelector(".increment").addEventListener("click", function() {
    contador++;
    counterElement.textContent = contador;
});

document.querySelector(".decrement").addEventListener("click", function() {
    contador--;
    counterElement.textContent = contador;
})
*/
/*
document.querySelector("#miBoton").addEventListener("click", function() {
    let colores = ["red", "green", "blue", "yellow"];
    document.body.style.background = colores[Math.floor(Math.random() * colores.length)];
})
*/
/*
const result = document.getElementById("resultado");


document.querySelector("#miBoton").addEventListener("click", () => {
    const num1 = parseInt(document.getElementById("num1").value) || 0;
    const num2 = parseInt(document.getElementById("num2").value) || 0;
    const resultado = num1 + num2;
    result.textContent = "Resultado " + resultado;
})
*/

const boton = document.getElementById("miBoton");
const input = document.getElementById("tareaInput");
const listaTareas = document.getElementById("listaTareas");

boton.addEventListener("click", agregarTarea);

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        agregarTarea();
    }
})


function agregarTarea() {
    const tarea = input.value.trim();

    if (tarea === "") return;

    const li = document.createElement("li") //1. Creamos el elemento
    li.textContent = tarea; //2. Le asignamos contenido 

    li.addEventListener("click", () => li.remove()) 

    listaTareas.appendChild(li); //3. Lo agregamos al DOM
    input.value = "";

}


/*
const lista = document.getElementById("listaTareas");

// Agregar 3 tareas
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = `Tarea ${i}`;
    lista.appendChild(li);
}

// Verificar la estructura
console.log(lista.childNodes.length); // 3 (los 3 <li>)
console.log(lista.firstChild.textContent); // "Tarea 1"
*/