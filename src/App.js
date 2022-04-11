import React, { useState } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Portfolia from "./components/Portfolia";
import Skill from "./components/Skill";
import Main from "./components/Main";
import './components/style.scss';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container,
} from 'reactstrap';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className="Home">
        <Router>
          <Container>
            <Navbar light expand="md">
              <NavbarBrand href="/">
                <Link to="/">
                  <img className='' style={{ width: "200px" }} src='images/logo.png' />
                </Link>
              </NavbarBrand>
              <NavbarToggler style={{ background: "#e2a200" }} onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mx-auto" navbar>
                  <NavItem>
                    <a className="mr-5"><Link to="/">Home</Link></a>
                  </NavItem>
                  <NavItem>
                    <a className="mr-5"><Link to="/about">About Us</Link></a>
                  </NavItem>
                  <NavItem>
                    <a className="mr-5"><Link to="/portfolia">Portfolia</Link></a>
                  </NavItem>
                  <NavItem>
                    <Link to="contact">
                      <a className="mr-5"><Link to="/contact">Contact</Link></a>
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Container>
          <Switch>
            <Route path="/about">
              <About />
              <Footer />
            </Route>
            <Route path="/portfolia">
              <Portfolia />
              <Footer />
            </Route>
            <Route path="/contact">
              <Contact />
              <Footer />
            </Route>
            <Route path="/">
              <Main />
              <Skill />
              <About />
              <Portfolia />
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    </div >
  );
}
export default App;
