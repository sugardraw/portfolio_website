import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path='/cocktailApp' component={() => window.location = 'http://www.cocktail-app.sugardraw.de/'}/>
          <Route path='/reactThree' component={() => window.location = 'http://www.react-threejs.sugardraw.de/'}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
