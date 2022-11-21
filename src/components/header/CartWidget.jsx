import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

function CartWidget() {
  return (
    <div className='d-flex gap-2 align-items-center text-light'>
        <span>3</span>
        <FaShoppingCart/>
    </div>
  )
}

export default CartWidget