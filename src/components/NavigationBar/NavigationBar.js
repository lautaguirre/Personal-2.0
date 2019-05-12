import React, { Component } from 'react';

import { Navbar, Container, Nav, Image } from 'react-bootstrap';

import terminal from '../../assets/images/terminal.svg';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faImages, faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faUser, faImages, faEnvelope);

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect bg="light" fixed="top" expand="lg" className="shadow">
        <Container>

          <Navbar.Brand>
            <Image src={terminal} width={20} height={20} fluid />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#home">
                Home &nbsp;<FontAwesomeIcon icon={faHome} />
              </Nav.Link>

              <Nav.Link href="#about">
                About &nbsp;<FontAwesomeIcon icon={faUser} />
              </Nav.Link>

              <Nav.Link href="#portfolio">
                Portfolio &nbsp;<FontAwesomeIcon icon={faImages} />
              </Nav.Link>

              <Nav.Link href="#contact">
                Contact &nbsp;<FontAwesomeIcon icon={faEnvelope} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;