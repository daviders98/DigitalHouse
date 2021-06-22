/*APUNTE INCOMPLETO*/
const { writeFileSync } = require("node:fs");

/*
Heroe
id*: number;
nombre*
profesion*
pais*
reseña, string.
*/
 fs = require("filesystem");
function crear(heroe){
    const {id,nombre,profesion,pais} = heroe;
    if ((id || id===0) && nombre && profesion && pais) {
        //validar que el id no exista ya en al db
        const db = require("../heroes.json");
        db.push(heroe);
        writeFileSync("../heroes.json",JSON.stringify(db,null,2));
    }else{
        throw new Error("Información incompleta para crear heroe");
    }
}

function leerTodos(){
    return require("../heroes.json");
}

function leerHeroe(id){
    const heroeEncontrado = require("../heroes.json").find((heroe)=>{
        return heroe.id == id;
    });
    if(heroeEncontrado){
        return heroeEncontrado;
    }else{
        throw new Error('no existe el heroe con ID:'+id)
    }
}
function actualizarHeroe(id=0,heroe){
    if(validarDatos(heroe)){
        db=leerTodos();
        const indice = db.findIndex((heroeTemp)=>{
            heroeTemp===id
        });
        if(indice!=-1){
            const heroeEncontrado = db[indice];
            const heroeActualizado = {...heroeEncontrado,heroe};
            db[indice] = heroeActualizado;
            actualizarDB(db);
        }
    }
}

function actualizarDB(db){
    writeFileSync("../heroes.json",JSON.stringify(db,null,2));
}