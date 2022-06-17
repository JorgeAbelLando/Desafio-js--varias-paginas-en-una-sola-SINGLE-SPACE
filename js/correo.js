var correo = document.querySelector("#floatingInput");
var contraseña = document.querySelector("#floatingPassword");
const password="1234";

function alerta(){
    if(contraseña.value==password){
        alert("Bienbenido "+correo.value+"; y su contraseña es: "+contraseña.value)
    }else {
        alert("contraseña invalida")
    }   
} 
