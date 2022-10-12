/*En 1994 el país A tiene una población de 25 Millones de Habitantes y el País 
B de 19.9 Millones. Las tasas de crecimiento de la población son de 2% y 3% 
respectivamente. Desarrollar un algoritmo para informar en que año la 
población del país B supera la del país A*/

let paisA = 25000000;
let paisB = 19900000;
let año = 1994;
crecA = 0.02;
crecB = 0.03;

    function crecimiento(){
        for (let i = 0; i < 10000; i++) {
            if(paisA>paisB){
                console.log("***** Año " + (año+1) + " ****")
                paisA = paisA + (paisA*crecA);
                paisB = paisB + (paisB*crecB);;
                console.log("Pais A:  " + paisA.toFixed(0) + " millones");
                console.log("Pais B:  " + paisB.toFixed(0) + " millones");
                año++;
            }else{
                break;
            }   
        }
        console.log("La poblacion B supera a la poblacion A en el año "+año)
    }

    crecimiento();