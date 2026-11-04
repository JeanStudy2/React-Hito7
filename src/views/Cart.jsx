import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import NavBar from '../components/Navbar.jsx'
import { CartContext } from '../contexts/CartContext.jsx'

let Cart = () => {

  const {pizzaCart, setPizzaCart, totalCart, restarCantidad, sumarCantidad} = useContext(CartContext)

 
    return(
        <>
          <NavBar/>
          <form className='w-50 mx-auto my-4'>
            <h2 className='text-center my-4'>Detalles del pedido:</h2>
            <div className=''>
              {pizzaCart.map((pizza) =>{
                return(
                  <div key={pizza.id} className='d-flex justify-content-between'>
                    <div className='d-flex '>
                      <img src={pizza.img} alt="" />
                      <p className='text-capitalize fw-semibold'>{pizza.name}</p>
                    </div>
                    <div className='d-flex align-items-center'>
                      <p className='m-0 mx-3 fw-bold'>{(pizza.price * pizza.count)}</p>
                      <Button variant="outline-danger" onClick={()=>{restarCantidad(pizza.id)}}>-</Button>
                      <p className='m-0 mx-2 fw-bold'>{pizza.count}</p>
                      <Button variant="outline-success" onClick={()=>{sumarCantidad(pizza.id)}}>+</Button>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className='fs-3 fw-semibold'>Total:{totalCart}</p>
            <Button variant="dark">Pagar</Button>
          </form>
        </>
    )
}

export default Cart