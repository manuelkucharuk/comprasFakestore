import React from 'react'
import { useState, useEffect } from 'react'

import CartElement from './CartElement'

const Cart = (props) =>{
    const [contenido,setContenido] = useState(props.contenido)
    const [cart,setCart] = useState([])
    //const [loading,setLoading] = useState(false)

    useEffect(
        ()=> {
            let newCart = []
            for(let idProducto in contenido){
                const cartElement = {'idProducto': idProducto, cantidad: contenido[idProducto]}
                newCart = [...newCart,cartElement]
            }
            setCart(newCart)
        },
        [contenido]
    )


    return(
        cart.map(elem => {
                return <CartElement
                    key={elem.idProducto}
                    idProducto={elem.idProducto}
                    cantidad={elem.cantidad}
                />
            }
        )
    )
}

export default Cart