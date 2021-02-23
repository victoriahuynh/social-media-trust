import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap'

class Header extends Component {

  render() {
    return (
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Designing for Trust on Social Media</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
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