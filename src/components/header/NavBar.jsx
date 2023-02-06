import { React, useState } from 'react'
import CartWidget from './CartWidget'
import Dropdown from './dropdown/Dropdown'
import './header.css'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

function NavBar() {
  const [menuHamburguer, setMenuHamburguer] = useState(false)
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
      <nav className='py-3 container d-flex justify-content-around align-items-center'>
        <Link to='/'><span className='title fs-1 fw-bold text-light'>LUMUS</span></Link>
        <div className='d-none d-md-flex gap-4 position-relative'>
          <ul className='p-0 d-flex m-0 gap-4'>
            <li className='li__drop p-2'>
              <span className='navItem'>Categorias</span>
              <Dropdown categories={lis}/>
            </li>
          </ul>
          <CartWidget/>
        </div>
        <div className='d-md-none'>
          <AiOutlineMenu color='#fff' size={20} onClick={() => setMenuHamburguer(state => !state)}/>
          {menuHamburguer && 
          <ul className='menu-hamburguer m-0 p-0 text-center d-flex flex-column'>{lis.map((el,index) => <Link key={index} onClick={()=> setMenuHamburguer(false)} to={el.url}>{el.title}</Link>)}
          <li className='d-flex justify-content-center' onClick={()=> setMenuHamburguer(false)}><CartWidget/></li>
          </ul>}
        </div>
    </nav>
    </header>
  )
}

export default NavBar