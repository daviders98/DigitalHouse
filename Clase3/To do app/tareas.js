const fs = require("fs")
const tareas = {
    //ruta
    path: 'tareas.json',
    leer: function(){
        const listado = fs.readFileSync(this.path,"utf-8");
        return JSON.parse(listado);
    }
}

module.exports = tareas;

