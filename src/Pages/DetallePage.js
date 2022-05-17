import {useParams} from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import DetalleProducto from '../Components/DetalleProducto'

const DetallePage = ()=>{
    const {id} = useParams()
    return(
        <Container>
            <h1 className='title is-2'>Detalle de producto</h1>
            <DetalleProducto id={id}/>
        </Container>
    )
}

export default DetallePage