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
      <Route path='/' Component={Home} />
      <Route path='/home' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/projects' Component={Projects} />
    </Routes>
  </Router>
  )
}

export default App
