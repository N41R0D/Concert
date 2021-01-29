import React, { Component, useEffect, useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import CardComponent from "../../component/card-component/card";
import Footer from "../../component/footer-component/Footer";
import axios from "axios";
import "./programmation.scss";

const Programmation = () => {
	const [listLoc, setListLoc, listConc, setListConc] = useState([]);

	useEffect(() => {
		axios
			.get("https://127.0.0.1:8000/api/lieus", {
				headers: {
					Accept: "application/json",
				},
			})
			.then((response) => {
				console.log(response.data);
				setListLoc(response.data);
				console.log(listLoc);
			})
			.catch((error) => {
				console.log(error);
			});
        axios
			.get("https://127.0.0.1:8000/api/concerts", {
				headers: {
					Accept: "application/json",
				},
			})
			.then((response) => {
				console.log(response.data);
				setListConc(response.data);
				console.log(listConc);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<div className="page-header">
				<h1>programmation</h1>
			</div>
			<div className="position">
				<p>Lieu : </p>
				<ul>
					{listLoc.map((location) => {
						return <li key={location.id}>{location.name}</li>;
					})}
				</ul>
			</div>
			<div className="musicCategory">
				<p>Catégorie de musique : </p>
				<ul>
					{listConc.map((data) => {
						return <li key={data.id}>{data.artistName}</li>;
					})}
				</ul>
			</div>
			<Footer />
		</div>
	);
};

export default Programmation;
;
