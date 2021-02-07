import React, { Component, useEffect, useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import CardComponent from "../../component/card-component/card";
import Footer from "../../component/footer-component/Footer";
import axios from "axios";
import "./programmation.scss";
import { useLocation } from "react-router";

const Programmation = () => {
    const [apiData, setApiData] = useState({ lieu: null, concert: null})
    //const [isLoading, setIsLoading] = useState(false)
    const [isData, setIsData] = useState(false)

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
				})
			]) 
			.then(
        axios.spread((dataConcerts, dataLieus) => {
            setApiData({
              lieu: dataLieus.data,
              concert: dataConcerts.data,
            });
            setIsData(true);
            console.log("la data est prête");
				  })
      ); 
    }, []
    );

    
    
	return (
		<div>
			<div className="page-header">
				<h1>programmation</h1>
			</div>
			<div className="position">
				<p>Lieu : </p>
				{!isData ? (
					<div>Chargement ...</div>
				) : (
					<ul>
						{apiData.lieu.map((location) => {
							return <li key={location.id}>{location.name}</li>;
						})}
					</ul>
				)}
			</div>
			<div className="musicCategory">
				<p>Catégorie de musique : </p>
				{!isData ? (
					<div>Chargement ...</div>
				) : (
					<ul>
						{apiData.concert.map((concerts) => {
							return <li key={concerts.id}>{concerts.artistName}</li>;
						})}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Programmation;
;
