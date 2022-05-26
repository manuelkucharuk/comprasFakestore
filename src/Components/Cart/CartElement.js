import React, { useState, useEffect, useContext } from 'react'
import { getProductoById } from '../../Services/productosService'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Loading from '../Loading'
import CartContext from '../../Context/CartContext'

const CartElement = (props) => {
    const context = useContext(CartContext)
    const producto = props.producto
    const [cantidad,setCantidad] = useState(context.cantidadById(producto.id))
    const [subtotal, setSubtotal ] = useState(0)


    const handleAdd = (producto)=>{
        context.addCartItem(producto)
    }

    const handleRemoveOne = (producto)=>{
        context.removeOneCartItem(producto.id)
    }

    const handleRemove = (producto)=>{
        context.removeCartItem(producto.id)
    }

    useEffect( //Para que se actualice cuando cambia la cantidad
        ()=>{
            const cantTemp = context.cantidadById(producto.id)
            setCantidad(cantTemp)
            setSubtotal(cantTemp*producto.price)
        },
        [context.cart]
    )


    return (
        <Row sm={8} className='producto'>
            <Col sm={2}>
                <img className="imgProductoImg" src={producto.image} alt=''/>
            </Col>
            <Col>
                <p className="titleProducto">{producto.title}</p>
                <p className="price">{'Us$ ' + producto.price}</p>
                <p>Cantidad <b>{cantidad}</b>

                </p>
                <Button onClick={()=>handleAdd(producto)}> + </Button>
                <Button onClick={()=>handleRemoveOne(producto)}> - </Button>
                <Button onClick={()=>handleRemove(producto)}>Quitar</Button>

            </Col>
            <Col>
                <p>Subtotal <b>{'Us$ ' + subtotal.toFixed(2)}</b></p>
            </Col>
        </Row>
    )
}

export default CartElement