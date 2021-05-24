const {readFile} = require("fs");
readFile("/.app.js",()=>{
    console.log("a");
})

//Callback se ejecuta al final.
//así se resolvía antes lo asincrono, tenia que esperarse a que se hiciera y al final ya se hacía lo otro.
//Se descargó con npm i node-fetch para usar el módulo node-fetch

/*
const fetch = require("node-fetch");
const response = fetch("https://pokeapi.co/api/v2/pokemon/493").then((respuesta)=>{
    return respuesta.json();
}).then((datos)=>{
    console.log(datos);
})
*/

function obtenerPromesa(){
    return new Promise((resolve,reject)=>{
        reject("la promesa no se resolvió");
    })
}

obtenerPromesa().then((respuesta)=>{
    console.log(respuesta);
}).catch((error)=>{
    console.log(error);
})
//promesas y callbacks
const fetch = require("node-fetch");
const response = fetch("https://pokeapi.co/api/v2/pokemon/493000").then((respuesta)=>{
    return respuesta.status;
}).then((datos)=>{
    console.log(datos);
}).catch((error)=>{
    console.log("error en server"+error);
})

//Promesas con async await.
async function leerPokemon(){
    try{
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/4930");
        const datos = await respuesta.json();
        console.log(datos.name);
    }catch(error){
        console.log("Hubo un error");
    }
    
}

leerPokemon();