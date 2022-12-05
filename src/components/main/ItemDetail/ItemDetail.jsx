import React from 'react'

function ItemDetail( {item} ) {
  const {title, description, price, pictureUrl} = item
  return (
    <div className='d-flex flex-column align-items-center gap-2'>
        <img className='w-50' src={pictureUrl} alt={description} />
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
    </div>
  )
}

export default ItemDetail