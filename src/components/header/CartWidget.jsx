import { React, useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function CartWidget() {
  const {cart,quantityProducts} = useContext(CartContext) 
  return (
    <div className='d-flex gap-2 align-items-center text-light'>
        <span className={`${cart.length === 0 ? 'd-none' : 'd-block'}`}>{quantityProducts()}</span>
        <Link className='d-flex align-items-center' to={'/cart'}><FaShoppingCart/></Link>
    </div>
  )
}

export default CartWidget