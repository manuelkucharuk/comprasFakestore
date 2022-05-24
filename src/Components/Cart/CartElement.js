import React, { useState, useEffect } from 'react'
import { getProductoById } from '../../Services/productosService'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Loading from '../Loading'

const CartElement = (props) => {
    const idProducto = props.idProducto
    const [loading,setLoading] = useState(false)
    const [cantidad,setCantidad] = useState(props.cantidad)
    const [producto,setProducto] = useState({})
    const [precio, setPrecio ] = useState(0)

    useEffect(
        ()=>{
            setLoading(true)
            const getProducto = async ()=>{
                try {
                    const prod = await getProductoById(idProducto)
                    setProducto(prod)
                    setPrecio(cantidad*prod.price)
                    setLoading(false)
                }catch(err){
                    console.log(err)
                }
            }
            getProducto()
        },
        [idProducto]
    )

    useEffect(
        ()=>{
            setPrecio(cantidad*producto.price)

        },
        [cantidad]

    )

    const handleAdd = ()=>{
        setCantidad(cantidad+1)
    }

    const handleSub = ()=>{
        cantidad>0 && setCantidad(cantidad-1)
    }

    return(
        <Loading loading={loading}>
            <Row sm={8} className='producto'>
                <Col sm={2}>
                    <img className="imgProductoImg" src={producto?.image} alt=''/>
                </Col>
                <Col>
                    <p className = "titleProducto">{producto?.title}</p>
                    <p className = "price">{'Us$ '+producto?.price}</p>
                    <p>Cantidad <b>{cantidad}</b>

                    </p>
                    <Button onClick={handleAdd}> + </Button>
                    <Button onClick={handleSub}> - </Button>
                    <Button onClick={()=>props.onQuitar(idProducto)}>Quitar</Button>
                </Col>
                <Col>
                    <p>Subtotal <b>{'Us$ '+precio.toFixed(2)}</b></p>
                </Col>
            </Row>
        </Loading>
        )
}

export default CartElement