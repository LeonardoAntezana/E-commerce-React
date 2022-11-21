import React from 'react'
import CartWidget from './CartWidget'
import './header.css'

function NavBar() {
  return (
    <header className='header'>
      <nav className='container d-flex justify-content-between align-items-center'>
        <span className='title fs-1 fw-bold text-light'>LUMUS</span>
        <div className='d-flex gap-4'>
          <ul className='p-0 m-0 d-flex gap-4'>
            <li><a href='#'>Tu tienda</a></li>
            <li><a href='#'>Nuevo y Destacable</a></li>
            <li><a href='#'>Categorias</a></li>
          </ul>
          <CartWidget/>
        </div>
    </nav>
    </header>
  )
}

export default NavBar