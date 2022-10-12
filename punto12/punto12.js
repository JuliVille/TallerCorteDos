/*Teniendo como entrada un número entero, determinar cuantos dígitos tiene,
cuantos de ellos son pares e impares, calcule la sumatoria, la productoria y
el promedio de estos*/


let numeros = [];
let i = 0;
let otro = true;
let suma = 0;
let prod = 1;
let prom = 0;
let t=0;


function digitarNumero(){
    while (otro) {
        numeros[i] = prompt("Digitar numero ");
        i++;
        otro = confirm("Desea digitar otro numero?");
    }
}

function cantDigitos(){
    for (let i = 0; i < numeros.length; i++) {
           console.log("El numero "+numeros[i]+ " tiene "+ numeros[i].length+ " digitos");
    }
}

function par(){
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]%2==0){
            console.log("El numero es par: "+numeros[i]);
        }else{
            console.log("El numero es Impar: "+numeros[i]);
        }
        
    }
}

function calculo(){
    for (let i = 0; i < numeros.length; i++) {
        suma += Number(numeros[i]);
        prod *= Number(numeros[i]);
        t++;
    }
    prom = suma/t;
    console.log("La suma es :" +suma);
    console.log("La multiplicacion " +prod);
    console.log("El promedio es " +prom);
}

digitarNumero();
console.log("****CANTIDAD DIGITOS****");
cantDigitos();
console.log("****PAR O IMPAR****");
par();
console.log("****CALCULOS****");
calculo();