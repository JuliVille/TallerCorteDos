/*Calcular el promedio de edades de hombres, mujeres y de todo un grupo
de alumnos.*/

let genero = [];
let edad = [];
let otro = true;
let i = 0;
let contM = 0;
let contF = 0;
let sumaF = 0;
let sumaM = 0;
let sumaA = 0;

function agregarAlumno(){
    while (otro) {
        genero[i] = prompt("Digite M si es masculino y F si es femenino");
        edad[i] = prompt("Digite la edad del alumno");
        i++;
        otro = confirm("Agregar otro alumno?");
        }
    }

function promedio(){
    for (let i = 0; i < genero.length; i++) {
        if(genero[i] == "f" || genero[i] == "F"){
            sumaF += Number(edad[i]);
            contF++;
        }else if(genero[i] == "m" || genero[i] == "M"){
            sumaM += Number(edad[i]);
            contM++;
        }else{
        }
    }
    console.log("El promedio de Mujeres es "+ sumaF/contF)
    console.log("El promedio de Hombres es "+ sumaM/contM)
}

function promedioTodo(){
    for (let i = 0; i < genero.length; i++) {
            sumaA += Number(edad[i]);
            contF++;
    }
    console.log("El promedio de todo el grupo es " + sumaA/edad.length);
}
agregarAlumno();
promedio();
promedioTodo();