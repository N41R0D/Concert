import React, { Component, useEffect, useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import CardComponent from "../../component/card-component/card";
import axios from 'axios';
import "./accueil.scss"

const Accueil = () => {
  const [apiData, setApiData] = useState({ lieu: null, concert: null, article: null });
	//const [isLoading, setIsLoading] = useState(false)
	const [isData, setIsData] = useState(false);

	useEffect(() => {
		//setIsLoading(true);
		axios
			.all([
				axios.get("https://127.0.0.1:8000/api/concerts", {
					headers: {
						Accept: "application/json",
					},
				}),
				axios.get("https://127.0.0.1:8000/api/lieus", {
					headers: {
						Accept: "application/json",
					},
				}),
				axios.get("https://127.0.0.1:8000/api/articles", {
					headers: {
						Accept: "application/json",
					},
				}),
			])
			.then(
				axios.spread((dataConcerts, dataLieus, dataArticles) => {
					setApiData({
						lieu: dataLieus.data,
            concert: dataConcerts.data,
            article: dataArticles.data
					});
					setIsData(true);
					console.log("la data est prête");
				})
			);
	}, []);

    return (
		<div>
			<Carousel>
				<Carousel.Item interval={1000} className="test">
					<div></div>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500} className="test">
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="test">
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="accueilWrapper">
				<div className="nextConcert">
					<h2>prochainement dans nos salles</h2>
					<div className="cardWrapper">
						{!isData ? (
							<div>Chargement ...</div>
						) : (
							apiData.concert.slice(0, 8).map((concert) => {
								return (
									<CardComponent
										key={concert.id}
										concert={concert}
									/>
								);
							})
						)}
					</div>
					<Button className="accueilButton" variant="outline-primary">
						voir toute la programmation
					</Button>{" "}
				</div>
				<div className="actualites">
					<h2>actualités</h2>
					<div className="cardWrapper">
						{!isData ? (
							<div>Chargement ...</div>
						) : (
							apiData.article.slice(0, 8).map((article) => {
								return (
									<CardComponent
										key={article.id}
										article={article}
									/>
								);
							})
						)}
					</div>
					<Button className="accueilButton" variant="outline-primary">
						voir toutes les actualités
					</Button>{" "}
				</div>
				<div className="infoSalle">
					<h2>des salles à votre disposition</h2>
					<div className="cardWrapper">
						<p>blablabla</p>
						<Button
							className="accueilButton"
							variant="outline-primary"
						>
							privatiser
						</Button>{" "}
					</div>
				</div>
			</div>
		</div>
	);
}

/*
class Accueil extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/articles/1`)
            .then(res => {
                const articles = res.data['hydra:member'];
                this.setState({ articles });
            })
    }

    render() {
		return (
			<div>
				<Carousel>
                    <Carousel.Item interval={1000} className="test">
                        <div></div>
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500} className="test">
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="test"> 
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <ul>
                    {this.state.articles.map(article => <li>{article.content}</li>)}
                </ul>
                <div className="accueilWrapper">
                    <h2>PROCHAINEMENT DANS NOS SALLES</h2>
                    <CardComponent/>
                </div>
			</div>
		);
	}
}
*/
export default Accueil;
