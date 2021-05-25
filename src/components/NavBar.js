import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
            <Navbar.Brand href="#home">BayCom</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <span className="mr-auto">
                </span>
                <Nav>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/webdesign">
                        <Nav.Link>Webdesign</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/datenbanken">
                        <Nav.Link>Datenbanken</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/hostingundwartungservices">
                        <Nav.Link>Services</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/kontakt">
                        <Nav.Link>Kontakt</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;