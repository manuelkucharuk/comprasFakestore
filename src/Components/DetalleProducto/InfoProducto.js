import React from 'react'
import Col from 'react-bootstrap/Col'
import '../Producto/Producto.css';
import Acciones from './Acciones'

const InfoProducto = (props)=>{
    const producto = props.producto
    return(
        <>
            <Col sm={4}>
                <img className="imgProductoImg" src={producto.image} alt=''/>
            </Col>
            <Col>
                <h2>{producto.title}</h2>
                <p>{producto.description}</p>
                <p><b>Precio: Us$ {producto.price}</b></p>
                <p>Rating: {producto.rating.rate} <i>(basado en {producto.rating.count} opiniones)</i>
                </p>
                <Acciones idProducto={producto.id}/>
            </Col>
        </>
    )
}

export default InfoProducto