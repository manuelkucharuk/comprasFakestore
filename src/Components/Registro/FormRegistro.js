import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


import firebase from '../../Config/firebase'
import CampoRegistro from './CampoRegistro'
import camposRegistro from '../../Services/registroService'
import AlertCustom from '../AlertCustom'

const FormRegistro = (props)=>{
    const campos = camposRegistro
    const estadoInicial = Object.fromEntries(campos.map(c=>[c.id,'']))

    let navigate = useNavigate();
    const [alert, setAlert] = useState({text:'',variant:''})
    const [form,setForm] = useState(estadoInicial)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        let {email,password,confirmPassword} = form

        if(password!==confirmPassword){
            setAlert({text: ' No coinciden los passwords',variant:'danger'})
        }
        else {
            setAlert({text:''})
            try {
                const responseUser = await firebase.auth.createUserWithEmailAndPassword(email, password)
                await firebase.db.collection('usuarios')
                    .add(
                        {
                            user: responseUser.user.uid,
                            nombre: form.nombre,
                            apellido: form.apellido,
                            telefono: form.telefono,
                            email: form.email
                        }
                    )

                setAlert({text:'Bienvenido '+form.nombre+'!', variant:'success'})
                setTimeout(()=>navigate("/login"),1000)

            } catch (err) {
                setAlert({text: err.message, variant:'danger' })
            }
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
        <>
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

        <AlertCustom {...alert}/>

        </>
    )
}

export default FormRegistro;
