import { React, useContext} from 'react'
import { CartContext } from '../../../../context/CartContext'
import './CartItem.css'
import { MdDelete } from 'react-icons/md'

function CartItem({item}) {
    const {removeItem} = useContext(CartContext)
    const {id, title, pictureUrl, price, quantity} = item
  return (
    <div className='item__cart py-3 d-flex justify-content-between'>
        <picture className='picture'>
            <img src={pictureUrl} alt={title} />
        </picture>
        <div>
            <h3 className='text-center titleItem__cart'>{title}</h3>
        </div>
        <div className='d-flex flex-column justify-content-evenly'>
            <p>Precio por producto: ${price}</p>
            <p>Precio total: ${(price * quantity)}</p>
            <p>Cantidad: {quantity}</p>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <button onClick={()=> removeItem(id)}><MdDelete className='boton__danger'/></button>
        </div>
    </div>
  )
}

export default CartItem

