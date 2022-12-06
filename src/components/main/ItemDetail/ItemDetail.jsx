import {React, useState} from 'react'
import ItemCount from '../products/ItemCount'
import {Link} from 'react-router-dom'

function ItemDetail( {item} ) {
  const [quantity,setQuantity] = useState();
  const onAdd = (quant) => {
    setQuantity(quant)
  }

  const {title, description, price, pictureUrl} = item
  return (
    <div className='d-flex flex-column align-items-center gap-2'>
        <img className='w-50' src={pictureUrl} alt={description} />
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
      {quantity === undefined ? <ItemCount stock={2} initial={1} onAdd={onAdd}/> : <Link to={'/cart'}><button>Finalizar compra</button></Link>}
    </div>
  )
}

export default ItemDetail