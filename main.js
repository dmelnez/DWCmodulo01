//import {suma} from "./operaciones"


        function handleButtonClick(event) {
            const h2 = document.getElementById("numerosOperaciones");

            
            if (event.target.value === "AC" ) {
                h2.textContent = h2.textContent.slice(0, -1);
            } 
            
            else if(event.target.value === "="){
                h2.textContent = "";
            }

            else {
                h2.textContent += event.target.value; 
            }
        }

   
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", handleButtonClick);
    });


function pruebaValores(){
    const h2Valor = document.getElementById("numerosOperaciones").textContent;

    let valoresSeparado;
    let resultado;


    if(h2Valor.includes("+")){
        alert("Es una suma")
        valoresSeparado = h2Valor.split("+");
        resultado = suma(valoresSeparado[0], valoresSeparado[1]);
        console.log(resultado);
    }

    else if(h2Valor.includes("-")){
        alert("Es una resta")
        valoresSeparado = h2Valor.split("-");
        resultado = resta(valoresSeparado[0], valoresSeparado[1]);
    }

    else if(h2Valor.includes("/")){
        alert("Es una division")
        valoresSeparado = h2Valor.split("/");
        resultado = division( valoresSeparado[0], valoresSeparado[1]);
    }

    else if(h2Valor.includes("x")){
        alert("Es una multiplicacion")
        valoresSeparado = h2Valor.split("x");
        resultado = multiplicacion(valoresSeparado[0], valoresSeparado[1]);
    }

    else{
        alert("SE HA PRODUCIDO UN ERROR")
    }
/*
    let valor1 = valoresSeparado[0];

    let valor2 = valoresSeparado[1];

   console.log(valor1 + " - " + valor2)*/

}


function mostrarResultado(resultado){
   const h2Resultado = document.getElementById("numerosOperaciones");

   h2Resultado.textContent =  resultado;

}


function suma(a,b){

    let resultado;

    a = parseInt(a);
    b = parseInt(b)

    if(a == 0 && b == 0 ){

        alert("Error en los valores")

    }

    else{

        resultado = a + b;

    }

    return resultado;

}


function resta(a,b){

    let resultado;

    a = parseInt(a);
    b = parseInt(b)

    if(a == 0 && b == 0 ){

        alert("Error en los valores")

    }

    else{

        resultado = a - b;

    }

    return resultado;

}




function division(a,b){

    let resultado;

    a = parseInt(a);
    b = parseInt(b)

    if(a == 0 && b == 0 ){

        alert("Error en los valores")

    }

    else{

        resultado = a / b;

    }

    return resultado;

}



function multiplicacion(a,b){

    let resultado;

    a = parseInt(a);
    b = parseInt(b)

    if(a == 0 && b == 0 ){

        alert("Error en los valores")

    }

    else{

        resultado = a * b;

    }

    return resultado;

}