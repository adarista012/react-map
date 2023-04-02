import React from 'react'

function Button({ king }) {
    const remove = (e) =>{
        e.target.parentNode.remove()
    }
  return (
    <div>
      {king.nombre} <button onClick={remove}>Borrar</button>
    </div>
    
  )
}

export default Button
