import React from 'react'
import './item.css'

function Item( {item} ) {
  const {id,title,description,price,pictureUrl} = item
  return (            
    <div className="producto">
        <img className='img-resp' src={pictureUrl} alt="xxx"></img>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{price}</span>
        <button id={id}>Agregar</button>
    </div>
  )
}

export default Item