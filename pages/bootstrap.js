console.log('Este es mi archivo de JS')

const parrafo = document.querySelector('p');

function cambiarParrafoUno() {
  parrafo.innerText = "<h3>Me cambiaste</h3>";
}

function cambiarEstilo() {
  parrafo.classList.add('red-text');
}

function textoNormal() {
  parrafo.classList.remove('red-text');
}

const botonAnidado = document.querySelector('.toast.show .toast-header button.btn-close')

const contenedorExtra = document.querySelector('#contenido-extra');

const copia = botonAnidado.cloneNode(false);
contenedorExtra.append(copia);

const inputCreado = document.createElement('input');
inputCreado.setAttribute('type', 'checkbox')
contenedorExtra.append(inputCreado)

// Listener example
const btnListener = document.querySelector('#btn-listener');
btnListener.addEventListener('click',cambiarEstilo);
btnListener.addEventListener('click',cambiarParrafoUno);

function cambiarInput() {
  inputCreado.setAttribute('type', 'number');
}

copia.addEventListener('click',cambiarInput);

// Formulario de registro
// titulo del formulario
// nombre
// email
// boton
function creaFormulario() {
  const form = document.createElement('form');
  const titulo = document.createElement('h2');
  titulo.innerText = "Formulario de Registro";
  
  const inputNombre = document.createElement('input');
  inputNombre.setAttribute('placeholder', 'Ingresa tu nombre')
  
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Ingresa tu email');
  
  const botonFormulario = document.createElement('button');
  botonFormulario.setAttribute('type', 'submit');
  botonFormulario.innerText = "Enviar";
  
  form.append(titulo);
  form.append(inputNombre);
  form.append(inputEmail);
  form.append(botonFormulario);
  
  contenedorExtra.append(form);
}

creaFormulario();

btnListener.addEventListener('click',creaFormulario);

// Get more than one element
console.log(document.querySelectorAll('input'));