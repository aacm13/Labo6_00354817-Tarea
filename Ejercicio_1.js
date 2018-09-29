class jefecita{
    constructor(codigo, descripcion, tipo, precioCompra, precioVenta, stock){
        this.codigo =codigo;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.stock = stock;
    }

}
function correr(){
    var productosArreglo = [];
    var ventas = [];
    do{
        var opt =menu();
        switch (opt){
            case 1:
                productosArreglo.push(agregarProducto());
                break;
            case 2:
                let cod= prompt("que producto desea modificar, ingrese su codigo: ");
                productosArreglo = modificarStock(productosArreglo, cod);
                break;
            case 3:
                let cod1= prompt("que producto desea modificar, ingrese su codigo: ");
                productosArreglo = Vendido(productosArreglo, cod1);
                ventas = manejoVentas(ventas,productosArreglo, cod1);
                break;
            case 4:
                promedioVentas(ventas);
                break;
            case 5:
                stockCero(productosArreglo);
                break;
            case 6:
                console.log("Saliendo...");
                break;
        }
    }while(opt!=6);
}
function menu(){
    console.log("__________________________________________")
    console.log("1. Agregar Producto");
    console.log("2. Modificar Stock");
    console.log("3. Registrar Ventas y Reducir Stock");
    console.log("4. Mostrar Promedio de Ventas Realizadas");
    console.log("5. Mostrar Productos con Stock 0");
    console.log("6. Salir");
    console.log("__________________________________________")
    let opt = prompt("ingrese accion");
    return parseInt(opt, 10);
}
function agregarProducto(){
    let codigo = prompt("Ingresar codigo de producto");
    let descripcion = prompt("Ingresar descripcion de producto");
    let tipo = prompt("Ingresar tipo de producto");
    let compra = prompt("Ingresar precio de compra de producto");
    let venta = prompt("Ingresar precio de venta de producto");
    let stock = prompt("Ingresar stock de producto");

    var producto = new jefecita(codigo, descripcion, tipo, parseFloat(compra), parseFloat(venta), parseInt(stock, 10));
    console.log("producto registrado en base de datos")
    return producto;
}
function modificarStock(productosArreglo, codigo){
    var again = "no";
    do{
        if(again === "si"){
            codigo= prompt("que producto desea modificar, ingrese su codigo: ");
        }
        for(i=0;i<productosArreglo.length;i++){
            if(productosArreglo[i].codigo == codigo){
                productosArreglo[i].stock = parseInt(prompt("A que desea cambar el valor de Stock? "));
                console.log("Stock de producto modificado");
                console.log(productosArreglo[i]);
            }
        }
        again= prompt("desea hacer otra accion en este metodo: //si, no")
    }while(again!="no");
    return productosArreglo;
}
function Vendido(productosArreglo, codigo){
    var again = "no";
    do{
        if(again === "si"){
            codigo= prompt("que producto desea modificar, ingrese su codigo: ");
        }
        for(i=0;i<productosArreglo.length;i++){
            if(productosArreglo[i].codigo == codigo){
                productosArreglo[i].stock--;
                console.log("Stock del producto restante");
                console.log(productosArreglo[i].stock);
            }
        }
        again= prompt("desea hacer otra accion en este metodo: //si, no")
    }while(again!="no");
    return productosArreglo;
}

function manejoVentas(ventas, productosArreglo, codigo){
    var again = "no";
    do{
        if(again === "si"){
            codigo= prompt("que producto desea modificar, ingrese su codigo: ");
        }
        for(i=0;i<productosArreglo.length;i++){
            if(productosArreglo[i].codigo == codigo){
                var produVenta = new jefecita(productosArreglo[i].descripcion, productosArreglo[i].precioCompra, productosArreglo[i].precioVenta);
                ventas.push(produVenta);
                console.log("venta registrada");
                return ventas;
            }
        }
        again= prompt("desea hacer otra accion en este metodo: //si, no")
    }while(again!="no");
    
}
function promedioVentas(ventas){
    var total=0;
    var cont = 0;
    var gasto =0;
    for(i=0;i<ventas.length;i++){
        total = total + ventas[i].precioVenta;
        gasto = gasto + ventas[i].precioCompra;
        cont++;
    }
    let profit = total -gasto;
    console.log("Total de productos vendidos:")
    console.log(cont)
    console.log("Total Ventas:")
    console.log(total);
    console.log("Net profit:")
    console.log(profit);

}
function stockCero(productosArreglo){
    for(i=0;i<productosArreglo.length;i++){
        if(productosArreglo[i].stock === 0){
            console.log(productosArreglo[i]);
        }
    }
}
correr();