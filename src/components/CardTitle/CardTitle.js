import React from 'react';
import Card from 'react-bootstrap/Card';

function CardTitle(props) {
  return <Card.Title>{props.content}</Card.Title>;
}

export default CardTitle;
