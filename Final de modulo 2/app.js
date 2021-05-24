let autos = [{
    marca: "Ford",
    modelo: "Fiesta",
    color: "Azul",
    precio: 150000,
    km: 200,
    cuotas: 12,
    anio: 2019,
    patente: "APL123",
    vendido: false
},{
    marca: "Toyota",
    modelo: "Corolla",
    color: "Blanco",
    precio: 100000,
    km: 0,
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: false
}];

let concesionaria = {
   autos: autos,
   buscarAuto: function(patente){
      for(let i = 0;i<autos.length;i++){
         if(autos[i].patente == patente) {
            return autos[i];
         }
      }
      return null;
},
venderAuto: function(patente){
   if(this.buscarAuto(patente) != null){
      let index = autos.indexOf(this.buscarAuto(patente));
      autos[index].vendido = true;
      }
},
autosParaLaVenta: function(){
return autos = this.autos.filter(function (elemento){
      return !elemento.vendido
   })
},
autosNuevos: function (){
   let autos = this.autosParaLaVenta();
   return autos.filter(function(element){
      return element.km <100;
   });
},
listaDeVentas: function(){
   let autos = this.autos.filter(function (elemento){
      return elemento.vendido
   })
   let arreglo = [];
   for( let i=0;i<autos.length;i++){
     arreglo.push(autos[i].precio)
   }
   return arreglo
},
totalDeVentas: function(){
    let carros = this.autos.filter(function(el){
           return el.vendido
       });
       if(carros.length>0){
           let total = carros.reduce(function(acum,ele){
           return acum.precio + ele.precio;
       });
       return total.precio;
       }else{
           return 0;
       }
},
puedeComprar: function(auto,persona){
   if(auto.precio <= persona.capacidadDePagoTotal && auto.precio/auto.cuotas<=persona.capacidadDePagoEnCuotas){
      return true;
   }return false;
},
autosQuePuedeComprar: function(persona){
   let autosDisponibles = this.autosParaLaVenta();
   let tempArr = [];
   for(let carro of autosDisponibles){
       if(this.puedeComprar(carro,persona)){
           tempArr.push(carro);
       }
   }
   return tempArr;
}
};

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000,
};

console.log(concesionaria.autosQuePuedeComprar(persona));
