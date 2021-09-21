import Pelicula from "./Pelicula.js";
import React from "react";


function TiraPeliculas(){
    return(
        <div>
            <Pelicula rating={2.0} titulo="Nemo" generos={["Fantasía,Aventuras"]}/>
            <Pelicula rating={4.3} titulo="harry poter" generos={["Animación"]}/>
            <Pelicula rating={4.0} titulo="harry poter 2"/>
            <Pelicula rating={5.0} titulo="harry poter 3" generos={["Fantasía"]}/>
            <Pelicula titulo="harry poter 4" generos={["Fantasía,Acción"]}/>
        </div>
        
        );
}

export default TiraPeliculas;