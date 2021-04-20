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
    console.log(Productos);


 


} 
array1();


