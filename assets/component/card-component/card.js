import React, { Component } from "react";
import { Button, Card } from 'react-bootstrap';
import "./card.scss"


class CardComponent extends React.Component {
  
  constructor(props) {
    super(props);
  }

  card() {
    //Object.keys(this.props)[0] retourne le premier élément du props 
    switch (Object.keys(this.props)[0]) {
		case "concert":
			return (
				<Card>
					<div>
						<Card.Img variant="left" src="#" />
					</div>

					<Card.Body>
						<Card.Title>{this.props.concert.artistName}</Card.Title>
						<Card.Text>{this.props.concert.date}</Card.Text>
						{/*<Card.Text>
							{new Intl.DateTimeFormat("fr-FR", {
								year: "numeric",
								month: "long",
								day: "2-digit",
							}).format(this.props.concert.date)}
						</Card.Text>*/}
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			);
		case "article":
			return (
				<Card>
					<div>
						<Card.Img variant="left" src="#" />
					</div>

					<Card.Body>
						<Card.Title>{this.props.article.title}</Card.Title>
						<Card.Text>{this.props.article.description}</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			);
		default:
			return "erreur CardComponent";
	}
  }
  
  render() {
    return this.card();
  }
}

export default CardComponent;
