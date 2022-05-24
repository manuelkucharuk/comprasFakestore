import React from 'react'
import Button from 'react-bootstrap/Button'


const Acciones = (props)=>{
    const {onVaciar} = props
    return(
        <>
            <Button onClick={onVaciar}>Vaciar Carrito</Button>
            <Button onClick={''}>Comprar</Button>
        </>
    )
}

export default Acciones