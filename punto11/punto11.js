/*De los n números primos contenidos en un intervalo (por ejemplo los números 
primos del 1 al 100), calcule la sumatoria, la productoria y el promedio*/


let intervalo = 100;
let suma = 0;
let prod = 1;
let prom = 0;
let t = 0;

  function esPrimo(n){
        if(n == 1 || n == 0) return false;
      
        for(let i = 2; i < n; i++){
            if(n % i == 0) return false;}
                return true;
    }

    function calculo(){
        for(var i = 1; i <= intervalo; i++){
            if(esPrimo(i)) {
              console.log( i );
              suma += i;
              prod *= i;
              t++;
            }
        }
        prom = suma/t;
        console.log("La suma es :" +suma);
        console.log("La multiplicacion " +prod);
        console.log("El promedio es " +prom);
    }

    calculo();