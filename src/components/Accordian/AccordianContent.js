import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AccordImg1 from '../../images/tab/tab-1.jpg';
import AccordImg2 from '../../images/tab/tab-2.jpg';
import AccordImg3 from '../../images/tab/tab-3.jpg';
import Container from 'react-bootstrap/Container';

function AccordianContent() {
  return (
    <>
      <Accordion defaultActiveKey="0" className="d-md-none">
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              className="accord__button"
            >
              First
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Container className="d-flex flex-column">
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
                <img src={AccordImg1} className="mt-4" alt="" />
                <div className="d-flex align-items-center justify-content-center">
                  <span className="me-3 mt-3 card__color">SHARE</span>
                  <i class="fab fa-facebook-f me-3 mt-3 card__color"></i>
                  <i class="fab fa-twitter mt-3 card__color"></i>
                </div>
              </Container>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="1"
              className="accord__button"
            >
              Second
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Container className="d-flex flex-column">
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
                <img src={AccordImg2} className="mt-4" alt="" />
                <div className="d-flex align-items-center justify-content-center">
                  <span className="me-3 mt-3 card__color">SHARE</span>
                  <i class="fab fa-facebook-f me-3 mt-3 card__color"></i>
                  <i class="fab fa-twitter mt-3 card__color"></i>
                </div>
              </Container>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="2"
              className="accord__button"
            >
              Third
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Container className="d-flex flex-column">
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
                <img src={AccordImg3} className="mt-4" alt="" />
                <div className="d-flex align-items-center justify-content-center">
                  <span className="me-3 mt-3 card__color">SHARE</span>
                  <i class="fab fa-facebook-f me-3 mt-3 card__color"></i>
                  <i class="fab fa-twitter mt-3 card__color"></i>
                </div>
              </Container>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default AccordianContent;
