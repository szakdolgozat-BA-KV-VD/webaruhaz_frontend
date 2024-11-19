import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Termek(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.marka}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.tipus}</Card.Subtitle>
        <Card.Text>
          Auto leírása auto leírása auto leírása auto leírása auto leírása auto leírása auto leírása
        </Card.Text>
            <ListGroup variant="flush">
            <ListGroup.Item>{props.rendszam}</ListGroup.Item>
            <ListGroup.Item>{props.fogyaszt}</ListGroup.Item>
            <ListGroup.Item>{props.szin}</ListGroup.Item>
            <ListGroup.Item>{props.ar}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default Termek
