import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import HomePage from '../Pages/HomePage'
import RegistroPage from '../Pages/RegistroPage'
import LoginPage from '../Pages/LoginPage'
import DetallePage from '../Pages/DetallePage';
import CartPage from '../Pages/CartPage'
import NotFoundPage from '../Pages/NotFoundPage';
import AuthContext from '../Context/AuthContext'

function Public() {
    return (
        <AuthContext.Consumer>
            {context =>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/home' element={<Navigate to={'/'}/>} />
                    <Route path='/categoria/:categoriaUrl' element={<HomePage />} />
                    <Route path='/producto/:id' element={<DetallePage />} />
                    {
                        context.userLogged &&
                        <Route path='/cart' element={<CartPage />} />
                    }
                    {
                        !context.userLogged &&
                        <>
                        <Route path='/register' element={<RegistroPage />} />
                        <Route path='/login' element={<LoginPage />} />
                        </>
                    }
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            }
        </AuthContext.Consumer>
    )
}

export default Public
