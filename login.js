const formulario = document.getElementById("form-login");
const capital = "budapest";
let registros = [];
var arregloNuevo = [];
let lista = [];
let contra;

function login() {
  var userCo = document.getElementById("username/correo").value;
  var contrasena = document.getElementById("contrasena").value;
  var captcha = validarCAPTCHA(document.getElementById("captcha").value);
  lista = [];
  registros.forEach(function (element) {
    if (userCo == element[0][0] || userCo == element[0][1]) {
      lista.push(element);
      contra = element[0][2];
    }
  });

  if (lista.length != 0) {
    //if (lista.includes(contrasena[2])) {
    if (contrasena == contra) {
      if (captcha) {
        console.log(lista);
        alert("Sesion iniciada correctamente");
        //return;
      } else {
        alert("Captcha incorrecto");
      }
    } else {
      alert("Contraseña incorrecta");
    }
  } else {
    alert("Usuario no encontrado");
  }
}

function agregarRegistros() {
  for (let i = 0; i < 3; i++) {
    arregloNuevo = [];
    arregloNuevo.push(
      "usuario" + i,
      "usuario" + i + "@hotmail.com",
      "Ca12345678"
    );
    registros.push([arregloNuevo]);
  }

  /* arregloNuevo.push(document.getElementById("username").value);
  arregloNuevo.push(document.getElementById("correo").value);
  arregloNuevo.push(document.getElementById("contrasena").value); */

  //

  //console.log("guarde correctamente 'agregarRegistro' arreglo:");
  console.log(registros);
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //Funcion para evitar envio vacio del formulario
  //agregarRegistros();
  login();
  //? llamado a Validacion captcha
  /* if (validarCAPTCHA()) {
    alert("RESPUESTAS IGUALES");
    // Codigo adicional
  } else {
    alert("RESPUESTAS INCORRECTA");
  } */
});

//! FUNCION validarCAPTCHA
function validarCAPTCHA(valor) {
  valor = valor.toLowerCase();
  valor = valor.replace(/\s+/g, "");

  if (capital == valor) {
    return true;
  }
  return false;
}

agregarRegistros();
/* module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistros = agregarRegistros; */
