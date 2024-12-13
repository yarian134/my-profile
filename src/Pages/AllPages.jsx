import React from 'react'
import { Routes,Route , BrowserRouter as Router} from "react-router-dom";
import Home from './Home';
import './Home.css'
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
const AllPages = () => {
  return (
    <div>
       <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default AllPages