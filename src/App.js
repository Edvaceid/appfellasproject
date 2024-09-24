// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyFlights from './pages/MyFlights';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/my-flights" element={<MyFlights />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
