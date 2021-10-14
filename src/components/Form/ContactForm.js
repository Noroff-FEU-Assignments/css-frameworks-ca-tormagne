import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function ContactForm() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Container>
              <Form className="mb-5 mb-md-0">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Website</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={10} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Allow us to sell your personal details to whomever we want"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="contact__button" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Container>
          </Col>
          <Col md={6}>
            <Container>
              <div className="contact__form__text">
                <span className="d-flex">
                  <i class="fas fa-envelope contact__icon me-5 mb-5"></i>
                  <p>hello@yay.com</p>
                </span>
                <span className="d-flex">
                  <i class="fas fa-phone contact__icon me-5 mb-5"></i>
                  <p>123 456 7890</p>
                </span>
                <span className="d-flex">
                  <i class="fas fa-map-marker-alt contact__icon me-5"></i>
                  <p>123 Some Street Somewhere Some City 10000</p>
                </span>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactForm;
