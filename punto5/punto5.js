/*Encontrar el menor valor de un conjunto de n números dados*/

let numeros = [];
let i = 0;
let otro = true;
let menor = 99999999;

function digitarNumero(){
    while (otro) {
        numeros[i] = prompt("Digitar numero ");
        i++;
        otro = confirm("Desea digitar otro numero?");
    }
}

function mostrarNumeros(){
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
}


function numeroMenor(){
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] < menor){
            menor = numeros[i];
        }
    }
    console.log("***NUMERO MENOR***");
    console.log("El numero menor es " + menor);
}

digitarNumero();
mostrarNumeros();
numeroMenor();