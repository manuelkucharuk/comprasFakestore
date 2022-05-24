import React from 'react'
import Button from 'react-bootstrap/Button'
import { Cart } from 'react-bootstrap-icons'
import { useNavigate  } from 'react-router-dom'



const Acciones = (props)=>{
    const agregarAlCarrito = (idProducto)=>{
        let cart = JSON.parse(localStorage.getItem("cart")) || {}
        cart[idProducto] =  cart[idProducto]+1 || 1
        localStorage.setItem("cart",JSON.stringify(cart))
    }

    const navigate = useNavigate()
    const idProducto = props.idProducto
    return(
        <>
            <Button variant='primary' size='lg' onClick={()=>{agregarAlCarrito(idProducto)}}>
                <Cart/> Agregar al carrito
            </Button>

            <Button variant='outline-info' onClick={() => navigate(-1)}>Atrás</Button>
        </>
    )
}

export default Acciones