import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import CardComponent  from "/Users/oiseaupython/Dev/Concert/assets/component/card-component/card.js"
import axios from 'axios';
import "./accueil.scss"

class Accueil extends Component {
    /*state = {
        articles: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/articles/1`)
            .then(res => {
                const articles = res.data;
                this.setState({ articles });
            })
    }*/

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
                {/*<ul>
                    {this.state.articles.map(article => <li>{article.description}</li>)}
                </ul>*/}
                <div className="accueilWrapper">
                    <h2>PROCHAINEMENT DANS NOS SALLES</h2>
                    <CardComponent/>
                </div>
			</div>
		);
	}
}

export default Accueil;
