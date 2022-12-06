import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function CartWidget() {
  return (
    <div className='d-flex gap-2 align-items-center text-light'>
        <span>3</span>
        <Link className='d-flex align-items-center' to={'/cart'}><FaShoppingCart/></Link>
    </div>
  )
}

export default CartWidget