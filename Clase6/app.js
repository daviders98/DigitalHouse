const express = require("express");
//variable express es una función
const app = express();
//por convención se guarda en variable app.
const path = require("path");

app.listen(3000,()=>{
    console.log("a");
});

app.get("/",function(req,res){
    let htmlPath = path.join(__dirname,"/views/index.html");
    res.sendFile(htmlPath);
})
/*
app.get("/contacto",function(req,res){
    res.send("Contactanos");
})
*/
