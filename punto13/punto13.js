/*De los n elementos de la serie de fibonacci diga cuantos son pares, cuantos
impares y cuantos ceros*/

const numero = parseInt(prompt('Ingrese el numero de terminos a imprimir: '));
let n1 = 0, n2 = 1, nextTerm;
let par = [];
let contPar =0;
let impar = [];
let contImPar =0;
let cero = [];
let contCero =0;
console.log('SERIE FIBONACCI:');

function fibonacci(){
    for (let i = 1; i <= numero; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        console.log(n1);
    
        if(n1==0){
            cero.push(n1);
            contCero++;
        }else if(n1%2==0){
            par.push(n1);
            contPar++;
        }else{
            impar.push(n1);
            contImPar++;
        }
    }
}

function ImprimirCPI(){
    console.log(`Hay ${contCero} CEROS,`);
    console.log(`Hay ${contPar} PARES,`);
    console.log(`Hay ${contImPar} IMPARES`);
}

fibonacci();
ImprimirCPI();