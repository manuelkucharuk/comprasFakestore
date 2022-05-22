import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'

import { getProductoById } from '../../Services/productosService'
import AuthContext from '../../Context/AuthContext'
import Loading from '../Loading'
import InfoProducto from './InfoProducto'
import Acciones from './Acciones'

const DetalleProducto = (props)=>{
    const {id} = props

    const [producto,setProducto] = useState([])
    const [loading,setLoading] = useState(true)

    const agregarAlCarrito = (idProducto) =>{

    }

    useEffect(
        ()=> {
            const getProducto = async () => {
                setLoading(true)
                const prod = await getProductoById(id)
                setProducto(prod)
                setLoading(false)
            }
            getProducto().catch(e=>console.log(e))
        },
        [id]
    )

     return(
         <Loading loading={loading}>
         <AuthContext.Consumer>
             {
                context =>
                    <Row sm={8}>
                        <InfoProducto producto={producto}/>
                    </Row>
            }
        </AuthContext.Consumer>
        </Loading>
    )
}

export default DetalleProducto