import React from 'react';
import PropTypes from 'prop-types';
import './About.scss';
import { Image } from 'react-bootstrap';

const InterestChip = ({ title, icon }) => {
  return (
    <div className="InterestChip">
      <Image className="icon" src={icon} />
      <p>{title}</p>
    </div>
  );
};

const About = (props) => {
  return (
    <div id="about" className="AboutContainer">
      <div className="left">
        <h3>About Me</h3>
        <Image className="hockey" src={require('./icons/hockey.svg')} />
      </div>
      <div className="right">
        <div className="aboutMessage">
          <Image className="quoteIcon" src={require('./icons/quote.svg')} />
          Hi, I’m Matthew! I am a creative and self-motivated Computer Science Student at McGill University. I am in U2,
          and I am excited to pursue my goal of obtaining a career in the technology field.
        </div>
        <div className="interestsContainer">
          <div className="interests">
            <div className="title">
              <h4>Interests & Hobbies</h4>
            </div>
            <div className="chips">
              <div className="chipRow">
                <InterestChip title="Hockey" icon={require('./icons/hockeyicon.svg')} />
                <InterestChip title="Montreal Canadiens" icon={require('./icons/habs.png')} />
                <InterestChip title="Snowboarding" icon={require('./icons/snowboarding.png')} />
              </div>
              <div className="chipRow">
                <InterestChip title="Gym" icon={require('./icons/gym.svg')} />
                <InterestChip title="Travelling" icon={require('./icons/travelling.svg')} />
                <InterestChip title="Programming" icon={require('./icons/programming.svg')} />
                <InterestChip title="Virtual Reality" icon={require('./icons/vr.svg')} />
              </div>
            </div>
          </div>
          <div className="interests">
            <div className="title">
              <h4>Tech-y Topics I Follow</h4>
            </div>
            <div className="chips">
              <div className="chipRow">
                <InterestChip title="Smartphones & Wearables" icon={require('./icons/smartphone.svg')} />
                <InterestChip title="Sports Tech" icon={require('./icons/hockeyicon.svg')} />
                <InterestChip title="VR, VR Sports Training, VR Gaming" icon={require('./icons/vr.svg')} />
              </div>
              <div className="chipRow">
                <InterestChip title="Internet of Things" icon={require('./icons/internet.svg')} />
                <InterestChip title="Full Stack Development" icon={require('./icons/codesvg.svg')} />
                <InterestChip title="Machine Learning / AI" icon={require('./icons/ai.svg')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
