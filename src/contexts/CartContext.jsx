import { createContext, useState } from "react";


export const CartContext = createContext()

const CartProvider = ({children}) =>{

    let [pizzas, setPizzas] = useState([])
    const [pizzaCart, setPizzaCart] = useState([])
    let cartLenght = pizzaCart.length

    

    const agregarCarrito = (p) => {
        setPizzaCart([...pizzaCart, {...p, count:1}])
    }

    const totalCart = pizzaCart.reduce((total, pizza) => total + (pizza.price * pizza.count), 0).toLocaleString()

    let restarCantidad = (id) =>{
       setPizzaCart((pCart) =>
      pCart
      .map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p))
      .filter((p) => p.count > 0))
    
    }

     let sumarCantidad = (id) =>{
       setPizzaCart((pCart) =>
      pCart
      .map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p)))
    }


    return(
        <CartContext.Provider value={{pizzas, setPizzas, pizzaCart, setPizzaCart, cartLenght, agregarCarrito, totalCart, restarCantidad,sumarCantidad}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider