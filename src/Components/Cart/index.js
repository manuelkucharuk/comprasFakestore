import React from 'react'
import { useContext } from 'react'

import Row from 'react-bootstrap/Row'

import CartElement from './CartElement'
import Acciones from './Acciones'
import Total from './Total'

import CartContext from '../../Context/CartContext'

const Cart = (props) =>{
    const context = useContext(CartContext)
    return(
        <>
            {
                context.cart.map(elem=>
                    <CartElement
                        key={elem.producto.idProducto}
                        producto={elem.producto}
                    />
                )
            }
            {
                context.cart.length > 0 &&
                <>
                    <Row>
                        <Total/>
                    </Row>


                    <Row>
                        <Acciones/>
                    </Row>
                </>
            }
            {
                context.cart.length == 0 &&
                <Row>
                    <b>El carrito está vacío</b>
                </Row>
            }
        </>
    )
}

export default Cart