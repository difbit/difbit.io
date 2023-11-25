import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Finnish from './pages/Finnish.js';
import Pictures from './pages/Pictures.js';


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/finnish' element={<Finnish />} />
                <Route path='/pictures' element={<Pictures />} />
            </Routes>
        </Router>
    );
}
