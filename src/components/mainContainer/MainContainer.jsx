import React from 'react'
import './mainContainer.scss'
import Filter from './filter/Filter'
import Living from './living/Living'

const MainContainer = () => {
  return (
    <>
        <div className='menu'>
            <div className='menu__container'>
                <div className='filter__menu'>
                    <Filter/>
                </div>
                <div className='menu__room'>
                    <div className="menu__room__header">
                        
                    </div>
                    <div className='menu__room__main'>
                        <Living/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainContainer