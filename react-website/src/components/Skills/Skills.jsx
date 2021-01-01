import React from 'react';
import PropTypes from 'prop-types';

import './Skills.scss';
import { Image, ProgressBar } from 'react-bootstrap';

const Skills = (props) => {
  return (
    <div className="Skills">
      <div id="skills" className="anchor" />
      <div className="left">
        <div className="leftPanel">
          <div className="skillCard">
            <div className="cardTitle">
              <h4>Technical Skills</h4>
            </div>
            <div className="cardContent">
              <div className="skillContainer">
                <h5>Full Stack Development</h5>
                <p>MERN Stack</p>
                <ProgressBar now={75} className="purple" />
              </div>
              <div className="skillContainer">
                <h5>Frontend Development</h5>
                <p>
                  ReactJS, Redux, Ionic Framework, Bootstrap, SemanticUI, UI/UX Design, HTML/CSS, SCSS, Google Maps API
                </p>
                <ProgressBar now={80} className="lightblue" />
              </div>
              <div className="skillContainer">
                <h5>Backend Development</h5>
                <p>NodeJS, ExpressJS, MongoDB, Firebase, DigitalOcean, SocketIO, Stripe Payment Integration, SQL</p>
                <ProgressBar now={65} className="gold" />
              </div>
              <div className="skillContainer">
                <h5>Mobile Development</h5>
                <p>Android & iOS via Ionic Framework, Deployment via Ionic Appflow, Adalo</p>
                <ProgressBar now={55} className="green" />
              </div>
              <div className="otherSkillInfo">
                <p>& Experience with Version Control (Git & GitHub)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightPanel">
          <div className="skillCard">
            <div className="cardTitle">
              <h4>Coding Skills</h4>
            </div>
            <div className="cardContent">
              <div className="skillContainer coding">
                <div className="title">
                  <h5>JavaScript & Libraries</h5>
                  <h5 className="percentage">90%</h5>
                </div>
                <ProgressBar now={90} className="lightred" />
              </div>
              <div className="skillContainer coding">
                <div className="title">
                  <h5>HTML, CSS, SCSS</h5>
                  <h5 className="percentage">85%</h5>
                </div>
                <ProgressBar now={85} className="lightgreen" />
              </div>
              <div className="skillContainer coding">
                <div className="title">
                  <h5>Java</h5>
                  <h5 className="percentage">65%</h5>
                </div>
                <ProgressBar now={65} className="magenta" />
              </div>
              <div className="skillContainer coding">
                <div className="title">
                  <h5>C, C#</h5>
                  <h5 className="percentage">55%</h5>
                </div>
                <ProgressBar now={55} className="darkblue" />
              </div>
              <div className="skillContainer coding">
                <div className="title">
                  <h5>Python (& Flask)</h5>
                  <h5 className="percentage">50%</h5>
                </div>
                <ProgressBar now={50} className="orange" />
              </div>
              <div className="otherSkillInfo">
                <p>Other Experience with:</p>
                <p className="more">Unity, Springboot, OCaml, MIPS</p>
              </div>
            </div>
          </div>
          <div className="skillCard horizontal">
            <div className="cardTitle">
              <h4>Languages</h4>
            </div>
            <div className="cardContent">
              <p>English (Native)</p>
              <p>French</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <h3>Skills</h3>
        <Image className="image" src={require('./icons/onlinecourses.svg')} />
      </div>
    </div>
  );
};

Skills.propTypes = {};

export default Skills;
