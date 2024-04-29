import React from 'react'
import './navbar.scss'
import sarch from './img/Vector.png'
import shopping from './img/shopping bag.png'
import user from './img/user.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className='navbar__container'>
                <div className='logo'>3legant.</div>
                <div className='list'>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Product</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='icon__bar'>
                    <ul>
                        <li><img src={sarch} alt=""  className='search'/></li>
                        <Link to='/login'>
                            <li><img src={user} alt="" /></li>
                        </Link>
                        <li className='shopping__box'><img src={shopping} alt="" /> <span>0</span></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar