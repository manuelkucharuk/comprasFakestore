import React, { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom'

import './Producto.css';
import { getProductoById } from '../Services/productosService'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { Cart } from 'react-bootstrap-icons';

const DetalleProducto = (props)=>{
    const {id} = props

    const navigate = useNavigate()
    const [producto,setProducto] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(
        ()=> {
            const getProducto = async () => {
                setLoading(true)
                try {
                    const prod = await getProductoById(id)
                    setProducto(prod)
                    setLoading(false)
                } catch(err){
                    console.log(err)
                }
            }
            getProducto()
        },
        [id]
    )

    if(!loading) {
        return(
            <Row sm={8}>
                <Col sm={4}>
                    <img className="imgProductoImg" src={producto.image} alt=''/>
                </Col>
                <Col>
                    <h2>{producto.title}</h2>
                    <p>{producto.description}</p>
                    <p><b>Precio: Us$ {producto.price}</b></p>
                    <p>Rating: {producto.rating.rate} <i>(basado en {producto.rating.count} opiniones)</i></p>
                    <Button variant='primary' size='lg'>
                        <Cart/> Agregar al carrito
                    </Button>
                    <Button variant='outline-info' onClick={() => navigate(-1)}>Atrás</Button>
                </Col>
            </Row>
        )
    }

    else {
        return (
            <div>
                <Spinner animation="border" size="xl"/>
            </div>
        )
    }
}

export default DetalleProducto