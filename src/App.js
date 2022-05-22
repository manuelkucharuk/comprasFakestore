import {
    BrowserRouter as Router
} from "react-router-dom"

import Public from './Routes/Public'
import NavBar from './Components/NavBar'
import AuthProvider from './Context/AuthProvider'

function App() {
    return (
        <AuthProvider>
            <Router>
              <NavBar/>
              <Public/>
            </Router>
        </AuthProvider>
  )
}

export default App;
