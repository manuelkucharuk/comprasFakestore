import {useState, useEffect} from 'react'
import {getAllProductos} from '../Services/productosService'
import Producto from './Producto'
import Spinner from './Spinner'

const Productos = ()=>{
    const [productos,setProductos] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(
        ()=> {
            const getProductos = async () => {
                setLoading(true)
                const prods = await getAllProductos('electronics')
                setProductos(prods)
                setLoading(false)
            }
            getProductos()
        },
        []
    )

    if(!loading) {
        return (
            <div>
                {productos.map(p => <Producto key={p.id} id={p.id} title={p.title} price={p.price} image={p.image}/>)}
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

export default Productos