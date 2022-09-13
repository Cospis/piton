import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../PITON.png";
const NavBar = () => {
  return (
    <Navbar className="Navbar_nav" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" width={100} height={70} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
          <NavDropdown
            title="Services"
            id="collasible-nav-dropdown"
            className="dropdown"
          >
            <NavDropdown.Item href="/">Brand Identity</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Website Design</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Social Media Marketing</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">
              Search Engiene Optimization
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/">Contact us</Nav.Link>

          <Nav.Link href="/">Portfolio</Nav.Link>
          <Nav.Link eventKey={2} href="/">
            Resources
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
