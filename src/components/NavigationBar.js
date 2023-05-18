import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>G-Tech News</Navbar.Brand>
                <Nav>
                    <Nav.Link>Bergabung</Nav.Link>
                    <Nav.Link>Hubungi</Nav.Link>
                </Nav>
            </Container>   
        </Navbar>
    </div>
  )
}

export default NavigationBar