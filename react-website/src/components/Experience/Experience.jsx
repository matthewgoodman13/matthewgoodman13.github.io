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
        <TimelineItem className="timelineItem" key="001" dateText="June 2022 - August 2022">
          <div className="bodyContent">
            <div className="titleContent">
              <Image className="img" src={require('./Amazon_icon.png')} />
              <div className="text">
                <h3>Software Development Engineer Intern II</h3>
                <h4>Amazon Canada - Vancouver</h4>
              </div>
            </div>
            <div className="jobInfo">
              <ul>
                <li><strong>Enabled same-service service discovery in Kubernetes clusters</strong> allowing customers to create resilient and redundant services that communicate across multiple clusters</li>
                <li><strong>Contributed to the Kubernetes open-source multicluster community</strong> to help break the hard-boundary of communication between Kubernetes clusters</li>
                <li><strong>Closed major <a href='https://github.com/aws/aws-cloud-map-mcs-controller-for-k8s/issues/47' target="_blank">GitHub Issue ↗</a></strong> to advance project towards a beta version compliant with Kubernetes SIG-Multicluster specifications</li>
                <li>Open-Source Project: <a href='https://github.com/aws/aws-cloud-map-mcs-controller-for-k8s' target="_blank">AWS Cloud Map MCS Controller for K8s Project ↗</a></li>
              </ul>
            </div>
            <div className="skills">
              <p>Amazon Web Services</p>
              <p>Golang</p>
              <p>Kubernetes</p>
              <p>Kubernetes</p>
              <p>OperatorSDK</p>
              <p>Networking & DNS</p>
              <p>Open-Source</p>
            </div>
          </div>
        </TimelineItem>
        <TimelineItem className="timelineItem" key="001" dateText="June 2021 - August 2021">
          <div className="bodyContent">
            <div className="titleContent">
              <Image className="img" src={require('./Amazon_icon.png')} />
              <div className="text">
                <h3>Software Development Engineer Intern I</h3>
                <h4>Amazon Canada - Vancouver</h4>
              </div>
            </div>
            <div className="jobInfo">
              <ul>
                <li><strong>Optimized and reduced AWS Cloud Map API traffic</strong> though implementation of event-driven architecture for status updates, eliminating need for manual polling </li>
                <li>Onboarded AWS Cloud Map onto AWS EventBridge for event management for health checks and status updates</li>
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
                  Integrated <strong>Stripe Payment handling</strong> and <strong>Google Maps APIs</strong> for delivery tracking
                </li>
                <li>
                  <strong>Built and deployed</strong> KargoROO’s informatic website:{' '}
                  <a href="https://kargoroo.ca/" target="_blank">
                    kargoroo.ca ↗
                  </a>
                </li>
                <li>
                  <strong>Managed and organized</strong> team's engineering effort including managing Upwork teams and an intern
                </li>
              </ul>
            </div>
            <div className="skills">
              <p>Ionic Framework</p>
              <p>ReactJS</p>
              <p>Redux</p>
              <p>NodeJS</p>
              <p>MongoDB</p>
              <p>Firebase</p>
              <p>UI/UX Design</p>
              <p>Google Maps API</p>
              <p>Stripe</p>
              <p>Bootstrap</p>
              <p>DigitalOcean</p>
              <p>30000+ Lines of Code</p>
            </div>
          </div>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

Experience.propTypes = {};

export default Experience;
