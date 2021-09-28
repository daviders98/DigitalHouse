import Pelicula from "./Pelicula.js";
import React, { Component } from "react";

class TiraPeliculas extends Component {
  lanzarAlerta(){
    alert("CLICK")
  }
  cambiarAmarillo(){
    document.querySelector("body").style.backgroundColor = "Yellow"
  }
  cambiarRosa(){
    document.querySelector("body").style.backgroundColor = "Pink"
  }
  render() {
    return (
      <div onClick={this.lanzarAlerta} onMouseOver={this.cambiarAmarillo} onMouseOut={this.cambiarRosa}>
        <Pelicula rating={2.0} titulo="Nemo" generos={["Fantasía,Aventuras"]} />
        <Pelicula rating={4.3} titulo="harry poter" generos={["Animación"]} />
        <Pelicula rating={4.0} titulo="harry poter 2" />
        <Pelicula rating={5.0} titulo="harry poter 3" generos={["Fantasía"]} />
        <Pelicula titulo="harry poter 4" generos={["Fantasía,Acción"]} />
      </div>
    );
  }
}

export default TiraPeliculas;
