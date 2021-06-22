let express = require("express");
let app = express();
let rutasProductos = require("./routes/productos.js")
let rutasMain = require("./routes/main.js")

app.listen(3000,()=>{
    console.log("Servidor iniciado exitosamente");
})

app.use("/productos",rutasProductos);
app.use("/",rutasMain);
