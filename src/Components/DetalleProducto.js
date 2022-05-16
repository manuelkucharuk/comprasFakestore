import React, { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom'

import './Producto.css';
import { getProductoById } from '../Services/productosService'
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
        return(
            <div className="producto">
                <div className="imgProductoDiv">
                    <img className='imgProductoImg' src={producto.image} alt=''/>
                </div>
                <div className="datos">
                    <p className="title is-4">{producto.title}</p>
                    <p>{producto.description}</p>
                    <p className="price"><b>Precio: Us$ {producto.price}</b></p>
                    <p>Rating: {producto.rating.rate} <i>(basado en {producto.rating.count} opiniones)</i></p>
                    <div className='buttons'>
                        <button className='button is-primary is-medium'>Comprar</button>
                        <button className='button is-medium' onClick={() => navigate(-1)}>Atrás</button>
                    </div>
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