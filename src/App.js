import './Assets/Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Components/Landing';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/:name' element={<Landing />} /> */}
        <Route path="/:id" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
