import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Cart} from 'react-bootstrap-icons'

import AuthContext from '../../Context/AuthContext'

const Logged = ({userData})=>
    <AuthContext.Consumer>
        {
            context =>
            <>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to='/cart'><Cart/></Nav.Link>
                </Nav>
                <NavDropdown title={'Bienvenido '+ context.userData.nombre}>
                    <NavDropdown.Item onClick={context.logoutUser}>Salir</NavDropdown.Item>
                </NavDropdown>
            </>
        }
    </AuthContext.Consumer>

export default Logged