import React from 'react';
import { Container, Card, } from 'react-bootstrap';

const Cards = ({ name, email }) => {
    return (
        <div>
            <Container >
                <Card id="card" border="0" style={{ width: '12rem' }} className="text-center">
                    <Card.Img variant="top" src={`https://api.adorable.io/avatars/300/${name}.png`} style={{ borderTopLeftRadius: '15px', borderTopRightRadius: "15px" }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{email}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Cards;