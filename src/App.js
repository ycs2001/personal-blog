import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import AddEssay from './pages/AddEssay';
import Header from './components/Header';
import Footer from './components/Footer';
import Starfield from './components/StarField';
import Life from './pages/Life';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            {/* Background Starfield */}
            <Starfield />
            <Router >
                <Header />
                <main className="content">
                    <Routes>
                        {/* Redirect the root URL to "/about" */}
                        <Route path="/" element={<Navigate to="/about" replace />} />
                        {/* Define all main routes */}
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/add-essay" element={<AddEssay />} />
                        <Route path="/life" element={<Life />} />
                        {/* Fallback for undefined routes */}
                        <Route path="*" element={<Navigate to="/about" replace />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
