import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';

const App = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Education />
    </div>
  );
};

export default App;
