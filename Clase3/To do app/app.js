const tareas = require("./tareas");
//se hace fuera para que siempre lo tenga almacenado en memoria.
const listado = tareas.leer();
console.log(tareas.leer());

let accion = process.argv[2];

switch(accion){
    case "listar":
        for(let i=0; i<listado.length;i++){
            console.log(`titulo:${listado[i].titulo} status: ${listado[i].status}`)
        }
        break;
    case "agregar":
        break;
    default:
        console.log("Acción no soportada");
}