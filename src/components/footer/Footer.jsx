import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import '../footer/Footer.css'

function Footer() {
  return (
    <div className='footer py-5'>
        <footer className='container text-light d-flex flex-column align-items-center gap-2'>
            <p>Copyright 2022</p>
            <div className='d-flex gap-2'>
                <span><AiFillInstagram/></span>
                <span><AiFillTwitterCircle/></span>
                <span><IoLogoWhatsapp/></span>
            </div>
        </footer>
    </div>
  )
}

export default Footer