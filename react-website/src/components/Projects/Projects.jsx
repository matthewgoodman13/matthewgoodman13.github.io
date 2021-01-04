import React from 'react';
import PropTypes from 'prop-types';

import './Projects.scss';
import { Image } from 'react-bootstrap';
import Tilt from 'react-tilt';

const Projects = (props) => {
  return (
    <div className="Projects">
      <div id="projects" className="anchor"></div>
      <div className="titleContainer">
        <Image className="img" src={require('./rocket2.svg')} />
        <h1>Projects</h1>
        <div className="line"></div>
      </div>
      <div className="cardsContainer">
        <Tilt className="projectCard">
          <div className="top">
            <Image className="img" src={require('./keepup_logo.png')} />
          </div>
          <div className="content">
            <div className="title">
              <h3>KeepUp.space</h3>
            </div>
            <div className="subTitle">
              <p>Winning Hackathon Project</p>
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
          <a className="btnContainer" href="http://mcgillsocs.matthewgoodman.ca/" target="_blank">
            <a className="button">More Info</a>
          </a>
        </Tilt>
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
              An online social platform that allows users to keep track of their health and motivate others to obtain a
              healthier lifestyle.
            </p>
          </div>
          <a className="btnContainer" href="https://devpost.com/software/mcfitt" target="_blank">
            <a className="button">More Info</a>
          </a>
        </Tilt>
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
