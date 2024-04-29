import React from 'react'
import './footer.scss'
import insta from './img/instagram.png'
import facebook from './img/Vector 2998.png'
import youtube from './img/youtube.png'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footer__container'>
                    <div className='footer__nav'>
                        <div className='footer__logo'>
                            <h2>3legant</h2>
                            <div className='line'></div>
                            <p>Gift & Decoration Store</p>
                        </div>
                        <div className='footer__lists'>
                            <ul>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>Product</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__end'>
                        <div className='end__lists'>
                            <ul>
                                <li>Copyright © 2023 3legant. All rights reserved</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                            </ul>
                        </div>
                        <div className='end__icons'>
                            <ul>
                                <li><img src={insta} alt="" /></li>           
                                <li><img src={facebook} alt="" /></li>
                                <li><img src={youtube} alt="" /></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Footer