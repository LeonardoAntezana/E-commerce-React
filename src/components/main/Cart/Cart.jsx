import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import './CartItem/CartItem.css'

function Cart() {
    const {cart, totalPrice, clear} = useContext(CartContext)
    if(cart.length === 0){
        return (<Message/>)
    }
    return (
        <div className='container'>
            {cart.map((item, index) => <CartItem key={index} item={item}/>)}
            <div className=' mt-3 d-flex justify-content-end'><p>Precio total del carrito: ${Math.round(totalPrice())}</p></div>
            <div className='d-flex gap-3 justify-content-center'>
                <button onClick={() => clear()} className='boton__vaciar'>Vaciar carrito</button>
                <button className='boton__confirmar'>Confirmar compra</button>
            </div>        
        </div>
    )
}

// FUNCION DE MENSAJE DE CARRITO VACIO
const Message = () => 
    <div className='w-50 mx-auto py-3 d-flex flex-column align-items-center gap-3'>
        <p>El carrito esta vacio</p>
        <Link to='/'><button className='boton__confirmar'>Volver al inicio</button></Link>
    </div>




export default Cart