import {
    BrowserRouter as Router
} from "react-router-dom"

import Public from './Routes/Public'
import NavBar from './Components/NavBar'
import AuthProvider from './Context/AuthProvider'
import CartProvider from './Context/CartProvider'

function App() {
    return (
        <AuthProvider>
        <CartProvider>
            <Router>
              <NavBar/>
              <Public/>
            </Router>
        </CartProvider>
        </AuthProvider>
  )
}

export default App;
