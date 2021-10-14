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

const cardData = [
  {
    id: 0,
    text: 'Nunc malesuada eget est fringilla dapibus.',
    image: CardImg1,
  },
  {
    id: 1,
    text: 'Nunc malesuada eget est fringilla dapibus.',
    image: CardImg2,
  },
  {
    id: 2,
    text: 'Nunc malesuada eget est fringilla dapibus.',
    image: CardImg3,
  },
  {
    id: 3,
    text: 'Nunc malesuada eget est fringilla dapibus.',
    image: CardImg4,
  },
  {
    id: 4,
    text: 'Nunc malesuada eget est fringilla dapibus.',
    image: CardImg5,
  },
  {
    id: 5,
    text: 'Nunc malesuada eget est fringilla dapibus.',
    image: CardImg6,
  },
  {
    id: 6,
    text: 'Nunc malesuada eget est fringilla dapibus.',
    image: CardImg7,
  },
  {
    id: 7,
    text: 'Nunc malesuada eget est fringilla dapibus.',
    image: CardImg8,
  },
];

function CardContent() {
  return (
    <Row>
      {cardData.map((card) => (
        <Col key={card.id} md={6} lg={3} className="mt-4">
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <CardTitle content="Nunc porttitor vel" />
              <Card.Text>{card.text}</Card.Text>
              <div class="d-grid">
              <Button variant="card__button">MORE</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardContent;
