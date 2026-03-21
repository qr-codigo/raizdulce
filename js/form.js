document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "526182037550";

  const cliente = document.querySelector("#cliente").value;
  const hora = document.querySelector("#hora").value;
  const empleado = document.querySelector("#empleado").value;
  const pedido = document.querySelector("#pedido").value;
  const resp = document.querySelector("#respuesta");
  console.log(cliente.toUpperCase());
  console.log(pedido.toUpperCase());

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		📲*PEDIDO NUEVO*%0A
		😋*RAÍZ DULCE*%0A
 ------------------------------------%0A
		👤*Nombre*%0A
		- ${cliente}%0A
  ------------------------------------%0A
		⏰*Hora de recoger pedido*%0A
		- ${hora}%0A
  ------------------------------------%0A
		💳*Método de pago*%0A
		- ${empleado}%0A
  ------------------------------------%0A
		✅*Pedido*%0A
		- ${pedido}`;

  if (cliente === "" || hora === "" || pedido === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Datos incompletos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Tu pedido a sido realizado con éxito ${cliente}`;

  window.open(url);
});
