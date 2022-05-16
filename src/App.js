import {
    BrowserRouter as Router
} from "react-router-dom"

import './App.css';
import Public from './Routes/Public';

function App() {
  return (
      <Router>
          <Public />
      </Router>
  );
}

export default App;
