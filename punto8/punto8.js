/*Un teatro otorga descuentos según la edad del cliente, determinar la cantidad
del dinero que el teatro deja de percibir por cada ua de las categorias. Tomar 
en cuenta que los niños menores de 5 años no pueden entrar al teatro y que 
existe un precio único en los asientos. Los descuentosse hacen tomando en 
cuenta el siguiente cuadro*/

let precioSinDes = prompt("Digite el precio sin descuento");
let edad = prompt("Digite la edad");
let descuento = 0;
let precioFinal = 0;
let dineroSinP = 0;

function teatroDes(){
    if(edad<5){
        console.log("Los niños menores de 5 años no pueden entrar al teatro");
    }else if(edad>=5 && edad<=14){
        descuento = 0.35*Number(precioSinDes);
        precioFinal = Number(precioSinDes-descuento);
        console.log("El precio final es $"+precioFinal)
        dineroSinP = descuento*precioFinal;
        console.log("El teatro pierde " + "$"+descuento + " Con el descuento");
    }else if(edad>=15 && edad<=19){
        descuento = 0.25*Number(precioSinDes);
        precioFinal = Number(precioSinDes-descuento);
        console.log("El precio final es $"+precioFinal)
        console.log("El teatro pierde " + "$"+descuento + " Con el descuento");
    }else if(edad>=20 && edad<=45){
        descuento = 0.10*Number(precioSinDes);
        precioFinal = Number(precioSinDes-descuento);
        console.log("El precio final es $"+precioFinal)
        console.log("El teatro pierde " + "$"+descuento + " Con el descuento");
    }else if(edad>=46 && edad<=65){
        descuento = 0.25*Number(precioSinDes);
        precioFinal = Number(precioSinDes-descuento);
        console.log("El precio final es $"+precioFinal)
        console.log("El teatro pierde " + "$"+descuento + " Con el descuento");
    }else if(edad>=66){
        descuento = 0.35*Number(precioSinDes);
        precioFinal = Number(precioSinDes-descuento);
        console.log("El precio final  es $"+precioFinal)
        console.log("El teatro pierde " + "$"+descuento + " Con el descuento");
    }
}

teatroDes();