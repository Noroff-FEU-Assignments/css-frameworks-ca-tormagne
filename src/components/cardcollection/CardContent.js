import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardImg1 from '../../images/news/news-1.jpg';
import CardImg2 from '../../images/news/news-2.jpg';
import CardImg3 from '../../images/news/news-3.jpg';
import CardImg4 from '../../images/news/news-4.jpg';
import CardImg5 from '../../images/news/news-5.jpg';
import CardImg6 from '../../images/news/news-6.jpg';
import CardImg7 from '../../images/news/news-7.jpg';
import CardImg8 from '../../images/news/news-8.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardContent() {
  return (
    <>
      <Row className="gx-5">
        <Col md={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg3} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg4} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="gx-5">
        <Col md={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg5} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg6} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg7} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg8} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CardContent;
