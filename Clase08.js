function array1(){
    const Productos= [{id:1,precio:85, producto:"Shampoo"},{id:2,precio:50, producto:"Arroz"},
    {id:3,precio:250,producto:"Trapo de piso"},{id:4,precio:60, producto:"Salsa de tomate"},
    {id:5,precio:80,producto:"Bananas"}];

    Productos.sort(function(a,b){
        if(a.precio>b.precio){
            return a-b ;
        }
        if(a.precio<b.precio){
            return a-b;
        }
        if(a.precio==b.producto){
            return 0;
        }

    })
    
    for(const producto of Productos){
        let carrito=document.createElement("div");
        carrito.innerHTML= ` <h1> ID: ${producto.id}</h3>
                             <h2> Producto:${producto.nombre}</h2>
                             <h3> $ ${producto.precio}</h3>`;
        document.body.appendChild(carrito) ;
                           

    }




 


} 
array1();
