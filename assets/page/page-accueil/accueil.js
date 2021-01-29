import React, { Component, useEffect, useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import CardComponent from "../../component/card-component/card";
import Footer from "../../component/footer-component/Footer";
import axios from 'axios';
import "./accueil.scss"

const Accueil = () => {
    const [listArt, setListArt] = useState([]);
    
    useEffect(() => {
        const url = "http://127.0.0.1:8000/api/articles";
        axios.get(url, {
            headers: {
            'Accept': 'application/json'
          }}
            )
        .then((response) =>{
            console.log(response.data);
            setListArt(response.data);
            console.log(listArt);
        })
        .catch((error) => { console.log(error)})
    },[])

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
						{listArt.slice(0, 8).map((article) => {
							return (
								<CardComponent
									key={article.id}
									article={article}
								/>
							);
						})}
					</div>
					<Button variant="outline-primary">Primary</Button>{" "}
				</div>
				<div className="actualites">
					<h2>actualités</h2>
					<div className="cardWrapper">
						{listArt.slice(0, 4).map((article) => {
							return (
								<CardComponent
									key={article.id}
									article={article}
								/>
							);
						})}
					</div>
				</div>
				<div className="actualites">
					<h2>des salles à votre disposition</h2>
					<div className="cardWrapper">
						{listArt.slice(0, 4).map((article) => {
							return (
								<CardComponent
									key={article.id}
									article={article}
								/>
							);
						})}
					</div>
				</div>
            </div>
            <Footer/>
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
