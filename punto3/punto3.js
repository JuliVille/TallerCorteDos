/*Una empresa se requiere calcular el salario semanal de cada uno de los n
obreros que laboran en ella. El salario se obtiene de la siguiente forma:
a. Si el obrero trabaja 40 horas o menos se le paga $20 por hora
b. Si trabaja mas de 40 horas se le paga $20 por cada una de las primeras 
40 horas y $25 por cada hora extra.*/

let horasTrabajadas = prompt("Digite el numero de horas trabajadas en la semana");
let horasExtras = 0;
let salarioTotal = 0;


function salarioSemanal(){
    if(horasTrabajadas <= 40){
        salarioTotal = horasTrabajadas*20;
        console.log("Su salario es " +salarioTotal);
    }else if(horasTrabajadas > 40){
        horasExtras = horasTrabajadas-40;
        salarioTotal = ((horasTrabajadas-horasExtras)*20)+horasExtras*25;
        console.log("Su salario es " +salarioTotal);
    }
}

salarioSemanal();