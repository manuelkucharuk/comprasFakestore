import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import AuthContext from '../../Context/AuthContext'
import Logged from './Logged'
import Unlogged from './Unlogged'

const NavBar = ()=>{
    return(
        <AuthContext.Consumer>
            {context=>
                <Navbar bg="light" variant='light' expand="lg">
                    {context.userLogged? <Logged/> : <Unlogged/>}
                </Navbar>
            }
        </AuthContext.Consumer>
    )
}

export default NavBar