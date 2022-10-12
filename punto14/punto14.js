/*Realice un método que permita calcular el MCD (Máximo Común Divisor )
entre dos números.*/

let numero1 = prompt("Digite el primer numero");
let numero2 = prompt("Digite el segundo numero");
let a = 0;
let b = 0;
let resul = 0;

function MCD(){
    if(numero1>numero2){
        a = numero1;
        b = numero2;
    }else{
        a = numero2;
        b = numero1;
    }

    do {
        resul = b;
        b = a % b;
        a = resul;
    } while (b!=0);

    console.log(resul);
}

MCD();