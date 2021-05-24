const express = require("express");
const path = require("path");
const app = express();

const publicpath = path.resolve(__dirname,"./public");
//establecer la carpeta public como una de recursos estáticos para acceder facilmente a ella.
app.use(express.static(publicpath));

app.listen(3000,()=>{
    console.log("ya está listo el servidor :D");
})

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})