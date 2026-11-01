import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Register from './views/Register'
import Login from './views/Login'
import Cart from './views/Cart'
import Pizza from './views/Pizza'
import './App.css'
import NotFound from './views/NotFound'
import Profile from './views/Profile'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/pizza/p001" element={<Pizza/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/404" element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
