import React,{useState} from 'react'

import CampoRegistro from '../Components/Registro/CampoRegistro'
import AlertCustom from '../Components/AlertCustom'
import useHandleSubmit from '../Hooks/Login/useHandleSubmit'
import useHandleChange from '../Hooks/Login/useHandleChange'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginPage = ()=>{
    const [form,setForm] = useState({user:'', password:''})
    const [handleSubmit,alert] = useHandleSubmit(form)
    const handleChange = useHandleChange(form,setForm)

    return(
        <Container>
            <h1>Ingreso de usuario</h1>
            <Row sm={4}>
                <Col>
                    <Form name="loginUsuario" onSubmit={handleSubmit}>
                        <CampoRegistro key='user'
                                       id='user'
                                       label='Usuario (email)'
                                       onChange={handleChange}/>
                        <CampoRegistro key='password'
                                       id='password'
                                       type='password'
                                       label='Contraseña'
                                       onChange={handleChange}/>
                        <Button variant='primary' type='submit'>Enviar</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <AlertCustom {...alert}/>
            </Row>
        </Container>
    )
}

export default LoginPage