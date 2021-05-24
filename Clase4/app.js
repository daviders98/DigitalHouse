let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ];
  let estudiante1 = {
    nombre: 'Juan',
    promedio: 5,
    curso: 'iOS'
  };
  let estudiante2 = {nombre: 'Miguel',
    promedio: 2,
    curso: 'Android'
  };
  estudiantes.push(estudiante1,estudiante2);
  console.log(estudiantes);
  
  const arr3 = [
     {
        nombre: "a",
        edad: 13
     },
     {
        nombre: "b",
        edad: 10
     },
     {
      nombre: "a",
      edad: 20
   }
  ]
  console.log(arr3.find((el)=>el["nombre"]==='a'));
  //RETORNA EL PRIMER ELEMENTO QUE CUMPLE LA CONDICION.
  const index = arr3.findIndex((el)=>el.nombre==="b");
  console.log(index);
indexes = [];
arr3.forEach((elemen,index) => {
   if(elemen.nombre==="a") indexes.push(index)
});
console.log(indexes)

for(let persona of arr3){
   for (const propiedad in persona) {
      if (persona.hasOwnProperty(propiedad)) {
         console.log(persona[propiedad]);
      }
   }
}

const arr = [3,2,7,4];

const callback = (a,b)=>{
   return a-b;
}
const callback2 = (a,b)=>{
   return b-a;
}
//TIPO DE REFERENCIA EL ARREGLO entonces se debe crear una copia así:
const array =[...arr].sort(callback);
const array2 = [...arr].sort(callback2);
console.log(array);
console.log(array2);

//COMO ORDENAR SEGÚN EL VALOR DE UNA LLAVE DE OBJETOS DENTRO DE UN ARREGLO.
const informacion = [
   {
      numero:1
   },
   {
      numero:4
   },
   {
      numero:2
   }
];

const arreglarDes = (a,b)=>{
   return b.numero-a.numero
}
const arreglarAsc = (a,b)=>{
   return a.numero-b.numero
}
x = [...informacion].sort(arreglarDes);
y = [...informacion].sort(arreglarAsc)
console.log({x,y});

//Ordenar texto:
const textos = [{
   letra:"z"},
   {
      letra:"C",
   },
   {
      letra:"c",
   },
   {
      letra:"a",
   }
]

const arreglarTexto = (a,b) =>{
   return a.letra.toLowerCase().localeCompare(b.letra.toLowerCase());
}
console.log(textos.sort(arreglarTexto));
const arreglarTexto2 = (a,b) =>{
   return b.letra.toLowerCase().localeCompare(a.letra.toLowerCase());
}
console.log(textos.sort(arreglarTexto2));
