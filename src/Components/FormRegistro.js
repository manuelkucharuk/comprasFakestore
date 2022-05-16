import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import firebase from '../Config/firebase'
import CampoRegistro from './CampoRegistro'
import camposRegistro from '../Services/registroService'

const FormRegistro = (props)=>{
    const campos = camposRegistro
    const estadoInicial = Object.fromEntries(campos.map(c=>[c.id,'']))

    const [form,setForm] = useState(estadoInicial)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        let email = form.email
        let password = form.password
        try{
            const data = await firebase.auth.createUserWithEmailAndPassword(email,password)
            console.log(data)
            console.log("Usuario creado")
        } catch (err) {
            console.log("Error",err)
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
        <Form name="registroUsuario" onSubmit={handleSubmit}>
            {campos.map(c=>
                <CampoRegistro
                    key={c.id}
                    id={c.id}
                    name={c.id}
                    label={c.label}
                    type={c.type}
                    placeholder={c.placeholder}
                    onChange = {handleChange}
                />
            )}
            <Button type='submit' variant='primary'>Enviar</Button>
        </Form>
    )
}

export default FormRegistro;
