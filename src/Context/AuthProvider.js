import React,{useState} from "react"
import AuthContext from './AuthContext'

function AuthProvider(props){
    const [userLogged, setUserLogged] = useState(localStorage.getItem("userLogged") || false)
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")) || {})

    const loginUser = (data)=>{
        setUserLogged(true)
        setUserData(data)
        localStorage.setItem("userLogged",true)
        localStorage.setItem("userData",JSON.stringify(data))
    }

    const logoutUser = ()=>{
        setUserLogged(false)
        setUserData('')
        localStorage.removeItem("userLogged")
        localStorage.removeItem("userData")
    }

    return(
        <AuthContext.Provider
            value={{userLogged,userData,loginUser,logoutUser}}
        >
        {props.children}
        </AuthContext.Provider>

    )
}

export default AuthProvider