import { Link } from 'react-router-dom';
import React from 'react';
import { Badge, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Button from '@restart/ui/esm/Button';

const Header = () => {
    const {user, logOut}= useAuth();  

    return (
        <>
     <Navbar fluid sticky="top" bg="light"  expand={false} >
  <Container fluid>
    <Navbar.Brand href="#">DAILY SUN CLINIC <Badge>DSC+</Badge></Navbar.Brand>
    <Navbar.Toggle  aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"><Badge>DSC+</Badge></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <h4>Hello!! {user?.displayName}</h4>
          <p>Monday-Saturday 9am to 5pm</p>
          <p><small>24h Hotline: +393512295629</small></p>
          <Nav.Link as={Link} to ="/home#home">Home</Nav.Link>
          <Nav.Link as={Link} to ="/services#services">Services</Nav.Link>
          <Nav.Link as={Link} to ="/specials#specials">Specials</Nav.Link>
          {user?.email ?
            <Button onClick={logOut} variant="danger">LogOut</Button> :
            <Nav.Link as={Link} to ="/login#login">Login/Register</Nav.Link> }
          <Nav.Link as={Link} to ="/ambulance#ambulance">Ambulance</Nav.Link>
          <Nav.Link as={Link} to ="/aboutUs#aboutUs">About Us</Nav.Link>
          <Nav.Link as={Link} to ="/QnA#QnA">Q&A</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
      </>
    );
};

export default Header;