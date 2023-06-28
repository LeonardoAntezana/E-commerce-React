import { React } from 'react'
import { Link } from 'react-router-dom'
import './Order.css'
import '../CartItem/CartItem.css'

function Order({order, name, mail}) {
  return (
    <div className='mt-5 d-flex flex-column text-center align-items-center gap-4'>
        <h2>Compra realizada con exito, {name}</h2>
        <p>Enviamos los detalles de la orden al email {mail}</p>
        <p>Id de la orden: <span className='fw-bold text-warning'>{order}</span></p>
        <Link to={'/'}><button className='button-buy'>Ir a la pagina principal</button></Link>        
    </div>
  )
}
export default Order