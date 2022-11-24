import React from 'react'
import './item.css'

function Item( {item} ) {
  const {id,title,description,price,pictureUrl} = item
  return (            
    <div className="producto d-flex justify-content-between text-light p-2 rounded">
        <img className='img-resp rounded' src={pictureUrl} alt="xxx"></img>
        <div className="producto__contenido d-flex flex-column justify-content-between">
          <h2 className='fs-5'>{title}</h2>
          <p className='descrip text-uppercase'>{description}</p>
          <span className='fs-6'>{price}</span>
          <button className='w-50 mx-auto' id={id}>Agregar</button>
        </div>
    </div>
  )
}

export default Item