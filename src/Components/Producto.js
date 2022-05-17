import React from 'react'
import './Producto.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import {Link} from 'react-router-dom'

const Producto = (props)=>{
    const {id,image,title,price} = props
    return(
        <Row sm={8} className='producto'>
            <Col sm={2}>
                <img className="imgProductoImg" src={image} alt=''/>
            </Col>
            <Col>
                <p className = "titleProducto">{title}</p>
                <p className = "price">Us$ {price}</p>
                <p className = "pDetalle">
                    <Button variant='primary' as={Link} to={"/producto/"+id}>Detalle</Button>
                </p>
            </Col>
        </Row>
    )
}

export default Producto