import React from 'react'
import './item.css'

function Item( {item} ) {
  const {title,description,price,pictureUrl} = item
  return (            
    <div className="producto d-flex justify-content-between text-light p-2 rounded">
        <img className='img-resp rounded' src={pictureUrl} alt={title}></img>
        <div className="producto__contenido d-flex flex-column justify-content-between">
          <h2 className='fs-5'>{title}</h2>
          <div>
            <p className='descrip text-uppercase'>{description}</p>
            <span className='fs-6'>{price}</span>
          </div>
        </div>
    </div>
  )
}

export default Item