import React, { Component } from "react";
import { Button, Card } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import "./card.scss"
import moment from "moment";


class CardComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick = (path, e) => {
		e.stopPropagation();
		this.nextPath(path);
	};

	nextPath(path) {
		this.props.history.push(path);
	}

	card() {
		//Object.keys(this.props)[0] retourne le premier élément du props
		switch (Object.keys(this.props)[0]) {
			case "concert":
				return (
					<Card>
						<div>
							<Card.Img src={this.props.concert.affiche} />
						</div>

						<Card.Body
							as={Link}
							to={"/concert/id=" + this.props.concert.id}
						>
							<Card.Title>
								{this.props.concert.artistName}
							</Card.Title>
							<Card.Text>
                {moment(this.props.concert.date).format('DD-MM-YYYY')}
							</Card.Text>
							{/*<Card.Text>
							{new Intl.DateTimeFormat("fr-FR", {
								year: "numeric",
								month: "long",
								day: "2-digit",
							}).format(this.props.concert.date)}
						</Card.Text>*/}
							<Button
								variant="primary"
								as={Link}
								to={"/scheduled"}
							>
								Réserver
							</Button>
						</Card.Body>
					</Card>
				);
			case "article":
				return (
					<Card>
						<div>
							<Card.Img src={this.props.article.image} />
						</div>

						<Card.Body>
							<Card.Title>{this.props.article.title}</Card.Title>
							<Card.Text>
								{this.props.article.description}
							</Card.Text>
							<Button variant="primary">En savoir plus</Button>
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
