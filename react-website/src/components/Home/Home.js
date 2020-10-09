import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import Button from 'react-bootstrap/Button';

const Home = (props) => {
  return (
    <div className="HomeContainer">
      <Button variant="primary">Primary</Button>{' '}
    </div>
  );
};

Home.propTypes = {};

export default Home;
