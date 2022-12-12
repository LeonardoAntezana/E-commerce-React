import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'

function Item( {item} ) {
  const {title,description,price,pictureUrl} = item
  return (            
    <div className="producto d-flex gap-5 text-light p-2 rounded">
        <img className='img-resp rounded' src={pictureUrl} alt={title}></img>
        <div className="producto__contenido d-flex w-100 flex-column justify-content-between">
          <h2 className='fs-5'>{title}</h2>
          <div>
            <p className='descrip text-uppercase'>{description}</p>
            <span className='fs-6'>{price}</span>
          </div>
          <Link className='link-item' to={`/item/${item.id}`}>
            <button className='text-uppercase fs-6'>ver mas</button>
          </Link>
        </div>
    </div>
  )
}

export default Item