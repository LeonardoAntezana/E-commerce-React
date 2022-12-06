import React from 'react'
import './main.css'
import Item from './products/Item'

function ItemList( {list} ) {
  return (
    <div className='container d-flex'>
        <div className='d-flex flex-column gap-3'>
        {list.map(game => {
            return (
                <Item key={game.id} item={game}/>
            )
        })}
        </div>
    </div>
  )
}

export default ItemList