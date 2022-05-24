import React from 'react'
import {useState, useEffect, useCallback} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {Cart as CartIcon } from 'react-bootstrap-icons'

import Cart from '../Components/Cart/index'
import Acciones from '../Components/Cart/Acciones'

const CartPage = (props)=>{
    const [contenido,setContenido] = useState(JSON.parse(localStorage.getItem("cart")) || {})

    const vaciarCart = ()=>{
        setContenido({})
        localStorage.removeItem("cart")
    }


    return (
        <Container>
            <h1>Carro de compras <CartIcon/></h1>
            <Row>
                <Cart contenido={contenido}/>
            </Row>
            <Row>
                <Acciones contenido={contenido} onVaciar={vaciarCart}/>
            </Row>
        </Container>
    )
}

export default CartPage