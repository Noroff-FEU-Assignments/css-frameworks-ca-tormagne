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
import Contact from '../Contact';
import News from '../News';
import Home from '../Home';
import SearchBar from '../form/SearchBar';

function nav() {
  return (
    <Router>
      <>
        <Navbar className="nav" bg="light" expand="lg">
          <Container>
            <Navbar.Brand className="nav__brand me-5" href="#home">
              The YAY Company
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto mt-sm-4">
                <NavLink className="nav-link mb-sm-3" exact to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link mb-sm-3" to="/news">
                  News
                </NavLink>
                <NavLink className="nav-link mb-sm-4" to="/contact">
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
