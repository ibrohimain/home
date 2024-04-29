import React from 'react'
import './headerTop.scss'
import cupon from './img/coupon.png'
import right from './img/right-arrow.png'

const HeaderTop = () => {
  return (
    <div className='header__link'>
        <div className="header__link_container">
            <div className="link_container-shop">
                <ul>
                    <li><img src={cupon} alt="" className='cupon'/></li>
                    <li><p>30% off storewide — Limited time! </p></li>
                    <li className='list__text'>Shop Now <img src={right} alt="" className='right'/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop