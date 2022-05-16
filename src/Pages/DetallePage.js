import {useParams} from 'react-router-dom'

import DetalleProducto from '../Components/DetalleProducto'

const DetallePage = ()=>{
    const {id} = useParams()
    return(
        <div>
            <h1>Detalle de producto</h1>
            <DetalleProducto id={id}/>
        </div>
    )
}

export default DetallePage