//----  MODALES ------
let modal1 =document.getElementById("modal1");
let modal2 =document.getElementById("modal2");
let modal3 =document.getElementById("modal3");

let modalSobreNos =document.getElementById("modalSobreNos")

let dest1 =document.getElementById("dest1");
let dest2 =document.getElementById("dest2");
let dest3 =document.getElementById("dest3");

let close1 = document.getElementById("close1");
//----------FUNCIONES DE MODALES
function abreme(estacosa){
    estacosa.style.display = "block";
}
function cierrame(estacosa){
    estacosa.style.display = "none";
}
//cierre modales
window.onclick = function(cierralotodo) {
    if (cierralotodo.target == modal1) {
        modal1.style.display = "none";
    } else if (cierralotodo.target == modal2) {
        modal2.style.display = "none";
    } else if (cierralotodo.target == modal3) {
        modal3.style.display = "none";
    } else if(cierralotodo.target == modalSobreNos) {
        modalSobreNos.style.display = "none";
    }
}
//---hasta aca van las modales!---

//------------FORMULARIOS
function mostrarFormularioCont (){
    let = selFormularioCont = document.querySelector("#formularioContacto");
    selFormularioCont.classList.remove("noMostrar-s")
};

function mostrarFormularioResv (){
    let = selFormularioResv = document.querySelector("#formResv").classList.remove("noMostrar-s");

    /* ASI LO HICE PRIMERO, LO DEJO PARA RECORDAR QUE TAMBIÉN FUNCIONA
    let = selFormularioResv = document.querySelector("#formResv");
    selFormularioResv.classList.remove("noMostrar-s")*/
};
if (nombre)
    //Alertas formulario de contacto
function alertaFormCont(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correoelectronico").value;
    let motiv = document.getElementById("opcionesMotivo").value;
    let textarea1 = document.getElementById("mnsjcontacto").value;
    let telefono = document.getElementById("fonocontacto").value;

    if (nombre == ""){
        alert("El campo Nombre y Apellido es obligatorio")
    }else if (correo == ""){
        alert("El campo Correo Electrónico es obligatorio")
    }else if (telefono ==""){
        alert("El campo Teléfono es obligatorio")
    }else if (textarea1 == ""){
        alert("por favor, escriba un mensaje")
    }else if (motiv == "felicitaciones"){
        alert("¡Gracias "+nombre+"! Haremos llegar tus felicitaciones a nuestro equipo de trabajo y seguiremos mejorando para tí")
    }else if(motiv == "consulta"){
        alert("Gracias "+nombre+" responderemos tu consulta a la brevedad al correo"+ correo)
    }else if(motiv == "sugerencia"){
        alert("Gracias "+nombre+" por tu sugerencia, la haremos llegar a nuestro equipo de trabajo para seguir mejorando para tí")
    }else if(motiv == "reclamo"){
        alert("Gracias "+nombre+" por contactarnos, lamentamos tu mala experiencia, te daremos una pronta respuesta al correo"+ correo)
    }
}; 

    //-------Alertas formulario de reserva
 
/*Esto es lo mismo pero sin captura de datos con jquery
function alertaFormResv(){
    let nombreR = document.getElementById("nombreR").value;
    let correoR = document.getElementById("correoelectronicoR").value;
    let telefonoR = document.getElementById("fonoReserva").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hour").value;
    let asistentes = document.getElementById("assist").value;

    if (nombreR == ""){
        alert("El campo Nombre y Apellido es obligatorio");
    }else if (correoR == ""){
        alert("El campo Correo Electrónico es obligatorio");
    }else if (telefonoR ==""){
        alert("El campo Teléfono es obligatorio");
    }else if (fecha ==""){
        alert("Por favor seleccione una fecha para su reserva");
    }else if (hora == ""){
        alert("Por favor seleccione una hora para su reserva")
    }else if(asistentes == ""){
        alert("Por favor ingrese el numero de asistentes para su reserva")
    }else{
        alert("Muchas gracias "+ nombreR+ " por enviar tu solicitud de reserva; te contactaremos a la brevedad al correo electrónico "+correoR)
    }
};*/ 

function alertaFormResv(){
    let nombreR    = $("#nombreR").val();
    let correoR    = $("#correoelectronicoR").val();
    let telefonoR  = $("#fonoReserva").val();
    let fecha      = $("#fecha").val();
    let hora       = $("#hour").val();
    let asistentes = $("#assist").val();

    if (nombreR == ""){
        alert("El campo Nombre y Apellido es obligatorio");
    }else if (correoR == ""){
        alert("El campo Correo Electrónico es obligatorio");
    }else if (telefonoR ==""){
        alert("El campo Teléfono es obligatorio");
    }else if (fecha ==""){
        alert("Por favor seleccione una fecha para su reserva");
    }else if (hora == ""){
        alert("Por favor seleccione una hora para su reserva")
    }else if(asistentes == ""){
        alert("Por favor ingrese el numero de asistentes para su reserva")
    }else{
        alert("Muchas gracias"+nombreR+ " por enviar tu solicitud de reserva; hemos registrado "+asistentes+" te contactaremos a la brevedad al correo electrónico "+correoR)
    }
}; 


