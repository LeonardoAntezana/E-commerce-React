import React from 'react'
import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import './ItemCount.css'

function ItemCount( {stock, initial, onAdd} ) {
  const [cont, setCont] = useState(initial)
  return (
    <div className='item-count w-75 p-3 rounded-3 d-flex flex-column align-items-center gap-3'>
        <div className='w-100 p-2 bg-light rounded-3 d-flex justify-content-around align-items-center'>
          <button onClick={() => {cont > 1 ?setCont(cont - 1) : setCont(1)}} className='button-op rounded-3 d-flex align-items-center'><FaMinus/></button>
          <span id='contador'>{stock === 0 ? stock : cont}</span>
          <button onClick={() => {cont < stock ? setCont(cont + 1): setCont(stock)}} className='button-op rounded-3 d-flex align-items-center'><FaPlus/></button>
        </div>
        <button onClick={() => onAdd(cont)} className={`botonAdd btn ${stock === 0 && 'disabled'}`} >Add</button>
        {stock === 0 ? <p className='text-danger fst-italic'>Sin stock</p> : <p className='text-danger fst-italic'>El stock disponible es: {stock}</p>}
    </div>
  )
}

export default ItemCount