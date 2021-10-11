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
import CardTitle from '../cardtitle/CardTitle';

function CardContent() {
  return (
    <>
      <Row>
        <Col md={6} lg={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg1} />
            <Card.Body>
              <CardTitle content="Nunc porttitor vel" />
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg2} />
            <Card.Body>
              <CardTitle content="Nunc porttitor vel" />
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg3} />
            <Card.Body>
              <CardTitle content="Nunc porttitor vel" />
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg4} />
            <Card.Body>
              <CardTitle content="Nunc porttitor vel" />
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg5} />
            <Card.Body>
              <CardTitle content="Nunc porttitor vel" />
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg6} />
            <Card.Body>
              <CardTitle content="Nunc porttitor vel" />
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg7} />
            <Card.Body>
              <CardTitle content="Nunc porttitor vel" />
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={CardImg8} />
            <Card.Body>
              <CardTitle content="Nunc porttitor vel" />
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CardContent;
