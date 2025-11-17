import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';

export default function App() {
  return (
    <Router>
      <nav className="container row justify-between" style={{ margin: '20px 0' }}>
        <Link to="/" className="btn">Home</Link>
        <Link to="/watchlist" className="btn secondary">Watchlist</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </Router>
  );
}
