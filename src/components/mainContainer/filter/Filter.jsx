import React from 'react'
import './filter.scss'
import filter from './img/Vector.png'

const Filter = () => {
  return (
    <>
        <div className='cart__filter'>
            <img src={filter} alt="" />
            Filter
        </div>
        <div className='cart__categoria'>
            <ul className='categoria__scrool'>
                <h2>CATEGORIES</h2>
                <li>All Rooms</li>
                <li>Living Room</li>
                <li>Bedroom</li>
                <li>Kitchen</li>
                <li>Bathroom</li>
                <li>Dinning</li>
                <li>Outdoor</li>
                <li>Bedroom</li>
                <li>Kitchen</li>
                <li>Bathroom</li>
                <li>Dinning</li>
                <li>Outdoor</li>
                <li>All Rooms</li>
                <li>Living Room</li>
                <li>Bedroom</li>
                <li>Kitchen</li>
                <li>Bathroom</li>
                <li>Dinning</li>
                <li>Outdoor</li>
                <li>Bedroom</li>
                <li>Kitchen</li>
                <li>Bathroom</li>
                <li>Dinning</li>
                <li>Outdoor</li>
            </ul>
        </div>
        <div className="cart__price">
            <h2>PRICE</h2>
            <ul>
                <li>All Price <input type="checkbox" name="" id="" /></li>
                <li>$0.00 - 99.99 <input type="checkbox" name="" id="" /></li>
                <li>$100.00 - 199.99 <input type="checkbox" name="" id="" /></li>
                <li>$200.00 - 299.99 <input type="checkbox" name="" id="" /></li>
                <li>$300.00 - 399.99 <input type="checkbox" name="" id="" /></li>
                <li>$400.00+ <input type="checkbox" name="" id="" /></li>
            </ul>
        </div>
    </>
  )
}

export default Filter