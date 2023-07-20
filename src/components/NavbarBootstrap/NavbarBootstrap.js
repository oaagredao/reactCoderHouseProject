import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// logo
import logo from '../../images/logo.PNG';
// carwidget
import CarWidget from "../CarWidget/CarWidget"
// import css
import "./NavbarBootstrap.css"
import ButtonComponent from '../ButtonComponent/ButtonComponent';



function NavbarBootstrap() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <img className="navbar-logo"  src={logo} alt="Logo de la tienda" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Products</Nav.Link>
              <Nav.Link href="/product">Sale</Nav.Link>
              <Nav.Link href="#action4">Contact us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <ButtonComponent label='Search' colorFondo='rgb(245, 89, 89)'/>
              
            </Form>
            <CarWidget/> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavbarBootstrap;