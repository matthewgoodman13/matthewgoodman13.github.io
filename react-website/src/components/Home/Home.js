import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';

const Home = (props) => {
  return (
    <div className="HomeContainer">
      <div className="homeContent"></div>
      <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,128L120,149.3C240,171,480,213,720,213.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
