function Ingresarproducto1(){
    let producto1= parseInt(prompt("Ingrese costo del producto"))
}


function Ingresarproducto2(){
    let producto2= parseInt(prompt("Ingrese el costo de su producto"))

}


function costotal(a,b){
    costototal=a+b;
}
function resultado(mensaje){
    console.log(mensaje);
}
const  PRECIO1  =  x  =>  producto1 *  0.21 +producto1;
const  PRECIO2  =  y  =>  producto2 * 0.21 + producto2 ;


Ingresarproducto1();
Ingresarproducto2();
costotal(PRECIO1,PRECIO2);
resultado(costotal);





