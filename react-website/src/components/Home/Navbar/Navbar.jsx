import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Navbar.scss';
import Scrollspy from 'react-scrollspy';

const NavbarComponent = (props) => {
  return (
    <div className="Navbar">
      <Navbar collapseOnSelect className="bootstrapNav" bg="transparent" expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Scrollspy
              componentTag={'div'}
              onUpdate={(e) => console.log(e)}
              style={{ display: 'flex', margin: 0 }}
              items={['home', 'about', 'education', 'skills', 'experience', 'projects', 'contact']}
              currentClassName="active"
              offset={-44}
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              {/* <Nav.Link href="#onlinecourses">Online Courses</Nav.Link> */}
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

Navbar.propTypes = {};

export default NavbarComponent;
