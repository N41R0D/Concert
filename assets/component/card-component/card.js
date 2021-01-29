import React, { Component } from "react";
import { Button, Card } from 'react-bootstrap';
import "./card.scss"


const CardComponent = (props) => {
    return (
		<Card>
			<div>
				<Card.Img variant="left" src="holder.js/100px180" />
			</div>

			<Card.Body>
				<Card.Title>{props.article.title}</Card.Title>
				<Card.Text>{props.article.description}</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}

export default CardComponent;
