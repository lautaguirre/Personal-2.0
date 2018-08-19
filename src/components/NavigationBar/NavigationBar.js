import React, { Component } from 'react';

import { Navbar, NavItem, Nav, Image } from 'react-bootstrap';

import terminal from '../../assets/images/terminal.svg';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faImages, faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faUser, faImages, faEnvelope);

class NavigationBar extends Component {
  render() {
    return (
        <Navbar collapseOnSelect fixedTop >

          <Navbar.Header>
            <Navbar.Brand>
               <Image src={terminal} />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>

              <NavItem eventKey={1} href="#home">
                Home &nbsp;<FontAwesomeIcon icon={faHome} />
              </NavItem>

              <NavItem eventKey={2} href="#about">
                About &nbsp;<FontAwesomeIcon icon={faUser} />
              </NavItem>

              <NavItem eventKey={3} href="#portfolio">
                Portfolio &nbsp;<FontAwesomeIcon icon={faImages} />
              </NavItem>

              <NavItem eventKey={4} href="#contact">
                Contact &nbsp;<FontAwesomeIcon icon={faEnvelope} />
              </NavItem>

            </Nav>
          </Navbar.Collapse>

        </Navbar>
    );
  }
}

export default NavigationBar;