import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path='/CocktailApp' component={() => window.location = 'http://www.cocktail-app.sugardraw.de/'} />
          <Route path='/Git-CocktailApp' component={() => window.location = 'https://github.com/sugardraw/cocktail-app'} />
          <Route path='/ReactThree' component={() => window.location = 'http://www.react-threejs.sugardraw.de/'} />
          <Route path='/Git-ReactThree' component={() => window.location = 'https://github.com/sugardraw/React-ThreeJS'} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
