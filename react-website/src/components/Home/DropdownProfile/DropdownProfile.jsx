import React from 'react';
import PropTypes from 'prop-types';
import './DropdownProfile.scss';
import { Image } from 'react-bootstrap';

const DropdownProfile = (props) => {
  return (
    <div className="DropdownProfile">
      <Image className="profilepic" src={require('./profile-noback.png')} />
    </div>
  );
};

DropdownProfile.propTypes = {};

export default DropdownProfile;
