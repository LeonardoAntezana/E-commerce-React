import React from 'react'
import { Link } from 'react-router-dom'
import './Dropdown.css'

function Dropdown( {categories, className} ) {
  return (
   <div className={`father__drop ${className}`}>
     <div className='dropdown position-absolute py-2 px-3 d-flex rounded justify-content-between flex-wrap'>
        {categories.map((category, index) => {
            const{title, url, subItems} = category
            return(
                <DropItem key={index} title={title} url={url} subItems={subItems}/>
            )
        })}
    </div>
   </div>
  )
}

function DropItem( {title, url, subItems} ) {
    return(
        <ul className='mt-2 p-0'><Link to={url}><span className='category__top text-dark py-1 px-2 fw-bold'>{title}</span></Link>
            {subItems.map((subItem, index) => {
                return(
                    <li className='px-2 hover-link' key={index}><Link className='link--menu' to={`/category/${subItem.toLowerCase().replace(/\s+/g, '')}`}>{subItem}</Link></li>
                )
            })}
        </ul>
    )
}


export default Dropdown