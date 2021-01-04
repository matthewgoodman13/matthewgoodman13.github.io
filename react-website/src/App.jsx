import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import OnlineCourses from './components/OnlineCourses/OnlineCourses';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Education />
      <OnlineCourses />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
