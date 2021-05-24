function suma(numero1=0,numero2=0){
    if(isNaN(numero1) || isNaN(numero2)){
        console.log("No se puede sumar así :[")
    }else{
        return numero1 + numero2;
    }
}

module.exports = suma;