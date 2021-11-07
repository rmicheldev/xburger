import './App.css';
import api from "./services/api";
import React, { useEffect, useState } from "react";


function App() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
      api
        .get("/api/v1/restaurants?page=1&limit=10")
        .then((response) => {
          console.log("Dados", response.data.data);
          console.log("Paginação", response.data.pagination);
          setUserData(response.data.data);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    
    let itemList = userData.map((item,index)=>{
      return <div key={index}>
        <div class="col">
          <div class="p-3 border bg-light">
              <img src={item.image} class="img-fluid"/>
              <div class="text-inf-dir">{item.name}</div>
          </div>
        </div>
      </div>
    })

    return (
      <div>
        <div class="header-fw">
          <img src="https://cdn.pixabay.com/photo/2018/05/13/20/21/lake-3397784_960_720.jpg" class="img-fw"/>
        </div>
        <div class="container p-3 ">
          <div class="row row-cols-1 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-xs-1 g-2 g-lg-1">
            {itemList}
          </div>
        </div>
      </div>
    );
}

export default App