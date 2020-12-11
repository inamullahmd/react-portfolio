import React from 'react'
import {Nav, Navbar, Container } from 'react-bootstrap'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Menubar = () => {
    return(
        <Container>
        <Navbar bg="white" expand="lg" className="upper">
        <Navbar.Brand href="#home" className="fw-sb h3-responsive">
            portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            
            <Nav.Link onClick={() => scrollTo("#about")} className="fw-md">About</Nav.Link>
            <Nav.Link onClick={() => scrollTo("#work")} className="fw-md">Work</Nav.Link>
            <Nav.Link onClick={() => scrollTo("#skills")} className="fw-md">Skills</Nav.Link>
            <Nav.Link className="fw-md">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Container>
    )
}

export default Menubar;