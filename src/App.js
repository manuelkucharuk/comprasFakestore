import {
    BrowserRouter as Router
} from "react-router-dom"

import Public from './Routes/Public'
import NavBar from './Components/NavBar'

function App() {
    return (
      <Router>
          <NavBar/>
          <Public/>
      </Router>
  );
}

export default App;
