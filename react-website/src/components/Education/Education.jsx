import React from 'react';
import PropTypes from 'prop-types';
import './Education.scss';
import { Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Education = (props) => {
  return (
    <div id="education" className="Education">
      <div className="titleContainer">
        <div className="title">
          <Image className="icon" src={require('./icons/books.svg')} />
          <h1>Education</h1>
        </div>
      </div>
      <div className="educationCards">
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="frontContent">
                  <div className="top"></div>
                  <div className="main">
                    <Image
                      className="schoolLogo"
                      src={require('./mcgill-university-logo.png')}
                      style={{ marginTop: '10px' }}
                    />
                    <div className="textContent">
                      <p className="title">McGill University</p>
                      <p>BSc. Major in Computer Science</p>
                      <p>Minor in Entrepreneurship</p>
                      <p>Graduated December 2022</p>
                    </div>
                  </div>
                  <div className="bottom">Hover To See Courses</div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="courses">
                  <h3>Relevant Courses</h3>
                  <div className="courseList">
                    <p>COMP250: Introduction to Computer Science</p>
                    <p>COMP251: Data Structures & Algorithms</p>
                    <p>COMP206: Introduction to Software Systems</p>
                    <p>COMP273: Introduction to Computer Systems</p>
                    <p>COMP303: Software Design</p>
                    <p>COMP302: Progr. Languages & Paradigms</p>
                    <p>COMP307: Principles of Web Development</p>
                    <p>COMP310: Operating Systems</p>
                    <p>COMP322: Introduction to C++</p>
                    <p>COMP360: Algorithm Design</p>
                    <p>COMP421: Database Systems</p>
                    <p>COMP514: Robotics</p>
                    <p>COMP598: Introduction to Data Science</p>
                    <p><b>GPA: 3.6/4.0</b></p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="frontContent">
                  <div className="top abbott"></div>
                  <div className="main">
                    <Image
                      className="schoolLogo"
                      src={require('./johnabbottlogo.jpeg')}
                      style={{ marginTop: '10px', position: 'relative', top: '-4px' }}
                    />
                    <div className="textContent">
                      <p className="title">John Abbott College (CEGEP)</p>
                      <p>Science Program</p>
                      <p>Honours in English</p>
                      <p>Graduated December 2018</p>
                    </div>
                  </div>
                  <div className="bottom abbott">Hover To See Courses</div>
                </div>
              </div>
              <div className="flip-card-back abbott">
                <div className="courses">
                  <h3>Info & Awards</h3>
                  <div className="courseList">
                    <p>Graduated with Honours in English</p>
                    <p>R-Score: 31.7</p>
                  </div>
                </div>
                <div className="courses">
                  <h3>Relevant Courses</h3>
                  <div className="courseList">
                    <p>Calculus I, II, III</p>
                    <p>Linear Algebra</p>
                    <p>Enhancing Your Computer Knowledge</p>
                    <p>Intro to Programming in C#</p>
                    <p>Physics, Chemistry, Biology, Geology Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="frontContent">
                  <div className="top stt"></div>
                  <div className="main">
                    <Image
                      className="schoolLogo"
                      src={require('./stthomas.jpeg')}
                      style={{ marginTop: '10px', position: 'relative', top: '-2px' }}
                    />
                    <div className="textContent">
                      <p className="title">St. Thomas High School</p>
                      <p>IB Program • Principal's Award</p>
                      <p>Student Council & Tech Committee Member</p>
                      <p>Graduated June 2016</p>
                    </div>
                  </div>
                  <div className="bottom stt">Hover To See Awards</div>
                </div>
              </div>
              <div className="flip-card-back stt">
                <div className="courses">
                  <h3>Info & Awards</h3>
                  <div className="courseList">
                    <p>Principal's Award</p>
                    <p>Graduated through IB Program</p>
                    <p>Student Council Member</p>
                    <p>Tech Committee Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

Education.propTypes = {};

export default Education;
