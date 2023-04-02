import React from 'react';
import './Card.css'
const Card = ( {king} ) => {
    
    return (
        <div className="container">
            
            <span style={{color:"red"}}>{king.nombre.toUpperCase()} </span>
            ha comido {king.vacasComidas} en sus {king.reinado} de reinado
            
            <img src={`https://www.html6.es/img/rey_${king.nombre}.png`}/>
        </div>
    )
}

export default Card;
