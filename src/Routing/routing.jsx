import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About/about';
import Contact from './Contact/contact';
import Home from './Home/home';
import Navigation from './Navigation/navigation';
import Project from './Project/project';
import Service from './Service/service';
import Formlogin from './Form/form';

const Routing = () => {
  return (
    <Router>
      <div>
        <Navigation />
      </div>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/form" element={<Formlogin />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/project" element={<Project />} />

          <Route path="/service" element={<Service />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routing;
