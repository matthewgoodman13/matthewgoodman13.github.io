import React from 'react';
import PropTypes from 'prop-types';

import './UpdatedSkills.scss';
import { Image, ProgressBar } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Skills = (props) => {
  return (
    <div id="skills" className="UpdatedSkills">
      <div id="skills" className="anchor" />
      <div className="left">
        <div className="leftPanel">
          <ScrollAnimation animateIn="animate__flipInX" animateOnce>
            <div className="skillCard">
              <div className="cardTitle">
                <h4>Skills</h4>
              </div>
              <div className="cardContent">
                <div className="col1">
                  <div className="skillContainer">
                    <h5><u>Languages</u></h5>
                    {/* <p>
                    JavaScript, Golang, Python, Java, C, C++, Bash
                    API
                  </p> */}
                    <div className="skill-pill-bar">
                      <p className="skill-pill lightblue">JavaScript</p>
                      <p className="skill-pill lightblue">Go</p>
                      <p className="skill-pill lightblue">Python</p>
                      <p className="skill-pill lightblue">Java</p>
                      <p className="skill-pill lightblue">C</p>
                      <p className="skill-pill lightblue">C++</p>
                      <p className="skill-pill lightblue">Bash</p>
                    </div>
                    {/* <ProgressBar now={80} className="lightblue" /> */}
                  </div>
                  <div className="skillContainer">
                    <h5><u>Frontend Development</u></h5>
                    {/* <p>
                    JavaScript ES6, TypeScript, ReactJS, Redux, Bootstrap, Ionic Framework, Bootstrap, SemanticUI, UI/UX Design, HTML,CSS, SCSS, LessCSS, Pug, Google Maps APIs
                    API
                  </p> */}
                    <div className="skill-pill-bar">
                      <p className="skill-pill lightred">JavaScript ES6</p>
                      <p className="skill-pill lightred">TypeScript</p>
                      <p className="skill-pill lightred">ReactJS</p>
                      <p className="skill-pill lightred">Redux</p>
                      <p className="skill-pill lightred">Bootstrap</p>
                      <p className="skill-pill lightred">Ionic Framework</p>
                      <p className="skill-pill lightred">Bootstrap</p>
                      <p className="skill-pill lightred">SemanticUI</p>
                      <p className="skill-pill lightred">UI/UX Design</p>
                      <p className="skill-pill lightred">HTML</p>
                      <p className="skill-pill lightred">CSS</p>
                      <p className="skill-pill lightred">SCSS</p>
                      <p className="skill-pill lightred">LessCSS</p>
                      <p className="skill-pill lightred">Pug</p>
                      <p className="skill-pill lightred">Google Maps APIs</p>
                    </div>
                    {/* <ProgressBar now={80} className="lightblue" /> */}
                  </div>
                  <div className="skillContainer">
                    <h5><u>Backend Development</u></h5>
                    {/* <p>NodeJS, ExpressJS, MongoDB, SQL, DynamoDB, AWS Lambda, SocketIO, Stripe Payment Integration, Flask</p> */}
                    <div className="skill-pill-bar">
                      <p className="skill-pill gold">NodeJS</p>
                      <p className="skill-pill gold">ExpressJS</p>
                      <p className="skill-pill gold">MongoDB</p>
                      <p className="skill-pill gold">MariaDB</p>
                      <p className="skill-pill gold">SQL</p>
                      <p className="skill-pill gold">AWS DynamoDB</p>
                      <p className="skill-pill gold">AWS Lambda</p>
                      <p className="skill-pill gold">SocketIO</p>
                      <p className="skill-pill gold">Stripe Payment Integration</p>
                      <p className="skill-pill gold">Flask</p>
                    </div>

                    {/* <ProgressBar now={65} className="gold" /> */}
                  </div>
                  <div className="skillContainer">
                    <h5><u>Cloud & Hosting</u></h5>
                    {/* <p>Amazon Web Services, DigitalOcean, Google Cloud Platform, Firebase</p> */}
                    <div className="skill-pill-bar">
                      <p className="skill-pill lightgreen">Amazon Web Services</p>
                      <p className="skill-pill lightgreen">DigitalOcean</p>
                      <p className="skill-pill lightgreen">Google Cloud Platform</p>
                      <p className="skill-pill lightgreen">Firebase</p>
                    </div>

                    {/* <ProgressBar now={65} className="gold" /> */}
                  </div>
                </div>
                <div className="col2">
                  <div className="skillContainer">
                    <h5><u>Data Science</u></h5>
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
                    <h5><u>Mobile Development</u></h5>
                    {/* <p>Android & iOS via Ionic Framework, Deployment via Ionic Appflow, Adalo</p> */}
                    <div className="skill-pill-bar">
                      <p className="skill-pill green">Android & iOS via Ionic Framework</p>
                      <p className="skill-pill green">Deployment via Ionic Appflow</p>
                      <p className="skill-pill green">Adalo App Development</p>
                    </div>
                    {/* <ProgressBar now={55} className="green" /> */}
                  </div>
                  <div className="skillContainer">
                    <h5><u>Software Tools</u></h5>
                    {/* <p>Kubernetes, Git, GitHub, JUnit</p> */}
                    <div className="skill-pill-bar">
                      <p className="skill-pill magenta">Kubernetes</p>
                      <p className="skill-pill magenta">Git</p>
                      <p className="skill-pill magenta">GitHub</p>
                      <p className="skill-pill magenta">JUnit</p>                     
                    </div>
                    {/* <ProgressBar now={55} className="green" /> */}
                  </div>
                  <div className="skillContainer">
                    <h5><u>Other Experience With</u></h5>
                    {/* <p>ROS (Robotics), OCaml</p> */}
                    <div className="skill-pill-bar">
                      <p className="skill-pill orange">ROS (Robotics)</p>
                      <p className="skill-pill orange">OCaml</p>                 
                    </div>
                    {/* <ProgressBar now={55} className="green" /> */}
                  </div>
                  <div className="otherSkillInfo">
                  <p>Spoken Languages:</p>
                  <p className="more">English (Native), French (Intermediate)</p>
                </div>
                </div>
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
