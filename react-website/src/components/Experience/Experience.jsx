import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './Experience.scss';
import { Image } from 'react-bootstrap';

const CustomDate = (props) => {
  return (
    <div className="CustomDate">
      <h1>Hello World!</h1>
    </div>
  );
};

const Experience = (props) => {
  return (
    <div id="experience" className="Experience">
      <div id="experience" className="anchor"></div>
      <div className="titleContainer">
        <div className="title">
          <Image className="icon" src={require('./briefcase.svg')} />
          <h1>Work Experience</h1>
        </div>
      </div>
      <Timeline lineColor={'#fff'}>
        <TimelineItem className="timelineItem" key="001" dateText="June 2021 - August 2021">
          <div className="bodyContent">
            <div className="titleContent">
              <Image className="img" src={require('./Amazon_icon.png')} />
              <div className="text">
                <h3>Software Development Engineer Intern</h3>
                <h4>Amazon Canada - Vancouver</h4>
              </div>
            </div>
            <div className="jobInfo">
              <ul>
                <li><strong>Designed</strong>, <strong>integrated</strong>, and <strong>launched</strong> an event-driven architecture allowing Cloud
                  Map customers to receive automated events on status changes instead of
                  customers needing to manually poll for updates</li>
                <li>Allows customers to migrate away from Cloud Map’s throttled APIs and as a
                  result eases Cloud Map’s API traffic</li>
              </ul>
            </div>
            <div className="skills">
              <p>Amazon Web Services</p>
              <p>AWS Lambda</p>
              <p>AWS DynamoDB</p>
              <p>Amazon EventBridge</p>
              <p>Java</p>
              <p>Mockito</p>
              <p>Unit Testing with JUnit</p>
              <p>Google Guice</p>
              <p>Development Cycle</p>
            </div>
          </div>
        </TimelineItem>
        <TimelineItem className="timelineItem" key="002" dateText="May 2020 - June 2021">
          <div className="bodyContent">
            <div className="titleContent">
              <Image className="img" src={require('./kargoroo.png')} />
              <div className="text">
                <h3>Software Developer & Technical Lead</h3>
                <h4>KargoROO Inc.</h4>
              </div>
            </div>
            <div className="jobInfo">
              <ul>
                <li>
                  <strong>Built</strong> a fully functional and scalable mobile app platform{' '}
                  <strong>from the ground up</strong> as the <strong>sole developer</strong> using KargoROO’s vision of
                  on-the-way deliveries and <strong>deployed it</strong> to the Apple and Google Play Store
                </li>
                <li>
                  <strong>Built</strong> KargoROO’s informatic website:{' '}
                  <a href="https://kargoroo.ca/" target="_blank">
                    kargoroo.ca
                  </a>
                </li>
                <li>
                  <strong>Managed</strong> company technical aspects of developing their mobile app platform
                </li>
              </ul>
            </div>
            <div className="skills">
              <p>UI/UX Design</p>
              <p>Ionic Framework</p>
              <p>React</p>
              <p>Redux</p>
              <p>NodeJS</p>
              <p>MongoDB</p>
              <p>Firebase</p>
              <p>Google Maps API</p>
              <p>Bootstrap</p>
              <p>Digital Ocean</p>
              <p>20000+ Lines of Code</p>
            </div>
          </div>
        </TimelineItem>
        {/* <TimelineItem className="timelineItem" key="001" dateText="Summer 2019">
          <div className="bodyContent">
            <div className="titleContent">
              <Image className="img" src={require('./redwood1.jpg')} />
              <div className="text">
                <h3>Assistant Aquatic Coordinator</h3>
                <h4>Redwood Country Day Camp</h4>
              </div>
            </div>
            <div className="jobInfo">
              <ul>
                <li>
                  Involves the organization and supervision of the aquatic program and pool. This includes managing the
                  lifeguards and ensuring proper pool maintenance and safety.
                </li>
              </ul>
            </div>
            <div className="skills"></div>
          </div>
        </TimelineItem>
        <TimelineItem className="timelineItem" key="001" dateText="Summer 2019">
          <div className="bodyContent">
            <div className="titleContent">
              <Image className="img" src={require('./redwood1.jpg')} />
              <div className="text">
                <h3>Assistant Aquatic Coordinator</h3>
                <h4>Redwood Country Day Camp</h4>
              </div>
            </div>
            <div className="jobInfo">
              <ul>
                <li>
                  Involves the organization and supervision of the aquatic program and pool. This includes managing the
                  lifeguards and ensuring proper pool maintenance and safety.
                </li>
              </ul>
            </div>
            <div className="skills"></div>
          </div>
        </TimelineItem> */}
      </Timeline>
    </div>
  );
};

Experience.propTypes = {};

export default Experience;
