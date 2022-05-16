import {useParams} from 'react-router-dom'

import DetalleProducto from '../Components/DetalleProducto'

const DetallePage = ()=>{
    const {id} = useParams()
    return(
        <div className='ml-4'>
            <h1 className='title is-2'>Detalle de producto</h1>
            <DetalleProducto id={id}/>
        </div>
    )
}

export default DetallePage