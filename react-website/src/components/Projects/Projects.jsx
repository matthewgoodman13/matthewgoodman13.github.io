import React from 'react';
import PropTypes from 'prop-types';

import './Projects.scss';
import { Image } from 'react-bootstrap';
import Tilt from 'react-tilt';
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = (props) => {
  return (
    <div id="projects" className="Projects">
      <div id="projects" className="anchor"></div>
      <div className="titleContainer">
        <Image className="img" src={require('./rocket2.svg')} />
        <h1>Projects</h1>
        <div className="line"></div>
      </div>
      <div className="cardsContainer">

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <Tilt className="projectCard">
            <div className="top">
              <Image className="img" src={require('./smartteams.png')} />
            </div>
            <div className="content">
              <div className="title">
                <h3>SmartTeams</h3>
              </div>
              <div className="subTitle">
                <p>Personal Project</p>
                <p className="small">September 2022</p>
              </div>
              <p className="info">
                Built software engineering tool for software managers to help reduce turnover rates and increase employee satisfaction among engineering teams.
              </p>
            </div>
            <a
              className="btnContainer"
              href="https://smartteams.ca/"
              target="_blank"
            >
              <a className="button">More Info</a>
            </a>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <Tilt className="projectCard">
            <div className="top">
              <Image className="img" src={require('./keepup_logo.png')} />
            </div>
            <div className="content">
              <div className="title">
                <h3>KeepUp.space</h3>
              </div>
              <div className="subTitle">
                <ScrollAnimation animateIn="animate__rubberBand" delay={400}>
                  <p>Winning Hackathon Project</p>
                </ScrollAnimation>
                <p>* Best Education Hack *</p>
                <p className="small">Yale University - YHack '19</p>
              </div>
              <p className="info">
                A Web App that allows for real-time communcation between students and professors during lectures.
              </p>
            </div>
            <a className="btnContainer" href="https://devpost.com/software/keepup-htaqle" target="_blank">
              <a className="button">More Info</a>
            </a>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <Tilt className="projectCard">
            <div className="top">
              <Image className="img" src={require('./mcgilldates_logo.png')} />
            </div>
            <div className="content">
              <div className="title">
                <h3>McGill Dates</h3>
              </div>
              <div className="subTitle">
                <p>Personal Project</p>
                <p className="small">February 2022</p>
              </div>
              <p className="info">
                Built, marketed, and launched Valentine's Day dating app plaform exclusively for McGill students.
              </p>
            </div>
            <a
              className="btnContainer"
              href="https://matthewgoodman.notion.site/McGill-Dates-Info-d52297bd9b2840269ea76206e37a9c8d"
              target="_blank"
            >
              <a className="button">More Info</a>
            </a>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <Tilt className="projectCard">
            <div className="top">
              <Image className="img" src={require('./reviewboard_logo.png')} />
            </div>
            <div className="content">
              <div className="title">
                <h3>Emoji UI Picker</h3>
              </div>
              <div className="subTitle">
                <p>CANOSP Open Source Project</p>
                <p>* Nominated to Participate *</p>
                <p className="small">Fall 2021 Cohort</p>
              </div>
              <p className="info">
                Created an Emoji Picker that allows customers to select emojis from a popup menu instead of typing out
                emoji short-codes.
              </p>
            </div>
            <a
              className="btnContainer"
              href="https://matthewgoodman.notion.site/Emoji-UI-Project-Final-Report-478cd8be2717437ba3270b1fb78ea629"
              target="_blank"
            >
              <a className="button">More Info</a>
            </a>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <Tilt className="projectCard">
            <div className="top">
              <Image className="img mcfitt" src={require('./mcgillsocs.jpg')} />
            </div>
            <div className="content">
              <div className="title">
                <h3>McGill CS Website</h3>
              </div>
              <div className="subTitle">
                <p>Course Project</p>
                <p>McGill School of Computer Science</p>
                <p className="small">Fall 2020</p>
              </div>
              <p className="info">
                Website built for McGill's School of Computer Science as a prospect to replace its current website.
              </p>
            </div>
            <a className="btnContainer" href="https://github.com/matthewgoodman13/mcgill_socs" target="_blank">
              <a className="button">More Info</a>
            </a>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <Tilt className="projectCard">
            <div className="top">
              <Image className="img mcfitt" src={require('./mcfitt.jpg')} />
            </div>
            <div className="content">
              <div className="title">
                <h3>McFitt</h3>
              </div>
              <div className="subTitle">
                <p>Hackathon Project</p>
                <p>Created At McWICS 2020</p>
                <p className="small">Mila - Quebec Institute AI - Jan '20</p>
              </div>
              <p className="info">
                An online social platform that allows users to keep track of their health and motivate others to obtain
                a healthier lifestyle.
              </p>
            </div>
            <a className="btnContainer" href="https://devpost.com/software/mcfitt" target="_blank">
              <a className="button">More Info</a>
            </a>
          </Tilt>
        </ScrollAnimation>
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
