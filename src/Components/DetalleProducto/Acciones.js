import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { Cart } from 'react-bootstrap-icons'
import { useNavigate  } from 'react-router-dom'

import CartContext from '../../Context/CartContext'



const Acciones = (props)=>{
    const producto = props.producto
    const navigate = useNavigate()
    const context = useContext(CartContext)

    return(
        <>
            <Button variant='primary' size='lg' onClick={()=>{context.addCartItem(producto)}}>
                <Cart/> Agregar al carrito
            </Button>

            <Button variant='outline-info' onClick={() => navigate(-1)}>Atrás</Button>
        </>
    )
}

export default Acciones