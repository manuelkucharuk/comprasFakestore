import {useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'

import firebase from '../../Config/firebase'
import AuthContext from '../../Context/AuthContext'

const useHandleSubmit = (form)=>{
    const [alert, setAlert] = useState({ text: '', variant: '' })
    let navigate = useNavigate()
    const context = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let user = form.user
        let password = form.password
        try {
            const respLogin = await firebase.auth.signInWithEmailAndPassword(user, password)
            const userId = respLogin.user?.uid

            const respUser = await firebase.db.collection('usuarios').where('user', '==', userId).get()
            const dataUser = respUser.docs[0]?.data()
            context.loginUser(dataUser)
            setAlert({ text: 'Bienvenido ' + dataUser.nombre, variant: 'success' })
            navigate("/")

        } catch (err) {
            setAlert({ text: err.message, variant: 'danger' })
        }
    }

    return [handleSubmit,alert]
}

export default useHandleSubmit