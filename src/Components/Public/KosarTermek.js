import React, { useContext } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { KosarContext } from '../../Contexts/KosarContext';

function KosarTermek(props) {
    const { kosarbolEltavolit } = useContext(KosarContext);

    function eltavolit() {
        kosarbolEltavolit(props);
      }

  return (
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.marka}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.tipus}</Card.Subtitle>
                <ListGroup variant="flush">
                <ListGroup.Item>{props.szin}</ListGroup.Item>
                <ListGroup.Item>{props.ar} Ft</ListGroup.Item>
            </ListGroup>
            <button className="btn btn-danger" onClick={eltavolit}>Eltávolít</button>
        </Card.Body>
        </Card>
    );
}

export default KosarTermek
