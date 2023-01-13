import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'

function Item( {item} ) {
  const {title,description,price,pictureUrl} = item
  return (            
    <div className="producto py-3 px-2 text-light row rounded">
        <div className='container__productoImg col-12 col-md-6'>
          <img className='w-100 h-100 rounded' src={pictureUrl} alt={title}></img>
        </div>
        <div className="producto__contenido col-12 col-md-6 d-flex flex-column align-items-center">
          <h2 className='mt-3 fs-5'>{title}</h2>
          <div className='text-center'>
            <p className='descrip text-uppercase'>{description}</p>
            <span className='fs-6'>{price}</span>
          </div>
          <Link className='link-item' to={`/item/${item.id}`}>
            <button className='text-uppercase fs-6 btn__ver'>ver mas</button>
          </Link>
        </div>
    </div>
  )
}

export default Item