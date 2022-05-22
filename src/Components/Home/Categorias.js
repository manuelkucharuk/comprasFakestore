import {useState, useEffect} from 'react'
import {getAllCategorias} from '../../Services/productosService'
import Form from 'react-bootstrap/Form'


const Categorias = (props)=>{
    const [categorias,setCategorias] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(
        ()=> {
            const getCategorias = async () => {
                setLoading(true)
                const cats = await getAllCategorias()
                setCategorias(['all',...cats])
                setLoading(false)
            }
            try{getCategorias()}
            catch(e){console.log(e)}
        },
        []
    )

    if(!loading) {
        return (
            <div>
                <Form.Select onChange={props.onChange} defaultValue={props.categoriaSeleccionada}>
                    {categorias.map(c => <option value={c} key={c.toString()}>{c.toUpperCase()}</option>)}
                </Form.Select>
            </div>
        )
    }
    else {
        return (
            <>
            </>
        )
    }
}

export default Categorias