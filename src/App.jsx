import { Route, Routes } from 'react-router-dom'
import './App.css'
import ShoopPage from './Pages/shoop/ShoopPage'
import LoginPage from './Pages/login/LoginPage'

function App() {

  return (
    <>
      <div className='one__container'>
            <Routes>
              <Route path='/' element={<ShoopPage/>}/>
              <Route path='login' element={<LoginPage/>}/>
            </Routes>
      </div>
    </>
  )
}

export default App
