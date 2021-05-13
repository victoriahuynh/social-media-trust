import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './Header.css'

export default function Header() {
  return (
    <header>
      <Navbar>
        <Navbar.Brand href="/">
          <img src="/CenterInformedPublic_UW.png" width='300px' alt="Center for an Informed Public logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Research">
              <NavDropdown.Item href="/definition">What is trust?</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/research">Full Research</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/tools">Design Tools</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}