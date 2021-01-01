import React from 'react';
import PropTypes from 'prop-types';

import './OnlineCourses.scss';
import { Image } from 'react-bootstrap';

const OnlineCourses = (props) => {
  return (
    <div className="OnlineCourses">
      <div id="onlinecourses" className="anchor" />
      <div className="left">
        <h1>leftside</h1>
      </div>
      <div className="right">
        <h3>Online Certificate Courses</h3>
        <Image className="image" src={require('./icons/onlinecourses.svg')} />
      </div>
    </div>
  );
};

OnlineCourses.propTypes = {};

export default OnlineCourses;
