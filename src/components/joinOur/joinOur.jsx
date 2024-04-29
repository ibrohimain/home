import React from 'react'
import './join.scss'
import email from './img/mail.png'

const JoinOur = () => {
  return (
    <>
        <div className='join'>
            <div className='join__container'>
                    <div className='join__container__input'>
                            <h2>Join Our Newsletter</h2>
                            <p>Sign up for deals, new products and promotions</p>
                            <div className='input__bar'>
                                <img src={email} alt="" />
                                <div className='input__bar_box'>
                                    <input type="email" name="" id="" placeholder='Email address'/>
                                    Siginup
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default JoinOur