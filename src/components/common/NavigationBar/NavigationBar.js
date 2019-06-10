import React, { Component } from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faImages, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';

import terminal from '../../../assets/images/terminal.svg';

import './NavigationBar.scss';

library.add(faUser, faImages, faEnvelope);

class NavigationBar extends Component {
  scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Navbar collapseOnSelect bg="light" fixed="top" expand="lg" className="navigation-bar-section shadow">
        <Container>
          <Link className="navbar-brand" to="/" onClick={this.scrollToTop}>
            <Image src={terminal} width={25} height={25} fluid />
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link className="nav-link" to="/#about">
                About &nbsp;<FontAwesomeIcon icon={faUser} />
              </Link>

              <Link className="nav-link" to="/#portfolio">
                Portfolio &nbsp;<FontAwesomeIcon icon={faImages} />
              </Link>

              <Link className="nav-link" to="/#contact">
                Contact &nbsp;<FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;