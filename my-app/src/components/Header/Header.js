import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './Header.css'

class Header extends Component {

  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Brand href="/">
            <img src="/CenterInformedPublic_UW.png" width='300px' alt="Center for an Informed Public logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="research">Research</Nav.Link>
              <Nav.Link href="tools">Design Tools</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;