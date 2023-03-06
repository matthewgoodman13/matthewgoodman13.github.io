import React from 'react';
import PropTypes from 'prop-types';

import './Skills.scss';
import { Image, ProgressBar } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Skills = (props) => {
  return (
    <div id="skills" className="Skills">
      <div id="skills" className="anchor" />
      <div className="left">
        <div className="leftPanel">
          <ScrollAnimation animateIn={animation} animateOnce>
            <div className="skillCard">
              <div className="cardTitle">
                <h4>Experience Using</h4>
              </div>
              <div className="cardContent">
                {/* <div className="skillContainer">
                  <h5>Full Stack Development</h5>
                  <p>MERN Stack</p>
                  <ProgressBar now={75} className="purple" />
                </div> */}
                <div className="skillContainer">
                  <h5>Frontend Development</h5>
                  {/* <p>
                    ReactJS, Redux, Ionic Framework, Bootstrap, SemanticUI, UI/UX Design, JavaScript ES6, HTML/CSS, SCSS, LessCSS, Google Maps
                    API
                  </p> */}
                  <div className="skill-pill-bar">
                    <p className="skill-pill lightblue">ReactJS</p>
                    <p className="skill-pill lightblue">Redux</p>
                    <p className="skill-pill lightblue">Ionic Framework</p>
                    <p className="skill-pill lightblue">Bootstrap</p>
                    <p className="skill-pill lightblue">SemanticUI</p>
                    <p className="skill-pill lightblue">UI/UX Design</p>
                    <p className="skill-pill lightblue">JavaScript ES6</p>
                    <p className="skill-pill lightblue">BackboneJS</p>
                    <p className="skill-pill lightblue">HTML</p>
                    <p className="skill-pill lightblue">JQuery</p>
                    <p className="skill-pill lightblue">CSS</p>
                    <p className="skill-pill lightblue">SCSS</p>
                    <p className="skill-pill lightblue">LessCSS</p>
                    <p className="skill-pill lightblue">Google Maps API</p>
                  </div>
                  {/* <ProgressBar now={80} className="lightblue" /> */}
                </div>
                <div className="skillContainer">
                  <h5>Backend Development & Hosting</h5>
                  {/* <p>NodeJS, ExpressJS, MongoDB, Firebase, DigitalOcean, SocketIO, Stripe Payment Integration, Flask, SQL</p> */}
                  <div className="skill-pill-bar">
                    <p className="skill-pill gold">NodeJS</p>
                    <p className="skill-pill gold">ExpressJS</p>
                    <p className="skill-pill gold">MongoDB</p>
                    <p className="skill-pill gold">Google Cloud Platform</p>
                    <p className="skill-pill gold">Firebase</p>
                    <p className="skill-pill gold">DigitalOcean</p>
                    <p className="skill-pill gold">Amazon Web Services</p>
                    <p className="skill-pill gold">SocketIO</p>
                    <p className="skill-pill gold">Stripe Payment Integration</p>
                    <p className="skill-pill gold">Flask</p>
                    <p className="skill-pill gold">SQL</p>
                  </div>

                  {/* <ProgressBar now={65} className="gold" /> */}
                </div>
                <div className="skillContainer">
                  <h5>Data Science</h5>
                  {/* Data Science: Python, Pandas, Jupyter, Bokeh, BeautifulSoup, AWS */}
                  <div className="skill-pill-bar">
                    <p className="skill-pill purple">Python</p>
                    <p className="skill-pill purple">Pandas</p>
                    <p className="skill-pill purple">Jupyter</p>
                    <p className="skill-pill purple">Bokeh</p>
                    <p className="skill-pill purple">BeautifulSoup</p>
                    <p className="skill-pill purple">AWS</p>
                  </div>

                  {/* <ProgressBar now={65} className="gold" /> */}
                </div>
                <div className="skillContainer">
                  <h5>Mobile Development</h5>
                  {/* <p>Android & iOS via Ionic Framework, Deployment via Ionic Appflow, Adalo</p> */}
                  <div className="skill-pill-bar">
                    <p className="skill-pill green">Android & iOS via Ionic Framework</p>
                    <p className="skill-pill green">Deployment via Ionic Appflow</p>
                    <p className="skill-pill green">Adalo App Development</p>
                  </div>
                  {/* <ProgressBar now={55} className="green" /> */}
                </div>
                <div className="otherSkillInfo">
                  <p>& Experience with Version Control (Git & GitHub)</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className="rightPanel">
          <ScrollAnimation animateIn={animation} animateOnce>
            <div className="skillCard">
              <div className="cardTitle">
                <h4>Coding & Technical Skills</h4>
              </div>
              <div className="cardContent">
                <div className="skillContainer coding">
                  <div className="title">
                    <h5>Full Stack Development (MERN Stack)</h5>
                    {/* <h5 className="percentage">90%</h5> */}
                  </div>
                  <ProgressBar now={85} className="lightred" />
                </div>
                <div className="skillContainer coding">
                  <div className="title">
                    <h5>ReactJS, Redux, JavaScript & Libraries</h5>
                    {/* <h5 className="percentage">90%</h5> */}
                  </div>
                  <ProgressBar now={85} className="lightgreen" />
                </div>
                {/* <div className="skillContainer coding">
                  <div className="title">
                    <h5>HTML, CSS, SCSS, LessCSS</h5>
                  </div>
                  <ProgressBar now={85} className="lightgreen" />
                </div> */}
                <div className="skillContainer coding">
                  <div className="title">
                    <h5>Python</h5>
                    {/* <h5 className="percentage">50%</h5> */}
                  </div>
                  <ProgressBar now={70} className="orange" />
                </div>
                <div className="skillContainer coding">
                  <div className="title">
                    <h5>Java</h5>
                    {/* <h5 className="percentage">65%</h5> */}
                  </div>
                  <ProgressBar now={70} className="magenta" />
                </div>
                <div className="skillContainer coding">
                  <div className="title">
                    <h5>C, C#, C++</h5>
                    {/* <h5 className="percentage">55%</h5> */}
                  </div>
                  <ProgressBar now={60} className="darkblue" />
                </div>
                <div className="skillContainer coding">
                  <div className="title">
                    <h5>Bash</h5>
                    {/* <h5 className="percentage">55%</h5> */}
                  </div>
                  <ProgressBar now={60} className="gold" />
                </div>
                <div className="otherSkillInfo">
                  <p>Other Experience with:</p>
                  <p className="more">JUnit, Mockito, Guice, Unity, Springboot, OCaml, MIPS</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} animateOnce>
            <div className="skillCard horizontal">
              <div className="cardTitle">
                <h4>Languages</h4>
              </div>
              <div className="cardContent">
                <p>English</p>
                <p>French</p>
              </div>
            </div>
          </ScrollAnimation>
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
