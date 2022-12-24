import { React, useState, useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { getFirestore, collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { validarDatos } from '../../../utilities/utilities.js'
import Order from '../Cart/Order/Order'
import {Link} from 'react-router-dom'

function FormOrder() {
    const {totalPrice, clear, cart} = useContext(CartContext)
    const [idOrder, setIdOrder] = useState('')
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [direccion, setDireccion] = useState('')
    // FUNCION PARA CREAR ORDEN DE COMPRA
    const createOrder = (nombre, mail, direccion) => {
      let order = {
          buyer: {name: nombre, email: mail, direccion: direccion},
          products: cart.map(prod => ({id:prod.id, title: prod.title, quantity: prod.quantity, price: prod.price})),
          date: serverTimestamp(),
          total: totalPrice(),
      }
      let data = getFirestore();
      let orders = collection(data, 'orders');
      addDoc(orders, order).then(res => setIdOrder(res.id))
      clear()
    }
  if(idOrder !== ''){
    return <Order name={nombre} mail={email} order={idOrder}></Order>
  }
  return (
    <div className='mt-4'>
        <form className='container d-flex flex-column align-items-center gap-4' onSubmit={(e) => e.preventDefault()}>
            <h3>Complete los datos para finalizar</h3>
            <div className='d-flex gap-4 flex-wrap justify-content-center'>
                <input type="text" className='w-100' onChange={(event) => setNombre(event.target.value)} placeholder='Nombre y Apellido' required maxLength={50}/>
                <input type="email" className='w-100' onChange={(event) => setEmail(event.target.value)} placeholder='Email' required/>
                <input type="email" className='w-100' onChange={(event) => setEmailConfirm(event.target.value)} placeholder='Email confirm' required />
                <input type="text" className='w-100' onChange={(event) => setDireccion(event.target.value)} placeholder='Direccion' required/>
            </div>
            <Link to={'/'}><button>Seguir comprando</button></Link>
            <button onClick={() => validarDatos(nombre, email, emailConfirm, direccion, createOrder)}>
              Terminar compra
            </button>
        </form>
    </div>
  ) 
}

export default FormOrder