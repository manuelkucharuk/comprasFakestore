import React, { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom'

import './Producto.css';
import { getProductoById } from '../Services/productoIdService'
import Spinner from './Spinner'

const DetalleProducto = (props)=>{
    const {id} = props

    const navigate = useNavigate()
    const [producto,setProducto] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(
        ()=> {
            const getProducto = async () => {
                setLoading(true)
                const prod = await getProductoById(id)
                setProducto(prod)
                setLoading(false)
            }
            getProducto()
        },
        [id]
    )

    if(!loading) {
        console.log(producto)
        return(
            <div className="producto">
                <div className="image">
                    <img src={producto.image} alt=''/>
                </div>
                <div className="datos">
                    <p className="title">{producto.title}</p>
                    <p>{producto.description}</p>
                    <p className="price"><h3>Precio: Us$ {producto.price}</h3></p>
                    <p>Rating: {producto.rating.rate} <i>(basado en {producto.rating.count} opiniones)</i></p>
                    <p><button className='btnDetalle' onClick={() => navigate(-1)}>Atrás</button></p>
                </div>
            </div>
        )
    }

    else {
        return (
            <div>
                <Spinner/>
            </div>
        )
    }
}

export default DetalleProducto