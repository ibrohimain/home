import React from 'react'
import './loginBar.scss'
import koz from './img/Vector.png'
const LoginBar = () => {
  return (
    <>
        <div className='oneContainer'>
        <div className='login'>
            <div className='login__bg'></div>
            <div className='login__inp'>
                <div className='inp__bar'>
                        <div className='inp__sigin'>
                            <h2>Sigin Up</h2>
                            <p>Already have an account? <span>Sigin in</span></p>
                        </div>
                        <div className='inp__items'>
                            <div className='inp__item'><input type="" name="" id="" placeholder='Your name'/></div>
                            <div className='inp__item'><input type="" name="" id="" placeholder='Username'/></div>
                            <div className='inp__item'><input type="" name="" id="" placeholder='Email adress'/></div>
                            <div className='inp__item'><input type="" name="" id="" placeholder='Password'/><img src={koz} alt="" /></div>
                        </div>
                        <div className='inp__btn'>
                            <div className='privice'><input type="checkbox" name="" id="" /><p>I agree with <span>Privacy Policy</span> and <span>Terms of Use</span></p></div>
                            <button>Sigin Up</button>
                        </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default LoginBar