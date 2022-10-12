/*Kia Autos premia anualmente a sus mejores vendedores. Realice un método que diga cuanto vendió y la comisión de los 100
vendedores que tiene la empresa*/

let vendedores = [];
let a = 0;
let com = 0;

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function vendedor(){
    for (let i = 0; i < 100; i++) {
        a = random(1,200);
        vendedores.push(a);
    }
}

function comision(){
    for (let i = 0; i < vendedores.length; i++) {
        if(vendedores[i] <= 20){
            com = 0.10*vendedores[i];
            console.log("el vendedor " + [i+1] + ":" + " Vendió " + vendedores[i] + " millones" + " y recibe 10% de comision - $" + com.toFixed(1) + " Millones de comision");
        }else if(vendedores[i] > 20 && vendedores[i] < 40){
            com = 0.15*vendedores[i];
            console.log("el vendedor " + [i+1] + ":"+ " Vendió " + vendedores[i] + " millones" + " y recibe 15% de comision - $" + com.toFixed(0) + " Millones de comision");
        }else if(vendedores[i] >= 40 && vendedores[i] < 80){
        com = 0.20*vendedores[i];
        console.log("el vendedor " + [i+1] + ":"+ " Vendió " + vendedores[i] + " millones" + " y recibe 20% de comision - $" + com.toFixed(0) + " Millones de comision");
        }else if(vendedores[i] >= 80 && vendedores[i] < 160){
            com = 0.25*vendedores[i];
            console.log("el vendedor " + [i+1] + ":"+ " Vendió " + vendedores[i] + " millones" + " y recibe 25% de comision - $" + com.toFixed(0) + " Millones de comision");
        }else if(vendedores[i] > 160){
            com = 0.30*vendedores[i];
            console.log("el vendedor " + [i+1] + ":"+ " Vendió " + vendedores[i] + " millones" + " y recibe 30% de comision - $" + com.toFixed(0) + " Millones de comision");
            }
    }
}

vendedor();
comision();