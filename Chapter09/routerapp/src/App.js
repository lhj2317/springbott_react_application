import './App.css';
import Home from "./Home";
import Contact from "./Contact"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/Contact">Contact</Link>{' '}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
