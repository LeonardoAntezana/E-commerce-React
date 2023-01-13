import {React, useState, useContext} from 'react'
import './itemDetail.css'
import ItemCount from '../products/ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from '../../../context/CartContext';

function ItemDetail( {item} ) {
  const [quantity,setQuantity] = useState();
  const {addItem} = useContext(CartContext)
  const onAdd = (quant) => {
    setQuantity(quant)
    addItem(item,quant)
  }

  const {title, description, price, pictureUrl, stock} = item
  return (
    <div className='d-flex justify-content-center'>
      <div className='item-detail d-flex flex-column align-items-center gap-4'>
        <div className='d-flex flex-column align-items-center gap-3'>
          <div className='img__detail'><img className='w-100 h-100' src={pictureUrl} alt={title} /></div>
          <h2>{title}</h2>
          <p>${price}</p>
          <p className='text-capitalize'>{description}</p>
        </div>
        {quantity === undefined ? <ItemCount stock={stock} initial={1} onAdd={onAdd}/> : <p className='d-flex gap-3'><Link to={'/cart'}><button>Finalizar compra</button></Link><Link to={'/'}><button>Seguir comprando</button></Link></p>}
      </div>
    </div>
  )
}

export default ItemDetail