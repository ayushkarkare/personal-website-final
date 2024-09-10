import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import SideNav from './Sidenav'; // Correct the import to import the component
import './App.css';


// Placeholder components for other pages
const About = () => <h2>About Page</h2>;
const Projects = () => <h2>Projects Page</h2>;
const Gallery = () => <h2>Gallery Page</h2>;
const Resume = () => <h2>Resume Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
  return (
    <Router>
      <div className="app">
        <SideNav /> {/* Include the SideNav component */}
        <div className="main-content" style={{ marginLeft: '200px' }}> {/* Add padding to avoid overlay */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
