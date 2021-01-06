import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Navbar.scss';
import Scrollspy from 'react-scrollspy';

const NavbarComponent = (props) => {
  const getWidth = () => {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    const clickedLink = e.target.href.split('#')[1];
    const element = document.getElementById(clickedLink);
    const offsetY = getWidth() > 768 ? 44 : 0;
    const scrollToPos = element.getBoundingClientRect().top + window.pageYOffset - offsetY;
    window.scrollTo({ top: scrollToPos });

    setNavCollapsed(true);
  };

  const [navCollapsed, setNavCollapsed] = useState(true);

  return (
    <div className="Navbar">
      <Navbar
        className="bootstrapNav"
        bg="transparent"
        expand="md"
        expanded={!navCollapsed}
        onToggle={() => setNavCollapsed(!navCollapsed)}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Scrollspy
            className="navbar-nav mr-auto" // <--- Nav Class (replaced)
            componentTag={'div'}
            style={{ display: 'flex', margin: 0 }}
            items={['home', 'about', 'education', 'onlinecourses', 'skills', 'experience', 'projects', 'contact']}
            currentClassName="active"
            offset={getWidth() > 768 ? -44 : 0}
          >
            <a className="nav-link" href="#home" onClick={(e) => handleClick(e)}>
              Home
            </a>
            <a className="nav-link" href="#about" onClick={(e) => handleClick(e)}>
              About Me
            </a>
            <a className="nav-link" href="#education" onClick={(e) => handleClick(e)}>
              Education
            </a>
            <a className="nav-link" href="#onlinecourses" onClick={(e) => handleClick(e)}>
              Online Courses
            </a>
            <a className="nav-link" href="#skills" onClick={(e) => handleClick(e)}>
              Skills
            </a>
            <a className="nav-link" href="#experience" onClick={(e) => handleClick(e)}>
              Experience
            </a>
            <a className="nav-link" href="#projects" onClick={(e) => handleClick(e)}>
              Projects
            </a>
            <a className="nav-link" href="#contact" onClick={(e) => handleClick(e)}>
              Contact
            </a>
          </Scrollspy>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

Navbar.propTypes = {};

export default NavbarComponent;
