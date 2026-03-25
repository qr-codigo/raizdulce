document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "526183324748";

  const cliente = document.querySelector("#cliente").value;
  const hora = document.querySelector("#hora").value;
  const empleado = document.querySelector("#empleado").value;
  const pedido = document.querySelector("#pedido").value;
  const resp = document.querySelector("#respuesta");
  console.log(cliente.toUpperCase());
  console.log(pedido.toUpperCase());

  const fecha = new Date();
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1; // Los meses van de 0-11, se suma 1 [1]
const anio = fecha.getFullYear();
console.log(`${dia}/${mes}/${anio}`); 



  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		📲 *PEDIDO NUEVO*%0A
		📅 *${dia}/${mes}/${anio}*%0A
 ------------------------------------%0A
		👤 *Nombre*%0A
		- ${cliente}%0A
  ------------------------------------%0A
		⏰ *Hora de recoger pedido*%0A
		- ${hora}%0A
  ------------------------------------%0A
		💳 *Método de pago*%0A
		- ${empleado}%0A
  ------------------------------------%0A
		✅ *Pedido*%0A
		- ${pedido}`;


  if (cliente === "" || hora === "" || pedido === "") {
    resp.classList.add("fail");
    Swal.fire({
  title: "Datos incompletos",
  text: "¡Llena todos los campos para poder realizar tu pedido!",
  icon: "question"
});
   
    return false;
  }


  if (fecha.getDay() === 0) {
  console.log("¡Es domingo!");
   if (hora >= "10:10" && hora <= "13:45") {
        console.log("Dentro del horario laboral");
        
        resp.classList.remove("fail");
  resp.classList.add("send");
  window.open(url);
Swal.fire({
  title: "¡Pedido realizado con éxito!",
  icon: "success",
  draggable: true
});
    } else {
      Swal.fire({
  icon: "error",
  title: "Lo sentimos",
  text: "¡Pedido fuera de horario laboral!",
  footer: ""
});

        return false;
    }

} else {
  console.log("No es domingo.");
   if (hora >= "07:50" && hora <= "20:15") {
        console.log("Dentro del horario laboral");
        
        resp.classList.remove("fail");
  resp.classList.add("send");
  window.open(url);
Swal.fire({
  title: "¡Pedido realizado con éxito!",
  icon: "success",
  draggable: true
});
    } else {
      Swal.fire({
  icon: "error",
  title: "Lo sentimos",
  text: "¡Pedido fuera de horario laboral!",
  footer: ""
});

        return false;
    }
}
  

   


  
});
