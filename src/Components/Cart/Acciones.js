import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'

import CartContext from '../../Context/CartContext'

const Acciones = (props)=> {
    const context = useContext(CartContext)
    return (
        <>
            <Button onClick={context.vaciarCart}>VaciarCarrito</Button>
            <Button onClick={() => 'a'}>Finalizar Compra</Button>
        </>
    )
}

export default Acciones