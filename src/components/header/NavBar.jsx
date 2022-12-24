import React from 'react'
import CartWidget from './CartWidget'
import Dropdown from './dropdown/Dropdown'
import './header.css'
import { Link } from 'react-router-dom'

function NavBar() {
  const lis = [
    { title: 'Accion', url: 'category/accion',
    subItems: ['Arcade y ritmo', 'Disparos en primera persona',
    'Disparos en tercera persona', 'Lucha'] },
    { title: 'Rol', url: 'category/rol',
    subItems: ['En grupo', 'Por turnos','Roguelike', 
    'Rol de accion'] },
    {title: 'Estrategia', url: 'category/estrategia',
    subItems: ['Cartas y mesa','Ciudades y asentamientos',
    'Defensa de torres', 'Estrategia en tiempo real']},
    {title: 'Aventura', url: 'category/aventura', 
    subItems:['Buena trama','Casuales',
    'Rol de aventuras', 'Puzzles']},
  ]
  return (
    <header className='header'>
      <nav className='py-3 container d-flex justify-content-between align-items-center'>
        <Link to='/'><span className='title fs-1 fw-bold text-light'>LUMUS</span></Link>
        <div className='d-flex gap-4 position-relative'>
          <ul className='p-0 m-0 d-flex gap-4'>
            <li className='p-2'><Link className='navItem' to='/'>Tu tienda</Link></li>
            <li className='p-2'><Link className='navItem' to='/'>Nuevo y Destacable</Link></li>
            <li className='li__drop p-2'>
              <span className='navItem'>Categorias</span>
              <Dropdown categories={lis}/>
            </li>
          </ul>
          <CartWidget/>
        </div>
    </nav>
    </header>
  )
}

export default NavBar