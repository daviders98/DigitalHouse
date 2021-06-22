let express = require("express");
let router = express.Router();

router.get("/",function (req,res){
    res.send("Bienvenido al sitio");
});


router.get("/contacto",function(req,res){
    res.send("Dejanos tu contacto");
})

module.exports = router;