import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'

function Cart() {
    const {cart, totalPrice, clear} = useContext(CartContext)
    if(cart.length === 0){
        return (<Message/>)
    }
    return (
        <div className='container'>
            {cart.map(item => <CartItem key={item.id} item={item}/>)}
            <div className=' mt-3 d-flex justify-content-end'><p>${totalPrice()}</p></div>
            <p className='d-flex justify-content-center'><button onClick={() => clear()}>Vaciar carrito</button></p>        
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