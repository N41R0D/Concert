import React, { Component, useEffect, useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import CardComponent from "../../component/card-component/card";
import axios from "axios";
import "./concert.scss";

const Concert = () => {
  const [isConcert, setIsConcert] = useState(false);
  const [apiData, setApiData] = useState({ concert: null });

  const getConcertById = (id) => {
    var url = "https://127.0.0.1:8000/api/concerts/" + id;
    useEffect(async () => {
      axios
			.get(url, {
				headers: {
					Accept: "application/json",
				},
			})
			.then((response) => {
				console.log(response.data);
				setApiData({ concert: response.data });
				setIsConcert(true);
			})
			.catch((error) => {
				console.log(error);
			});
		}, []);
  }

  function getIdUrl() {
    var url2 = window.location.href; // or window.location.href for current url
    var captured = /id=([^&]+)/.exec(url2)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : "myDefaultValue";
    console.log(result);
    getConcertById(result)
  }

  return (
		<div>
			{getIdUrl()}
			{!isConcert ? (
				<div>Chargement ...</div>
			) : (
				<div>
					{console.log(apiData.concert.id)}
					{/*apiData.lieu.map((location) => {
						return (
							<div className="header">
								<div className="imgContainer"></div>
								<div className="infoContainer">
									<p>{apiData.id}</p>
								</div>
							</div>
						);
					})*/}
				</div>
			)}
			<div className="dateTab">
				<table id="myTable">
					<thead className="tabHeader">
						<tr>
							<th>Date</th>
							<th>Lieu</th>
							<th>Heure</th>
							<th>Ouverture</th>
							<th>Catégorie de tarif</th>
							<th>Tarifs</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>Eletrical Engineer</td>
							<td>futterkiste@gmail.com</td>
							<td>+49 92992924</td>
							<td>Germany</td>
							<td>Frankfurt</td>
							<td>
								<Button variant="primary">Réserver</Button>
							</td>
						</tr>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>Eletrical Engineer</td>
							<td>futterkiste@gmail.com</td>
							<td>+49 92992924</td>
							<td>Germany</td>
							<td>Frankfurt</td>
							<td>
								<Button variant="primary">Réserver</Button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="presentationContainer">
				<div className="presentation">
					<h3>Présentation de l'artiste</h3>
					<p>blablabla</p>
				</div>
				<div className="player">
					<iframe
						src="https://open.spotify.com/embed/artist/7x83XhcMbOTl1UdYsPTuZM"
						width="300"
						height="270"
						frameBorder="0"
						allowtransparency="true"
						allow="encrypted-media"
					></iframe>
				</div>
			</div>
			<div className="concertSlider">
				<h2>À ne pas manquer</h2>
				<div className="slider"></div>
			</div>
		</div>
  );
}

export default Concert;
