import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'


const Unlogged = ()=>
    <Nav className="me-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to='/register'>Registro</Nav.Link>
        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
    </Nav>



export default Unlogged