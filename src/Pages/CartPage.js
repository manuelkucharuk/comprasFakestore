import React, { useContext } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {Cart as CartIcon } from 'react-bootstrap-icons'

import Cart from '../Components/Cart/index'
import CartContext from '../Context/CartContext'

//Cart: [ { producto: producto, cantidad: 1 }, {...}]

const CartPage = (props)=>{
    return (
        <Container>
            <h1>Carro de compras <CartIcon/></h1>
            <Row>
                <Cart />
            </Row>
        </Container>
    )
}

export default CartPage