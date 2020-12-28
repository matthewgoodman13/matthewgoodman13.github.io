import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import Image from 'react-bootstrap/Image';
import Navbar from './Navbar/Navbar';
import DropdownProfile from './DropdownProfile/DropdownProfile';
import { ChevronDown, Facebook, Github, Instagram, Linkedin } from 'react-bootstrap-icons';

const Home = (props) => {
  return (
    <div id="home" className="HomeContainer">
      <Image id="wave" src={require('./wave.svg')} />
      <Navbar />
      <DropdownProfile />

      <div className="main">
        <div className="titleContent">
          <h1>Matthew Goodman</h1>
          <h2>Software Developer</h2>
        </div>
        <p className="welcomeStatement">Welcome to my Personal Website!</p>

        <div className="socialContainer">
          <a href="https://www.linkedin.com/in/matthewgoodman13/" target="_blank">
            <Linkedin />
          </a>
          <a href="https://github.com/matthewgoodman13" target="_blank">
            <Github />
          </a>
          <a href="https://www.facebook.com/matthewgoodman99/" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/matthewgoodman13/" target="_blank">
            <Instagram />
          </a>
        </div>

        <div className="contactDownloadContainer">
          <a className="contact" href="#contact">
            Contact Me
          </a>
          <a className="download" href="#">
            Download Resume as PDF
          </a>
        </div>
      </div>

      <div className="scrollDown">
        <p>Scroll Down</p>
        <ChevronDown />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
