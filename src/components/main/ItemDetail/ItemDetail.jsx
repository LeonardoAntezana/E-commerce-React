import {React, useState} from 'react'
import './itemDetail.css'
import ItemCount from '../products/ItemCount'
import {Link} from 'react-router-dom'

function ItemDetail( {item} ) {
  const [quantity,setQuantity] = useState();
  const onAdd = (quant) => {
    setQuantity(quant)
  }

  const {title, description, price, pictureUrl} = item
  return (
    <div className='bg-dark py-3 d-flex justify-content-center'>
      <div className='item-detail d-flex flex-column align-items-center gap-4'>
        <div className='text-light d-flex flex-column align-items-center'>
          <img className='img__detail' src={pictureUrl} alt={description} />
          <h2>{title}</h2>
          <p>{price}</p>
          <p>{description}</p>
        </div>
        {quantity === undefined ? <ItemCount stock={2} initial={1} onAdd={onAdd}/> : <Link to={'/cart'}><button>Finalizar compra</button></Link>}
      </div>
    </div>
  )
}

export default ItemDetail