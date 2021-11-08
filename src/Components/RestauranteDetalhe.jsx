import './../App.css';
import React, { useEffect, useState } from "react";
import api from "./../services/api";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const RestauranteDetalhe = () => {
	const { idrestaurante } = useParams();
	const [userData, setUserData] = useState([]);
	let history = useHistory();

    useEffect(() => {
      api
        .get("/api/v1/restaurants/"+idrestaurante)
        .then((response) => {
          console.log("Dados", response.data.data);
          console.log("Paginação", response.data.pagination);
          setUserData(response.data.data);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);


	return (
		<div>
			<button onClick={() => history.goBack()}>Go Back</button>
			<div>{userData.name}</div>
			<div>{userData.telephone}</div>
			<div>{userData.website}</div>
			
			<div>Descrição</div>
			<div>{userData.description}</div>
			<div>Faixa de preço</div>
			<div>{userData.price_range}</div>
			<div>Horários de funcionamento</div>
			<div>{userData.opening_hours}</div>
			<div>Formas de pagamento</div>
			<div>{userData.payment_methods}</div>
		</div>

	);
};

export default RestauranteDetalhe;
