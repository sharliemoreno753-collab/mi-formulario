const formulario =
document.getElementByld("registroForm");
const mensaje = document.getElementByld("mensaje");

formulario.addEventListener("submit", function(event) {

  event.preventDefault();

  const nombre = document.getElementByld("nombre").value;
  const email = document.getElementByld("email").value;
  const password = document.getElementByld("password").value;

  const usuario = {
    nombre: nombre,
    email: email,
    password: password
  };

  localStorage.setItem("uasuario", JSON.stringify(usuario));

  mensaje.textContent = "Cuenta guardada correctamente"

  formulario.reset();

  console.log("Usuario guardado", usuario)
});