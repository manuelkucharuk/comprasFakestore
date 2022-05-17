import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Productos from '../Components/Productos'
import Categorias from '../Components/Categorias'

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const HomePage = ()=>{
    const {categoriaUrl} = useParams()
    const [categoria,setCategoria] = useState(categoriaUrl)
    const navigate = useNavigate();

    const handleCategoriaChange = (ev) => setCategoria(ev.target.value)
    useEffect(
        ()=>{
            categoria && navigate('/categoria/' + categoria, { replace: true })
        }
        ,[categoria,navigate]
    )


    return(
        <Container>
            <h1>Listado de productos</h1>
            <Row sm={4}>
                <Categorias onChange={handleCategoriaChange} categoriaSeleccionada={categoria}/>
            </Row>
            <Row>
                <Productos categoria={categoria}/>
            </Row>
        </Container>
    )
}

export default HomePage