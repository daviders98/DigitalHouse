import React from 'react';

function ContenedorPublicidad(props){
    return(
            <div>
                <p> -- Inicio de espacio publicitario </p> 
                {props.children}
                <p> -- Fin de espacio publicitario </p> 
            </div>
         );
}

export default ContenedorPublicidad;