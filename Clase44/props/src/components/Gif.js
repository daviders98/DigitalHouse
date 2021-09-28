import React, {Component} from 'react';
import { render } from 'react-dom';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'

class Gif extends Component{
    constructor(props){
        super(props);
        this.state = {
            gif:""
        }
    }
    
    apiCall(url,consecuencia){
        fetch(url)
        .then(response=>response.json())
        .then(data=>consecuencia(data))
        .catch(error=>console.log(error))
    }
    mostrarGif = (data) =>{
        this.setState = {
            gif: data.data.image_url
        }
    }
    traerGifNuevo(){
        this.apiCall("urlApi",this.mostrarGif());
    }
    componentDidMount(){
        this.traerGifNuevo()
    }
    componentDidUpdate(){
        alert("Hay un gif nuevo")
    }
    render(){
        let contenido;
        if(this.state.gif ==""){
            contenido=<p>Cargando...</p>
        }else{
            contenido = <img src={this.stage.gif}></img>
        }
        return(
        <div>
            {contenido}
            <button onClick={()=>traerGifNuevo}> Random Gif</button>
        </div>
        )
    }
}

export default Gif;