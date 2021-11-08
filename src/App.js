import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Restaurantes from "./Components/Restaurantes";
import RestauranteDetalhe from "./Components/RestauranteDetalhe";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/restaurante/:idrestaurante">
            <RestauranteDetalhe />
          </Route>
          <Route path="/:page">
            <Restaurantes />
          </Route>
          <Route path="/">
            <Restaurantes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
