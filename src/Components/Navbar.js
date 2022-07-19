import React from 'react'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


function Navigation() {
  return (
<div>      
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/Home">BadBank</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/CreateAccount">Create Account</Nav.Link>
            <Nav.Link href="/Deposit">Deposit</Nav.Link>
            <Nav.Link href="/Withdraw">Withdraw</Nav.Link>
            <Nav.Link href="/#">Balance</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
  )
}

export default Navigation;
