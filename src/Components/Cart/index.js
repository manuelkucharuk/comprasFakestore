import React from 'react'
import { useState, useEffect } from 'react'

import CartElement from './CartElement'


const Cart = (props) =>{
    const [contenido,setContenido] = useState(props.contenido)
    const [cart,setCart] = useState([])
    const [loading,setLoading] = useState(false)

    const handleQuitar = ()=>{

    }

    useEffect(
        ()=> {
            setLoading(true)
            let newCart = []
            for(let idProducto in contenido){
                const cartElement = {'idProducto': idProducto, cantidad: contenido[idProducto]}
                newCart = [...newCart,cartElement]
            }
            setCart(newCart)
            setLoading(false)
        },
        [contenido]
    )


    return(
        cart.map(elem =>
            <CartElement
                key={elem.idProducto}
                idProducto={elem.idProducto}
                cantidad={elem.cantidad}
                onQuitar={()=>{handleQuitar()}}
            />
        )
    )
}

export default Cart