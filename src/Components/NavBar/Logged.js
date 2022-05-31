import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Cart} from 'react-bootstrap-icons'

import AuthContext from '../../Context/AuthContext'
import CartContext from '../../Context/CartContext'

const Logged = ()=> {
    const authContext = useContext(AuthContext)
    const cartContext = useContext(CartContext)
    const navigate = useNavigate()


    const handleLogoutUser = () => {
        authContext.logoutUser()
        cartContext.vaciarCart()
        navigate('/')
    }

    return (
        <>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to='/cart'><Cart/></Nav.Link>
            </Nav>
            <NavDropdown title={'Bienvenido ' + authContext.userData.nombre}>
                <NavDropdown.Item onClick={handleLogoutUser}>Salir</NavDropdown.Item>
            </NavDropdown>
        </>
    )
}

export default Logged