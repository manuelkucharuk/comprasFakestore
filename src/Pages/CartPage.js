import React from 'react'
import {useState, useEffect, useCallback} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {Cart as CartIcon } from 'react-bootstrap-icons'

import Cart from '../Components/Cart/index'
import Acciones from '../Components/Cart/Acciones'

const CartPage = (props)=>{
    const [contenido,setContenido] = useState(JSON.parse(localStorage.getItem("cart")) || {})
    const [key,setKey] = useState(0)
    const vaciarCart = ()=>{
        setContenido({})
        setKey(key+1) //Sino no se actualiza <Cart>
        localStorage.removeItem("cart")
    }


    return (
        <Container>
            <h1>Carro de compras <CartIcon/></h1>
            <Row>
                <Cart key={key} contenido={contenido}/>
            </Row>
            <Row>
                <Acciones key={key+1} contenido={contenido} onVaciar={vaciarCart}/>
            </Row>
        </Container>
    )
}

export default CartPage