import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { Cart } from 'react-bootstrap-icons'
import { useNavigate  } from 'react-router-dom'

import CartContext from '../../Context/CartContext'
import AuthContext from '../../Context/AuthContext'



const Acciones = (props)=>{
    const producto = props.producto
    const navigate = useNavigate()
    const cartContext = useContext(CartContext)
    const authContext = useContext(AuthContext)

    return(
        <>
            {   authContext.userLogged &&
                <Button variant='primary' size='lg' onClick={() => {cartContext.addCartItem(producto)}}>
                    <Cart/> Agregar al carrito
                </Button>
            }

            <Button variant='outline-info' onClick={() => navigate(-1)}>Atrás</Button>
        </>
    )
}

export default Acciones