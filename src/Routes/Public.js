import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import HomePage from '../Pages/HomePage'
import DetallePage from '../Pages/DetallePage';
import NotFoundPage from '../Pages/NotFoundPage';

function Public() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<Navigate to="/" />} />
        <Route path='/producto/:id' element={<DetallePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
  );
}

export default Public;
