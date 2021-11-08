import './../App.css';
import React, { useEffect, useState } from "react";
import api from "./../services/api";
import { useHistory, useParams } from "react-router-dom";

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

	const divStyle = {
		backgroundImage: `linear-gradient( rgb(0 0 0 / 82%), rgb(5 7 10 / 92%) ),url(https://previews.123rf.com/images/balabolka/balabolka1508/balabolka150800015/43496968-foods-doodles-hand-drawn-chalkboard-symbols-and-objects.jpg)`,
    height: '300px',
		objectFit: 'cover',
		objectPosition: '20% 85%',
  };


	return (
		<div>
			<div class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white" style={divStyle}>
        <div class="container p-3" >
          <div class="row row-cols-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-xs-3 g-2 g-lg-2">
            <div class="col">
              <button type="button" class="btn btn-light" onClick={() => history.goBack()}>Voltar</button>
            </div>
            <div class="col">
              <div class="row row-cols-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-xs-2 g-2 g-lg-2">
                <div class="col">
                  <img style={ {borderRadius: '50%', width: '180px'} }  src={userData.logo} />
                </div>
                <div class="col" style={ {textAlign: 'left'}}>
                  <div style= {{ fontSize: '2em', fontWeight: 800}} >{userData.name}</div>
                  <div style= {{ fontSize: '1em', fontWeight: 800}} >{userData.telephone}</div>
                  <div style= {{ fontSize: '1em', fontWeight: 800}} >{userData.website}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style={{ marginTop: '100px', position: 'absolute'}}>
          <div class="col-2"></div>
            <div class="col-8" style={{textAlign: 'left'}}>
              <div style={{color:'#000'}}>Descrição</div>
              <div style={{color: 'rgb(75 78 92)', fontSize: '1.4em',margin: '1em 0'}}>{userData.description}</div>
              <div style={{color:'#000'}}>Faixa de preço</div>
              <div style={{color: 'rgb(75 78 92)', fontSize: '1.4em',margin: '1em 0'}}>{userData.price_range}</div>
              <div style={{color:'#000'}}>Horários de funcionamento</div>
              <div style={{color: 'rgb(75 78 92)', fontSize: '1em',margin: '0.4em 0'}}>{userData.opening_hours}</div>
              <div style={{color:'#000'}}>Formas de pagamento</div>
              <div style={{color: 'rgb(75 78 92)', fontSize: '1em',margin: '0.4em 0'}}>{userData.payment_methods}</div>  
            </div>
          </div>
        </div>
      </div>
		</div>

	);
};

export default RestauranteDetalhe;
