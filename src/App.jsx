import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Register from './views/Register'
import Login from './views/Login'
import Cart from './views/Cart'
import Pizza from './views/Pizza'
import './App.css'
import NotFound from './views/NotFound'
import Profile from './views/Profile'
import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'


function App() {

  const {token} = useContext(UserContext)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={token ? <Navigate to='/'/> : <Register/>}></Route>
        <Route path="/login" element={token ? <Navigate to='/'/> : <Login/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/pizza/:id" element={<Pizza/>}></Route>
        <Route path="/profile" element={token ? <Profile/> : <Navigate to='/login'/>}></Route>
        <Route path="/404" element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
