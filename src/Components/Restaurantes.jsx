import './../App.css';
import api from "./../services/api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from './../assets/logo.svg';

const Restaurantes = () => {
    const [userData, setUserData] = useState([]);
    const [pages, setPages] = useState([]);
    useEffect(() => {
      api
        .get("/api/v1/restaurants?page=1&limit=10")
        .then((response) => {
          setUserData(response.data.data);

          let numPages = response.data.pagination;
          let totalPaginas = (numPages.total/ numPages.per_page);
          let paginacao = [];
          for(let i=1; i<= totalPaginas; i++){
            paginacao.push(i);
          }
          setPages(paginacao);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    let pagination = pages.map( (item,index)=>{
      return <li class="page-item"><a class="page-link" href="#">{item}</a></li>
    });
    //   return <div key={index}>
    //       
    //     </div>
    // });

    
    let itemList = userData.map((item,index)=>{
      return <div key={index} class="col">
        <Link to={"restaurante/"+item.id} style={{textDecoration: 'none'} }>
          <div class="p-3 border bg-light">
            <img src={item.image} class="img-fluid" alt="fundo"/>
            <div class="text-inf-dir">{item.name}</div>
          </div>
        </Link>
      </div>
    })
    const divStyle = {
      backgroundImage: `url('https://i.pinimg.com/originals/94/3b/53/943b5303f8b5c15e21b28add5aee1600.jpg')`,
      maxHeight: '250px',
      objectFit: 'cover',
      objectPosition: '20% 85%',
    };
    const mainTitle = {
      color: '#3e4244',
      fontSize: '2rem',
      fontWeight: '800',
      textAlign: 'left'
    };
    const mainSubtitle = {
      color: 'rgb(88 88 88)',
      fontSize: '1.2rem',
      fontWeight: '400'
    }
  

	  return (
      <div>
        <div 
          class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
          style={divStyle}
        >
          <div class="container p-3" >
            <div class="row row-cols-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-xs-2 g-2 g-lg-2">
              <div class="col">
                <Logo />

              </div>
              <div class="col" style={ {textAlign: 'left'} }>
                <div style={mainTitle}>
                  Descubra novos sabores
                </div >
                <div style={mainSubtitle}>
                  Aqui eu converso com você sobre a
                </div>
                <div style={mainSubtitle}>
                  nossa proposta
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container p-3" style={{marginTop: 2+ 'em'}}>
          <div class="row row-cols-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-xs-2 g-2 g-lg-2">
            <div class="col" style={mainTitle}>
              Restaurantes
            </div>
          </div>
        </div>  

        <div class="container p-3" >
          <div class="row row-cols-1 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-xs-1 g-2 g-lg-1">
            {itemList}
          </div>
        </div>
        <div style={ {marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center'} }>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              {pagination}
            </ul>
          </nav>
        </div>
      </div>
	);
};

export default Restaurantes;