import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../Context/CartContext'


const Total = ()=>{
    const context = useContext(CartContext)
    const [total,setTotal] = useState(0)

    useEffect(
        ()=>{
            let totalTemp = 0
            context.cart.forEach(item=>totalTemp+=item.producto.price*item.cantidad)
            setTotal(totalTemp)
        },
        [context.cart]
    )


    return(
        <b>Total: {'Us$ ' + total.toFixed(2)}</b>
    )

}

export default Total