const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras, numeros, guion y guion_bajo
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
    empresa: /^[a-zA-Z0-9\_\-]{1,30}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    consulta: /^[a-zA-Z0-9\_\-]{1,300}$/
}

const campos = {
    nombre: false,
    apellido: false,
    empresa: false,
    mail: false,
    telefono: false,
    consulta: false
} /// Objeto para validar al pulsar el boton 

const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre')
            break;

        case 'apellido':
            validarCampo(expresiones.apellido, e.target, 'apellido')
            break;

        case 'empresa':
            validarCampo(expresiones.empresa, e.target, 'empresa')
            break;

        case 'mail':
            validarCampo(expresiones.mail, e.target, 'mail')
            break;

        case 'telefono':
            validarCampo(expresiones.telefono, e.target, 'telefono')
            break;

        case 'consulta':
            validarCampo(expresiones.consulta, e.target, 'consulta')
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto') /**El backtick para usar template strings */
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true; ///Cambia booleano en caso de que sea correcto
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario); /**Cuando usuario levanta la flecha; */
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); /*Evito que mande al index el submit*/

    const terminos = document.getElementById('terminos');
    if (campos.nombre && campos.apellido && campos.empresa && campos.mail && campos.telefono && campos.consulta && terminos.checked) {
        formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
        }, 3000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('.formulario__grupo-correcto')
        })
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
    }
})



/// MODAL -> EN CONSTRUCCIÓN

/*

var modal = document.getElementById('modal_1');
var btn = document.getElementById('btn__modal');
var span_m = document.getElementsByClassName('Close')[0];

btn.onclick = function(){
    modal.style.display = 'block'
}

span_m.onclick = function(){
    modal.style.display = 'none'
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = 'none';
    }
}

*/
