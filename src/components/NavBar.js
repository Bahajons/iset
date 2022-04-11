import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    Container,
} from 'reactstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Home">
            <Container>
                <Router>
                    <Navbar light expand="md">
                        <NavbarBrand href="/">
                            <Link to="/">
                                <img className='' style={{ width: "200px" }} src='images/logo.png' />
                            </Link>
                        </NavbarBrand>
                        <NavbarToggler style={{ background: "#e2a200"}} onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mx-auto" navbar>
                                <NavItem>
                                    <Link to="/">
                                        <a className="mr-5"><Link to="home">Home</Link></a>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <a className="mr-5"><Link to="about">
                                        About us
                                    </Link></a>
                                </NavItem>
                                <NavItem>
                                    <Link to="portfolia">
                                        <a className="mr-5" >Portfolio</a>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="contact">
                                        <a className="mr-5" >Contact</a>
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Router>
            </Container>
        </div>
    )
}