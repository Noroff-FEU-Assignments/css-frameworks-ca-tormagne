import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Contact from '../contact/Contact';
import News from '../news/News';
import Home from '../home/Home';
import SearchBar from '../form/SearchBar';

function nav() {
  return (
    <Router>
      <>
        <Navbar className="nav__custom" bg="light" expand="lg">
          <Container>
            <Navbar.Brand className="nav__brand me-5" href="#home">
              The YAY Company
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto mt-4 mt-lg-0">
                <NavLink className="nav-link mb-3 mb-lg-0" exact to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link mb-3 mb-lg-0" to="/news">
                  News
                </NavLink>
                <NavLink className="nav-link mb-4 mb-lg-0" to="/contact">
                  Contact
                </NavLink>
              </Nav>
              <SearchBar />
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default nav;
