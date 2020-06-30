// resources
import React from "react";
import {Route, HashRouter, Switch} from "react-router-dom";
// components
import Header from "./components/header";
// pages
import HomePage from "./pages/home/homePage";
import UICardsPage from "./pages/ui/cards/uiCardsPage";
import UISimpleCardPage from "./pages/ui/cards/details/uiSimpleCardPage";

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
          <Route exact path="/ui/cards/:id" component={UISimpleCardPage}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default BrowserRouter;
