import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import { BrowserRouter } from 'react-router-dom';
import MoreInfo from './Components/MoreInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mas-info" element={<MoreInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
