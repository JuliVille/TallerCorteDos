/*Cinco miembros de un club contra la obesidad desean saber cuanto han
bajado o subido de peso desde la última vez que se reunieron. Para esto se
debe realizar un ritual de pesaje en donde cada uno se pesa en diez básculas
distintas para así tener el pormedio mas exacto de su peso. Si 
existe diferencia positiva entre este promedio de peso y el peso de la última 
vez que se reunieron, significa que subieron de peso. Pero si la diferencia
es negativa, significa que bajaron. Lo que el problema requere es que por
cada persona se imprima un letrero que diga: “SUBIÓ” o “BAJÓ” y lacantidad
de kilos que subió o bajó de peso. */

let pesoUltimaVez = prompt("Peso de la ultima vez que se reunieron en Kg");

let peso = [];
let suma = 0;
let prom = 0;

function digitar(){
    for (let i = 0; i < 10; i++) {
        peso[i] = prompt("Digite el peso de la bascula " + [i+1] + " en Kg:")
    }
}

function promedio(){
    for (let i = 0; i < peso.length; i++) {
        suma += Number(peso[i]);
    }
    prom = suma/10;
}

function calculo(){
    let res = 0;
    if(prom > pesoUltimaVez){
        res = prom-pesoUltimaVez;
        console.log("Peso promedio entre las 10 basculas: "+prom);
        console.log("Peso ultima vez: "+pesoUltimaVez);
        console.log("SUBIO " + res.toFixed(2) + "Kg");
    }else{
        res = prom-pesoUltimaVez;
        console.log("Peso promedio entre las 10 basculas: "+prom);
        console.log("Peso ultima vez: "+pesoUltimaVez);
        console.log("BAJO " + (-res.toFixed(2)) + "Kg");
    }
}

digitar();
promedio();
calculo();



