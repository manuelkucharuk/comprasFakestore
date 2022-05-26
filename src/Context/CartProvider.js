import React,{useState,useEffect} from "react"
import CartContext from './CartContext'

function CartProvider(props){
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    const addCartItem = (producto) => {
        const newCart = [...cart]
        const productoIndex = newCart.findIndex(item => item.producto.id === producto.id)

        if(productoIndex < 0){
            newCart.push({ producto: producto, cantidad: 1 })
        }
        else{
            const newCantidad = newCart[productoIndex].cantidad + 1
            const newItem = {producto: producto, cantidad: newCantidad}
            newCart[productoIndex] = newItem
        }
        setCart(newCart)
        localStorage.setItem('cart',JSON.stringify(newCart))
    }

    const removeCartItem = (idProducto) => {
        const newCart = [...cart]
        const productoIndex = newCart.findIndex(item => item.producto.id === idProducto)
        newCart.splice(productoIndex, 1)
        setCart(newCart)
        localStorage.setItem('cart',JSON.stringify(newCart))
    }

    const removeOneCartItem = (idProducto) =>{
        const productoIndex = cart.findIndex(item => item.producto.id === idProducto)
        if(cart[productoIndex].cantidad>0)
            cart[productoIndex].cantidad--
        setCart([...cart])
        localStorage.setItem('cart',JSON.stringify(cart))
    }

    const cantidadById = (idProducto)=>{
        const productoIndex = cart.findIndex(item => item.producto.id === idProducto)
        return cart[productoIndex].cantidad
    }

    const vaciarCart = ()=>{
        setCart([])
        localStorage.setItem('cart',JSON.stringify([]))

    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addCartItem,
                removeCartItem,
                removeOneCartItem,
                vaciarCart,
                cantidadById
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider