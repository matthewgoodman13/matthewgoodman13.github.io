import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'animate.css/animate.min.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import OnlineCourses from './components/OnlineCourses/OnlineCourses';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import CustomScrollbar from './components/CustomScrollbar/CustomScrollbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Main
const App = () => {
  return (
    <div className="App">
      <CustomScrollbar />
      <Home />
      <About />
      <Education />
      <OnlineCourses />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default App;
