// resources
import React from "react";
import {Route, HashRouter, Switch, Redirect} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
// components
import Header from "./components/header";
// pages
import HomePage from "./pages/home/homePage";
import UICardsPage from "./pages/ui/cards/uiCardsPage";
import UISimpleCardPage from "./pages/ui/cards/details/uiSimpleCardPage";
import UIAirbnbCardPage from "./pages/ui/cards/details/uiAirbnbCardPage";

class BrowserRouter extends React.Component {

  render() {
    return (
      <HashRouter history={this.props.history}>
        <Switch>
          <Route component={Header}/>
        </Switch>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/ui/cards" component={UICardsPage}/>
          <Route exact path="/ui/cards/simpleCard" component={UISimpleCardPage}/>
          <Route exact path="/ui/cards/airbnbCard" component={UIAirbnbCardPage}/>
          <Redirect to="/notfound"/>
        </Switch>
        <Switch>
          <Route exact path="/notfound" component={NotFoundPage}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default BrowserRouter;
