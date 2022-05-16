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
        <div className='ml-4'>
            <h1>Listado de productos</h1>
            <Categorias onChange={handleCategoriaChange} categoriaSeleccionada={categoria}/>
            <Productos categoria={categoria}/>
        </div>
    )
}

export default HomePage