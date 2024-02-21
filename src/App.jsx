import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Projects from '../src/pages/Projects';
import NavBar from "./componets/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/portfolio' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App;
