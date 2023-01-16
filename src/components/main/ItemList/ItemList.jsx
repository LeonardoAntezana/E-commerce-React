import React from 'react'
import '../main.css'
import Item from '../products/Item'

function ItemList( {list} ) {
  if(list.length === 0){
    return <div className='container__noproducts d-flex justify-content-center align-items-center'><p className='text-light'>No se encuentran productos de este tipo</p></div>
  }
  return (
    <div className='container d-flex'>
        <div className='d-flex flex-column gap-4'>
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