import React from 'react'
import './main.css'
import Item from './products/Item'
import {Link} from 'react-router-dom'

function ItemList( {list} ) {
  return (
    <div className='container d-flex'>
        <div className='d-flex flex-column gap-3'>
        {list.map(game => {
            return (
                <Link key={game.id} className='link-item' to={`/item/${game.id}`}><Item item={game}/></Link>
            )
        })}
        </div>
    </div>
  )
}

export default ItemList