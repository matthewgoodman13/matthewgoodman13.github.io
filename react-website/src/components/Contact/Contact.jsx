import React from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';
import { Image } from 'react-bootstrap';
import { Facebook, Github, Instagram, Linkedin } from 'react-bootstrap-icons';

const Contact = (props) => {
  return (
    <div className="Contact">
      <div className="anchor" id="contact"></div>
      <div className="contactCard">
        <div className="top">
          <Image className="img" src={require('./mtlcoloured.jpg')} />
        </div>
        <div className="profile">
          <Image className="profileimg" src={require('./profilepic.jpg')} />
        </div>
        <div className="titleContent">
          <h2>Matthew Goodman</h2>
          <h4>Software Engineer</h4>
        </div>
        <div className="emails">
          <p className="emailTitle">Email:</p>
          <a href="mailto:info@matthewgoodman.ca">info@matthewgoodman.ca</a>
          <a href="mailto:matthewgoodman13@outlook.com">matthewgoodman13@outlook.com</a>
        </div>
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
        <Image id="wave2" src={require('./wave.svg')} />
      </div>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
