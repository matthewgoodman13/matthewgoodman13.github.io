import React from 'react';
import PropTypes from 'prop-types';

import './OnlineCourses.scss';
import { Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const OnlineCourses = (props) => {
  return (
    <div id="onlinecourses" className="OnlineCourses">
      <div className="titleContainer">
        <div className="title">
          <Image className="icon" src={require('./icons/programmingwhite.svg')} />
          <h1>Online Certificate Courses</h1>
        </div>
      </div>

      <div className="cards">
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <div className="card">
            <div className="imgBx" data-text="Harvard">
              {/* FROM FLATICON.COM */}
              <Image className="img" src={require('./icons/harvard.svg')} />
              <div className="subContent">
                <p className="hours">100+ Hours</p>
                <div className="skills">
                  <p>C</p>
                  <p>Python</p>
                  <p>Flask</p>
                  <p>SQL</p>
                  <p>JS</p>
                  <p>HTML, CSS</p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="titleComponent">
                <h3>Harvard CS50x</h3>
                <h5>Introduction to Computer Science via edX</h5>
              </div>
              <p>
                Taught me the fundamentals of CS and allowed me to start learning how to think algorithmically and solve
                problems more efficiently.
              </p>
              <div className="links">
                <a href="https://courses.edx.org/certificates/1675ac3d2fe0470ab5ddb624ae5a73fa" target="_blank">
                  Certificate
                </a>
                <a href="https://www.edx.org/course/cs50s-introduction-to-computer-science" target="_blank">
                  Course Site
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <div className="card">
            <div className="imgBx" data-text="MERN">
              <Image className="img" src={require('./icons/mern.svg')} />
              <div className="subContent">
                <p className="hours">15 Hours</p>
                <div className="skills">
                  <p>ReactJS</p>
                  <p>Redux</p>
                  <p>NodeJS</p>
                </div>
                <div className="skills">
                  <p>ExpressJS</p>
                  <p>MongoDB</p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="titleComponent">
                <h3>
                  MERN Stack: <br /> Front to Back
                </h3>
                <h5>Udemy</h5>
              </div>
              <p>
                Learned how to implement a project using the MERN stack by creating and deploying a small social network
                for developers.
              </p>
              <div className="links">
                <a href="https://www.udemy.com/certificate/UC-0e428d34-a6cf-42a3-af3d-8637c96981b6/" target="_blank">
                  Certificate
                </a>
                <a href="https://www.udemy.com/course/mern-stack-front-to-back" target="_blank">
                  Course Site
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* <a href="https://www.flaticon.com/free-icons/process" title="process icons">Process icons created by Freepik - Flaticon</a>
         */}

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <div className="card">
            <div className="imgBx" data-text="Go">
              <Image className="img" src={require('./icons/go.png')} />
              <div className="subContent">
                <p className="hours">50+ Hours</p>
                <div className="skills">
                  <p>Web Apps</p>
                  <p>Sockets</p>
                  <p className="smaller">Microservices</p>
                </div>
                <div className="skills">
                  <p>Payments</p>
                  <p>Testing</p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="titleComponent">
                <h3>Go: 4 Udemy Courses</h3>
                <h5>Udemy</h5>
              </div>
              <p>
                Completed 4 Udemy courses exploring the Go Programming Language and learning how to build web apps,
                microservices, socket systems, and testing.
              </p>
              <div className="links">
                <a
                  href="https://matthewgoodman.notion.site/Go-Udemy-Courses-a2ed2b0c005a4dab9d6bd3d7764448c4"
                  target="_blank"
                >
                  Info & Certificates
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <div className="card">
            <div className="imgBx" data-text="RemixJS">
              <Image className="img" src={require('./icons/mixer.png')} />
              <div className="subContent">
                <p className="hours">10 Hours</p>
                <div className="skills">
                  <p>Full Stack</p>
                  <p>Auth</p>
                </div>
                <div className="skills">
                  <p>Sessions</p>
                  <p>Cookies</p>
                  <p>CRUD</p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="titleComponent">
                <h3>RemixJS - The Practical Guide</h3>
                <h5>Udemy</h5>
              </div>
              <p>
                Learned RemixJS, a React-based fullstack framework that allows you to quickly build web apps by having
                frontend and backend code work seamlessly together.
              </p>
              <div className="links">
                <a href="https://www.udemy.com/certificate/UC-2c6b8e30-b038-40f8-bff2-fd54ed461c17/" target="_blank">
                  Certificate
                </a>
                <a href="https://github.com/matthewgoodman13/remix-expenses" target="_blank">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <div className="card">
            <div className="imgBx" data-text="React">
              <Image className="img" src={require('./icons/react.svg')} />
              <div className="subContent">
                <p className="hours">15 Hours</p>
                <div className="skills">
                  <p>ReactJS</p>
                  <p>Redux</p>
                  <p>Hooks</p>
                  <p>Firebase</p>
                </div>
                <div className="skills"></div>
              </div>
            </div>
            <div className="content">
              <div className="titleComponent">
                <h3>React: Front to Back</h3>
                <h5>Udemy</h5>
              </div>
              <p>Learned React & Redux principles by building various projects alongside the Udemy course. </p>
              <div className="links">
                <a href="https://www.udemy.com/certificate/UC-N8PWMW9Q/" target="_blank">
                  Certificate
                </a>
                <a href="https://www.udemy.com/course/modern-react-front-to-back/" target="_blank">
                  Course Site
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <div className="card">
            <div className="imgBx" data-text="Hardware">
              <Image className="img" src={require('./icons/hardware.svg')} />
              <div className="subContent">
                <p className="hours">30+ Hours</p>
                <div className="skills">
                  <p>Hardware</p>
                  <p>Assembly</p>
                  <p>HDL</p>
                </div>
                <div className="skills"></div>
              </div>
            </div>
            <div className="content">
              <div className="titleComponent">
                <h3>From NAND to Tetris 1</h3>
                <h5>Hebrew University of Jerusalem</h5>
              </div>
              <p>
                This project-centered course taught me how to construct a computer from the ground up starting with NAND
                gates which allowed me to better understand the computer architecture.
              </p>
              <div className="links">
                <a href="https://www.coursera.org/account/accomplishments/certificate/PHC4688PRXWY" target="_blank">
                  Certificate
                </a>
                <a href="https://www.coursera.org/learn/build-a-computer/home/welcome" target="_blank">
                  Course Site
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <div className="card">
            <div className="imgBx" data-text="NodeJS">
              <Image className="img" src={require('./icons/nodejs.svg')} />
              <div className="subContent">
                <p className="hours">30 Hours</p>
                <div className="skills">
                  <p>NodeJS</p>
                  <p>ExpressJS</p>
                  <p>SQL</p>
                  <p>MongoDB</p>
                  <p>Routing</p>
                </div>
                <div className="skills"></div>
              </div>
            </div>
            <div className="content">
              <div className="titleComponent">
                <h3>NodeJS - The Complete Guide</h3>
                <h5>Udemy</h5>
              </div>
              <p>Learned the NodeJS architecture by building small projects alongside the Udemy course.</p>
              <div className="links">
                {/* <a href="https://www.udemy.com/certificate/UC-N8PWMW9Q/" target="_blank">
                Certificate
              </a> */}
                <a href="https://www.udemy.com/course/nodejs-the-complete-guide/" target="_blank">
                  Course Site
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <div className="card">
            <div className="imgBx" data-text="Web+JS">
              <Image className="img" src={require('./icons/webdesign.svg')} />
              <div className="subContent">
                <p className="hours">30+ Hours</p>
                <div className="skills">
                  <p>HTML/CSS</p>
                  <p>Flexbox</p>
                  <p>Grid</p>
                </div>
                <div className="skills">
                  <p>JS ES6</p>
                  <p>OOP</p>
                  <p>Regex</p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="titleComponent">
                <h3>Responsive Web Design</h3>
                <h3>JS Algorithms & Data Structures</h3>
                <h5>FreeCodeCamp</h5>
              </div>
              <p>Learned the principles of responsive web design and JavaScript's basic data structures.</p>
              <div className="links">
                <a
                  href="https://www.freecodecamp.org/certification/matthewgoodman13/responsive-web-design"
                  target="_blank"
                >
                  Certificate 1
                </a>
                <a
                  href="https://www.freecodecamp.org/certification/matthewgoodman13/javascript-algorithms-and-data-structures"
                  target="_blank"
                >
                  Certificate 2
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

OnlineCourses.propTypes = {};

export default OnlineCourses;
