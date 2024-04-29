import React from 'react'
import HeaderTop from '../../components/headertop/HeaderTop'
import Navbar from '../../components/navbar/Navbar'
import Shopping from '../../components/shopping/Shopping'
import MainContainer from '../../components/mainContainer/MainContainer'
import JoinOur from '../../components/joinOur/joinOur'
import Footer from '../../components/footer/Footer'

const ShoopPage = () => {
  return (
    <div>
        <HeaderTop/>
        <Navbar/>
        <Shopping/>
        <MainContainer/>
        <JoinOur/>
        <Footer/>
    </div>
  )
}

export default ShoopPage