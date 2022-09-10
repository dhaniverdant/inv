import './Assets/Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Components/Landing';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NotFound />} />
        <Route path="/:id" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
