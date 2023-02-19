import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function MainNav() {
    return (
        <>
            <Navbar className="fixed-top" bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="">Giuseppe Cosentino</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" passHref legacyBehavior><Nav.Link>Movies</Nav.Link></Link>
                            <Link href="/about" passHref legacyBehavior><Nav.Link href="/about">About</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    );
}
