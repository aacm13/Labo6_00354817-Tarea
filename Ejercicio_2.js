
class convertor{
    constructor(medida, unidad, deseada, tipo){
        this.medida = medida;
        this.unidad = unidad;
        this.deseada = deseada;
        this.tipo = tipo;
    }
    convertir(medida, unidad, deseada, tipo){
        var resultado=0;
        if(tipo ==="L"){
            if((unidad ==="m")&&(deseada ==="cm")){
                resultado = medida * 100 +'cm';
                return resultado;
            }else if((unidad ==="cm")&&(deseada ==="m")){
                resultado = medida /100 +'m';
                return resultado;
            }else if((unidad ==="km")&&(deseada ==="m")){
                resultado = medida *1000 +'m';
                return resultado;
            }else if((unidad ==="m")&&(deseada ==="km")){
                resultado = medida /1000 +'km';
                return resultado;
            }else if((unidad ==="ft")&&(deseada ==="m")){
                resultado = medida /3.28 + 'm';
                return resultado;
            }else if((unidad ==="m")&&(deseada ==="ft")){
                resultado = medida*3.28 +'ft';
                return resultado;
            }
        }else if(tipo ==="T"){
            if((unidad ==="c")&&(deseada ==="f")){
                resultado = ((medida * 9)/5)+32 +'f';
                return resultado;
            }else if((unidad ==="f")&&(deseada ==="c")){
                resultado = ((medida -32)*5)/9 +'c';
                return resultado;
            }else if((unidad ==="f")&&(deseada ==="k")){
                resultado = ((medida + 459.67)*5)/9 + 'k';
                return resultado;
            }else if((unidad ==="k")&&(deseada ==="f")){
                resultado = ((medida*9)/5)-459.67 + 'f';
                return resultado;
            }else if((unidad ==="c")&&(deseada ==="k")){
                resultado = medida + 273.15 + 'k';
                return resultado;
            }else if((unidad ==="k")&&(deseada ==="c")){
                resultado = medida - 273.15 + 'c';
                return resultado;
            }
        }
    }
}
convertor1 = new convertor();