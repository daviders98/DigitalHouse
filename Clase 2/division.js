function division(numero1=0,numero2=1){
    if(isNaN(numero1) || isNaN(numero2) || numero2===0){
        console.log("No se puede hacer esta operación");
    }else{
        return numero1 / numero2;
    }
}

module.exports = division;