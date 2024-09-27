import {suma, resta, multiplicacion, division} from "./operaciones.js"

function handleButtonClick(event) {
  const h2 = document.getElementById("numerosOperaciones");

  if (event.target.value === "AC") {
    h2.textContent = h2.textContent.slice(0, -1);
  } else if (event.target.value === "=") {
    h2.textContent = "";
  } else {
    h2.textContent += event.target.value;
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function pruebaValores(){
  const h2Valor = document.getElementById("numerosOperaciones").textContent;

  let valoresSeparado;
  let resultado;

  if (h2Valor.includes("+")) {
    alert("Es una suma");
    valoresSeparado = h2Valor.split("+");
    resultado = suma(Number(valoresSeparado[0]), Number(valoresSeparado[1]));
    console.log(resultado);
    document.querySelector("#numerosOperaciones").innerText = resultado;
  } else if (h2Valor.includes("-")) {
    alert("Es una resta");
    valoresSeparado = h2Valor.split("-");
    resultado = resta(valoresSeparado[0], valoresSeparado[1]);
  } else if (h2Valor.includes("/")) {
    alert("Es una division");
    valoresSeparado = h2Valor.split("/");
    resultado = division(valoresSeparado[0], valoresSeparado[1]);
  } else if (h2Valor.includes("x")) {
    alert("Es una multiplicacion");
    valoresSeparado = h2Valor.split("x");
    resultado = multiplicacion(valoresSeparado[0], valoresSeparado[1]);
  } else {
    alert("SE HA PRODUCIDO UN ERROR");
  }
}

window.suma = suma;
window.resta = resta;
window.multiplicacion = multiplicacion;
window.division = division;
window.pruebaValores = pruebaValores;