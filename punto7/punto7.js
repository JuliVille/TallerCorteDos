/*En un supermercado una ama de casa pone en su carrito los artículos que
va tomando de los estantes. La señora quiere asegurarse de que el cajero
le cobre bien lo que ella ha comprado, por lo que cada vez que toma un
artóculo anota su precio junto con la cantidad de artículos iguales que ha
tomado y determina cuanto dinero gastará en ese artículo; a esto le suma lo
que irá gastando en los demás artículos, hasta que decide que ya tomó
todo lo que necesitaba. Ayúdele a esta señora a obtener el total de su
compra*/


let articulo = [];
let precio = [];
let i = 0;
let otro = true;
let totalCompra = 0;

function agregarArticulo(){
    while (otro) {
        articulo[i] = prompt( `**Articulo numero ${i+1}**` +" Digitar numero articulos ");
        precio[i] = prompt("Digitar precio del articulo ");
        i++;
        otro = confirm("Desea agregar OTRO articulo?");
    }
}

function superMercado(){
    for (let i = 0; i < articulo.length; i++) {
        let total = [];
        console.log(`**Articulo numero ${i+1}**`+ " Numero de articulos "+[articulo[i] + " Precio: $"+precio[i]])
        total[i] = articulo[i] * precio[i];
        console.log("Total $"+ total[i]);
    
        totalCompra += total[i];
    }
}

agregarArticulo();
superMercado();
console.log("****TOTAL COMPRA****");
console.log(totalCompra);