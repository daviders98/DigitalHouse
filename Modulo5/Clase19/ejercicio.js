const express = require('express');
const app = express();
const series = [ { "id": 1, "name": "Friends" }, { "id": 2, "name": "Breaking Bad" }, { "id": 3, "name": "Dexter" }, { "id": 4, "name": "Six Feet Under" } ];

app.listen(8080,()=>{
    console.log("ya quedo")
})

app.get("/serie/:id?",function(req,res){
    if(req.params.id==undefined){
        res.send("no hay serie");
    }else{
        const a = series.filter((s)=>{
            return s.id==parseInt(req.params.id);
        })
        if(a.length>0){
            res.send(a[0].name);
        }else{
            res.send("indice no encontrado");
        }
    }
})