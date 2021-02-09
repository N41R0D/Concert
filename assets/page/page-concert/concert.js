import React, { Component, useEffect, useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import CardComponent from "../../component/card-component/card";
import "./concert.scss";

const Concert = () => {

	return (
		<div>
			<div className="header">
				<div className="imgContainer"></div>
				<div className="infoContainer">
					<p>test</p>
				</div>
			</div>
			<div className="dateTab">
				<table id="myTable">
					<tr class="tabHeader">
						<th>Date</th>
						<th>Lieu</th>
						<th>Heure</th>
						<th>Ouverture</th>
						<th>Catégorie de tarif</th>
						<th>Tarifs</th>
						<th></th>
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
						frameborder="0"
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
};

export default Concert;
