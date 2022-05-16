import CampoRegistro from '../Components/CampoRegistro'
import React from 'react'

const LoginPage = ()=>{
    return(
        <div className='ml-4'>
            <h1 className='title is-2'>Ingreso de usuario</h1>
            <div className='columns is-left'>
                <div className='column is-4'>
                    <form name="loginUsuario">
                        <CampoRegistro key='user' id='user' label='Usuario'/>
                        <CampoRegistro key='password' id='password' type='password' label='Contraseña'/>
                        <button className='button is-primary is-medium' type="button">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage