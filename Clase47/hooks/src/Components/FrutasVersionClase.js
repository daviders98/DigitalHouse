import React, { Component} from 'react';

class FrutasVersionClase extends Component{
    constructor(){
        super();
        this.state = {
            listadoDeFrutas:["Manzana","Pera","Banana"]
        }
    }
        agregarFruta = e =>{
            e.preventDefault();
            let nuevaFruta = e.target.nuevaFruta.value;
            this.setState({
                listadoDeFrutas:[...this.state.listadoDeFrutas,nuevaFruta]
            });
            e.target.nuevaFruta.value = "";
        }
        render(){
            return(
            <div>
                <h2>Soy el componente frutas class</h2>
                <ul>
                {
                    this.state.listadoDeFrutas.map((fruta,i)=>{
                        return <li key={i}> { fruta} </li>
                    })
                }
                </ul>
                <form onSubmit= {this.agregarFruta}>
                    <input name="nuevaFruta" type="text"/> <br/>
                    <button>Añadir nueva fruta</button>
                </form>
            </div>
            )
        }
}
export default FrutasVersionClase

/*useEffect:

componentDidMount(){
    console.log("Se ejecuta al montarse el componente")
}

useEffect(()=>{ console.log("Se ejecuta solo al montarse el componente");},[])



componentDidUpdate(){
    console.log("se actualizó el componente")
}
useEffect(()=>{
    console.log("Se actualizó el componente")
},[miEstado])


componentWillUnmount(){
    console.log("se desmontó el componente")
}

useEffect(()=>{
    return()=>{console.log("Se desmontó el componente")
}},[])


HOOK USEREF
import {useRef } from 'react' 

let titulo = useRef();

<h1 ref={titulo}></h1>
titulo.current -> H1
*/