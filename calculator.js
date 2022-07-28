// AQUÍ ESTÁN LOS DATOS PARA LA SUMA
const suma1 = document.querySelector("#numero1suma");
const suma2 = document.querySelector("#numero2suma");
const presultsuma = document.querySelector("#resultadoSuma");
const sumaBtn = document.querySelector("#sumaBtn");

sumaBtn.addEventListener("click", sumaButton);

function sumaButton() {
  let suma = parseInt(suma1.value) + parseInt(suma2.value);
  presultsuma.innerText = "El resultado de tu operación es: " + suma;
}

// AQUÍ ESTÁN LOS DATOS PARA LA RESTA
const resta1 = document.querySelector("#numero1resta");
const resta2 = document.querySelector("#numero2resta");
const presultresta = document.querySelector("#resultadoResta");
const restaBtn = document.querySelector("#restaBtn");

restaBtn.addEventListener("click", restaButton);

function restaButton() {
  let resta = parseInt(resta1.value) - parseInt(resta2.value);
  presultresta.innerText = "El resultado de tu operación es: " + resta;
}

// AQUÍ ESTÁN LOS DATOS PARA LA MULTIPLICACIÓN
const mul1 = document.querySelector("#numero1mul");
const mul2 = document.querySelector("#numero2mul");
const presultmul = document.querySelector("#resultadoMultiplicacion");
const mulBtn = document.querySelector("#mulBtn")
mulBtn.addEventListener("click", mulButton)

function mulButton() {
  const mul = parseInt(mul1.value) * parseInt(mul2.value);
  presultmul.innerText = "El resultado de tu operación es: " + mul;
}
