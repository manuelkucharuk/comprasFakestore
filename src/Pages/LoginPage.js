import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

import firebase from '../Config/firebase'
import CampoRegistro from '../Components/CampoRegistro'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginPage = ()=>{
    const [form,setForm] = useState({user:'', password:''})
    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault()

        let user = form.user
        let password = form.password
        try {
            const data = await firebase.auth.signInWithEmailAndPassword(user, password)
            navigate("/")
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e)=>{
        const id = e.target.id
        const value = e.target.value

        setForm(
            {
                ...form,
                [id]: value
            }
        )
    }

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
        </Container>
    )
}

export default LoginPage