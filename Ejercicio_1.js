class jefecita{
    constructor(codigo, descripccion, tipo, precioCompra, precioVenta, stock){
        this.codigo =codigo;
        this.descripccion = descripccion;
        this.tipo = tipo;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.stock = stock;
    }

}
function correr(){
    var productosArreglo = [];
    do{
        var opt =menu();
        switch (opt){
            case 1:
                productosArreglo.push(agregarProducto());
                break;
            case 2:
                productosArreglo = modificarStock(productosArreglo);
                break;
            case 3:
                productosArreglo = Vendido(productosArreglo);
                break;
            case 4:
                console.log("nada yet");
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

    return producto;
}
function modificarStock(productosArreglo){
    do{
        
        let codigo= prompt("que producto desea modificar, ingrese su codigo: ");
        for(i=0;i<productosArreglo.length;i++){
            if(productosArreglo[i].codigo == codigo){
                productosArreglo[i].stock = parseInt(prompt("A que desea cambar el valor de Stock? "));
                console.log("Stock de producto modificado");
                console.log(productosArreglo[i]);
            }
        }
        var again= prompt("desea hacer otra accion en este metodo: //si, no")
    }while(again!="no");
    return productosArreglo;
}
function Vendido(productosArreglo){
    do{
        
        let codigo= prompt("que producto vendio, ingrese su codigo: ");
        for(i=0;i<productosArreglo.length;i++){
            if(productosArreglo[i].codigo == codigo){
                productosArreglo[i].stock--;
                console.log("Stock del producto restante");
                console.log(productosArreglo[i].stock);
            }
        }
        var again= prompt("desea hacer otra accion en este metodo: //si, no")
    }while(again!="no");
    return productosArreglo;
}
function stockCero(productosArreglo){
    for(i=0;i<productosArreglo.length;i++){
        if(productosArreglo[i].stock === 0){
            console.log(productosArreglo[i]);
        }
    }
}