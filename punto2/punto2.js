/*Un Zoólogo pretende determinar el porcentaje de animales que hay en las
siguiente categorias de edades: 0 a 1 año, de mas de 1 año y menos de 3 y
de 3 o mas años. El zoológico todavía no está seguro del animal que va
estudiar. Si se decide por elefantes solo tomará una muestra de 20 de ellos;
si se decide por jirafas, tomara 15 de muestras y si son chompancés tomará
40.*/

let animales = prompt("Digite E para Elefantes, J para Jirafas, C para Chimpance");
let elefantes = [];
let jirafas = [];
let chimpance = [];
let suma = 0;
let por = 0;


function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function sAnimal(){
    if(animales == "E" ||animales == "e"){
        for (let i = 0; i < 20; i++) {
            elefantes.push(random(0,10));
        }
    }else if(animales == "J" ||animales == "j"){
        for (let i = 0; i < 15; i++) {
            jirafas.push(random(0,10));
        }
    }else if(animales == "C" ||animales == "c"){
        for (let i = 0; i < 40; i++) {
            chimpance.push(random(0,10));
        }
    }else{
        console.log("Digite una letra valida, Digite E para Elefantes, J para Jirafas, C para Chimpance")
    }
}


function porcentajeElefantes(){
    let sumaA = 0;
    let sumaB = 0;
    let sumaC = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let porA = 0;
    let porB = 0;
    let porC = 0;

    console.log("Edades: " + elefantes);
    if(animales == "E" ||animales == "e"){
        for (let i = 0; i < elefantes.length; i++) {
            if(elefantes[i]>=0 && elefantes[i]<=1 ){
                sumaA += elefantes[i];
                a++;
            }else if(elefantes[i]>1 && elefantes[i]<=3){
                sumaB += elefantes[i];
                b++;
            }else if(elefantes[i]>3){
                sumaC += elefantes[i];
                c++;
            }else{}
        }
        porA = sumaA/a;
        porB = sumaB/b;
        porC = sumaC/c;
    }
    console.log("promedio de Elefantes con edad menor que 1 :  " + porA);
    console.log("promedio de Elefantes con edad mayor que 1 y menor que 3 :  " + porB);
    console.log("promedio de Elefantes con edad mayor que 3 :  " + porC);
}

function porcentajeJirafas(){
    let sumaA = 0;
    let sumaB = 0;
    let sumaC = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let porA = 0;
    let porB = 0;
    let porC = 0;

    console.log("Edades: " +jirafas);
    if(animales == "J" ||animales == "j"){
        for (let i = 0; i < jirafas.length; i++) {
            if(jirafas[i]>=0 && jirafas[i]<=1 ){
                sumaA += jirafas[i];
                a++;
            }else if(jirafas[i]>1 && jirafas[i]<=3){
                sumaB += jirafas[i];
                b++;
            }else if(jirafas[i]>3){
                sumaC += jirafas[i];
                c++;
            }else{}
        }
        porA = sumaA/a;
        porB = sumaB/b;
        porC = sumaC/c;
    }
    console.log("promedio de Jirafas con edad menor que 1 :  " + porA);
    console.log("promedio de Jirafas con edad mayor que 1 y menor que 3 :  " + porB);
    console.log("promedio de Jirafas con edad mayor que 3 :  " + porC);
}


function porcentajeChimpance(){
    let sumaA = 0;
    let sumaB = 0;
    let sumaC = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let porA = 0;
    let porB = 0;
    let porC = 0;
    
    console.log("Edades: " +chimpance);
    if(animales == "C" ||animales == "c"){
        for (let i = 0; i < chimpance.length; i++) {
            if(chimpance[i]>=0 && chimpance[i]<=1 ){
                sumaA += chimpance[i];
                a++;
            }else if(chimpance[i]>1 && chimpance[i]<=3){
                sumaB += chimpance[i];
                b++;
            }else if(chimpance[i]>3){
                sumaC += chimpance[i];
                c++;
            }else{}
        }
        porA = sumaA/a;
        porB = sumaB/b;
        porC = sumaC/c;
    }
    console.log("promedio de chimpance con edad menor que 1 :  " + porA);
    console.log("promedio de chimpance con edad mayor que 1 y menor que 3 :  " + porB);
    console.log("promedio de chimpance con edad mayor que 3 :  " + porC);
}

function Imprimir(){
    if(animales == "E" ||animales == "e"){
        porcentajeElefantes();
    }else if(animales == "J" ||animales == "j"){
        porcentajeJirafas();
    }else if(animales == "C" ||animales == "c"){
        porcentajeChimpance();
    }
}



sAnimal();
Imprimir();