
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png';
import navLinkedin from '../assets/img/linkedin.svg';
import navGithub from '../assets/img/github.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
    const [activateLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
      <Router>
        <div>
          <Navbar expand="lg" className={`bg-body-tertiary ${scrolled ? 'scrolled' : ''}`}>
            <Container>
              <Navbar.Brand href="#home">
                  <img src={logo} alt="Logo" className="navbar-logo"/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-sm-end">
                <Nav className="me-auto ml-auto">
                    <Nav.Link href="#home" className={activateLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activateLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Expériences</Nav.Link>
                    <Nav.Link href="#projects" className={activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projets</Nav.Link>
                </Nav>
                <span className="justify-content-end text-sm-end">
                  <div className="social-icon">
                      <a href="https://www.linkedin.com/in/althéa-feuillet-81b7b717b/"><img src={navLinkedin} alt="linkedin"/></a>
                      <a href="https://github.com/altheaFeu"><img src={navGithub} alt="github"/></a>
                  </div>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </div>
      </Router>
      );   
}