import {useState, useEffect} from 'react'
import { getAllProductos, getProductosByCategoria } from '../Services/productosService'
import Producto from './Producto'
import Spinner from 'react-bootstrap/Spinner'


const Productos = (props)=>{
    const [productos,setProductos] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(
        ()=> {
            const getProductos = async () => {
                setLoading(true)
                let prods
                if(!props.categoria || props.categoria === 'all')
                    prods = await getAllProductos()
                else
                    prods = await getProductosByCategoria(props.categoria)
                setProductos(prods)
                setLoading(false)
            }
            getProductos().catch(e=>console.log(e))
        },
        [props.categoria]
    )

    if(!loading) {
        return (
            <>
                {productos.map(p => <Producto className='block'
                                              key={p.id}
                                              id={p.id}
                                              title={p.title}
                                              price={p.price}
                                              image={p.image}/>)}
            </>
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

export default Productos