import React from 'react'
import { useContext} from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import './CartItem/CartItem.css'

function Cart() {
    const {cart, totalPrice, clear} = useContext(CartContext);
    if(cart.length === 0){
        return (<Message/>)
    }
    return (
        <div className='container'>
            {cart.map((item, index) => <CartItem key={index} item={item}/>)}
            <div className='mb-3 d-flex fs-3 justify-content-center text-center'><p className='p-2 bg-secondary'>Precio total del carrito: ${Math.round(totalPrice())}</p></div>
            <div className='d-flex gap-3 justify-content-center mb-3'>
                <button onClick={() => clear()} className='boton__vaciar'>Vaciar carrito</button>
                <Link to={'/checkout'}><button className='boton__confirmar'>Confirmar compra</button></Link>
            </div>       
        </div>
    )
}

// FUNCION DE MENSAJE DE CARRITO VACIO
const Message = () => 
    <div className='w-50 mx-auto my-4 py-3 d-flex flex-column align-items-center gap-3'>
        <p className='fs-4'>El carrito esta vacio</p>
        <Link to='/'><button className='boton__confirmar'>Volver al inicio</button></Link>
    </div>

export default Cart