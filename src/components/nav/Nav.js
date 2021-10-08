import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
              <Nav className="me-auto">
                <Nav.Link className="nav__active px-4" as={Link} exact to={'/'}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={'/news'}>
                  News
                </Nav.Link>
                <Nav.Link as={Link} to={'/contact'}>
                  Contact
                </Nav.Link>
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
