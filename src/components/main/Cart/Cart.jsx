import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import { useEffect } from 'react'
import { useState } from 'react'

function Cart() {
    const {cart} = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState()
    useEffect(() => {
        setTotalPrice(cart.reduce((sum,prod) => prod.price * prod.quantity + sum, 0))
    }, [cart])
  return (
    <div className='container'>
        {cart.length === 0 ? <Message/> : cart.map(item => <CartItem key={item.id} item={item}></CartItem>)}
        {totalPrice !== 0 && <div className=' mt-3 d-flex justify-content-end'><p>${totalPrice}</p></div>}        
    </div>
  )
}

// FUNCION DE MENSAJE DE CARRITO VACIO
const Message = () => 
    <div className='w-50 mx-auto py-3 d-flex flex-column align-items-center gap-3'>
        <p>El carrito esta vacio</p>
        <Link to='/'><button>Volver al inicio</button></Link>
    </div>




export default Cart