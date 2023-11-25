import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Finnish from './pages/finnish';
import Pictures from './pages/pictures';


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
