/*La empresa Encuestas S.A desea crear una función que les permita conocer
de los 50.000 votos obtenidos por 3 candidatos, cual de estos fueel ganador
o indicar si hubo empate y la cantidad de votos obtenidos.*/

let candidato1 = 13916;
let candidato2 = 14544;
let candidato3 = 21540;

    function ganador(){
        if(candidato1>candidato2 && candidato1>candidato3){
          console.log("EL candidato 1 ganó con " +candidato1+ " votos")
        }else if(candidato2>candidato1 && candidato2>candidato3){
          console.log("EL candidato 2 ganó con " +candidato2+ " votos")
        }else if(candidato3>candidato1 && candidato3>candidato2){
          console.log("EL candidato 3 ganó con " +candidato3+ " votos")
        }else{
          console.log("Hubo empate");
        }
    }

    ganador();