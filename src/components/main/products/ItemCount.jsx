import React from 'react'
import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import './ItemCount.css'

function ItemCount( {stock, initial, onAdd} ) {
  const [cont, setCont] = useState(initial)
  return (
    <div>
        <div className='d-flex'>
            <button onClick={() => {cont > 1 ?setCont(cont - 1) : setCont(1)}} className='d-flex align-items-center'><FaMinus/></button>
            <span id='contador' className='text-info'>{cont}</span>
            <button onClick={() => {cont < stock ? setCont(cont + 1): setCont(stock)}} className='d-flex align-items-center'><FaPlus/></button>
        </div>
        <button onClick={() => onAdd(cont)} className={`botonAdd btn ${stock === 0 && 'disabled'}`} >Add</button>
        <p className='text-danger fst-italic'>El stock disponible es: {stock}</p>
    </div>
  )
}

export default ItemCount