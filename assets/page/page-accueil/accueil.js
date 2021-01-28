import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import CardComponent  from "../card-component/card";
import "./accueil.scss"

class Accueil extends Component {
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
                <h2>osef</h2>
                <CardComponent/>
			</div>
		);
	}
}

export default Accueil;
