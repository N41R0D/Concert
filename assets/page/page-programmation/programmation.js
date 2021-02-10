import { useForm } from "react-hook-form";
import React, { Component, useEffect, useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import CardComponent from "../../component/card-component/card";
import Footer from "../../component/footer-component/Footer";
import axios from "axios";
import "./programmation.scss";
import { useLocation } from "react-router";

const Programmation = (props) => {
  const { register, watch } = useForm();
  const [apiData, setApiData] = useState({ lieu: null, concert: null})
  const [apiConcert, setConcert] = useState({ concertNum: null})
  const [isData, setIsData] = useState(false)
  const [isConcert, setIsConcert] = useState(false);
  const lieux = watch("locations", props.locations);
  const genres = watch("musicCat", props.musicCat)


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

  const progrApiResult = (cool) => {
    for (let index = 0; index < cool.length; index++) {
      var url = "https://127.0.0.1:8000" + cool[index];
      useEffect(async () => {
			axios
				.get(url, {
					headers: {
						Accept: "application/json",
					},
				})
				.then((response) => {
					//console.log(response.data);
					setConcert({ concertNum: response.data });
					concertList.push({ concertNum: response.data });
					setIsConcert(true);
				})
				.catch((error) => {
					console.log(error);
				});
		}, []);
    }
  }

  function locationConcerts() {
    for (let i = 1; i < 6; i++) {
      lieux == i && (
        apiData.lieu.map((concert) => {
          concert.id == i ? concertLieu.push(concert.concerts) : console.log("osef")
        })
      )
    }
  }

  let concertLieu = []
  let concertList = [];
    
    
	return (
		<div>
			<div className="page-header">
				<h1>programmation</h1>
			</div>
			<div className="position">
				<div className="first-col">
					<p>Lieu : </p>
				</div>
				<div className="second-col">
					{!isData ? (
						<div>Chargement ...</div>
					) : (
						<div>
                {apiData.lieu.map((location) => {
								return (
									<div>
										<input
											type="radio"
											name="locations"
											value={location.id}
											ref={register}
										/>
										{location.name}
									</div>
								);
							})}
							{locationConcerts()}
						</div>
					)}
				</div>
			</div>
			<div className="musicCategory">
				<div className="first-col">
					<p>Catégorie de musique : </p>
				</div>
				<div className="second-col">
					<div>
						<input
							type="radio"
							name="musicCat"
							value={0}
							ref={register}
						/>
						Pop
						<input
							type="radio"
							name="musicCat"
							value={1}
							ref={register}
						/>
						Rock
						<input
							type="radio"
							name="musicCat"
							value={3}
							ref={register}
						/>
						Métal
						<input
							type="radio"
							name="musicCat"
							value={4}
							ref={register}
						/>
						Rap
						<input
							type="radio"
							name="musicCat"
							value={5}
							ref={register}
						/>
						Électro
					</div>
					{!isData ? (
						<div>Chargement ...</div>
					) : (
						<div>
							{genres == 0 && (
								<div>
									<p>pop</p>
								</div>
							)}
							{genres == 1 && (
								<div>
									<p>rock</p>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			<div className="programmationResult">
				{!isConcert ? (
					<div>Chargement ...</div>
        ) : (
            console.log(concertList)
					/*apiConcert.concertNum.map((concert) => {
						return (
							<CardComponent key={concert.id} concert={concert} />
						);
					})*/
				)}
				{concertLieu.map((concertTab) => {
					// Ligne à décommenter pour appeler les concerts du lieux, mais probleme, ça boucle à l'infini
					//progrApiResult(concertTab);
				})}
			</div>
		</div>
	);
};

export default Programmation;
;