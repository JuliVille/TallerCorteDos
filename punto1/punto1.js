/*El departamento de Seguridad de Transito de Barranquilla, desea saber de
los n autos que entrar a la ciudad, cuantos entran con calcomanía de cada
color. Conociendo el último digito de la placa de cada automóvil se puede
determinar el color de la calcomanía utilizando la siguiente relación*/

let placa = [];
let i = 0;
let otro = true;
let amarilla = 0;
let rosa = 0;
let roja = 0;
let verde = 0;
let azul = 0;

function digitarAuto(){
    while (otro) {
        placa[i] = prompt("Digitar ultimo digito de la placa");
        i++;
        otro = confirm("Desea agregar otro auto?");
    }
}

function colorCal(){
    for (let i = 0; i < placa.length; i++) {
        if(placa[i] == 1 || placa[i] == 2){
            amarilla++;
        }else if(placa[i] == 3 || placa[i] == 4){
            rosa++;
        }else if(placa[i] == 5 || placa[i] == 6){
            roja++;
        }else if(placa[i] == 7 || placa[i] == 8){
            verde++;
        }else if(placa[i] == 9 || placa[i] == 0){
            azul++;
        }else{
        }
    }
}

function imprimir(){
    console.log("Hay " + amarilla + " Carros con calcomania AMARILLA");
    console.log("Hay " + rosa + " Carros con calcomania ROSA");
    console.log("Hay " + roja + " Carros con calcomania ROJA");
    console.log("Hay " + verde + " Carros con calcomania VERDE");
    console.log("Hay " + azul + " Carros con calcomania AZUL");
}

digitarAuto();
colorCal();
imprimir();