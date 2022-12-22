import { React, useState, useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { getFirestore, collection, addDoc, serverTimestamp} from 'firebase/firestore'
import Order from '../Cart/Order/Order'
import {Link} from 'react-router-dom'

function FormOrder() {
    const {totalPrice, clear, cart} = useContext(CartContext)
    const [idOrder, setIdOrder] = useState('')
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [direccion, setDireccion] = useState('')
    // FUNCION PARA CREAR ORDEN DE COMPRA
    const createOrder = (nombre, mail, telefono, direccion) => {
      let order = {
          buyer: {name: nombre, email: mail, tel: telefono, direccion: direccion},
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
        <form className='d-flex flex-column align-items-center gap-4' onSubmit={(e) => e.preventDefault()}>
            <h3>Complete los datos para finalizar</h3>
            <div className='d-flex gap-4 flex-wrap justify-content-center'>
                <input type="text" className='col-6' onChange={(event) => setNombre(event.target.value)} placeholder='Nombre y Apellido' required maxLength={50}/>
                <input type="email" className='col-4' onChange={(event) => setEmail(event.target.value)} placeholder='Email' required/>
                <input type="tel" className='col-2' onChange={(event) => setTel(event.target.value)} placeholder='11-' required maxLength={10}/>
                <input type="text" className='col-8' onChange={(event) => setDireccion(event.target.value)} placeholder='Direccion' required/>
            </div>
            <Link to={'/'}><button>Seguir comprando</button></Link>
            <button onClick={() => createOrder(nombre, email, tel, direccion)}>
              Terminar compra
            </button>
        </form>
    </div>
  ) 
}

export default FormOrder