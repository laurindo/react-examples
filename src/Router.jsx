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
import UIReviewCardPage from "./pages/ui/cards/details/uiReviewCardPage";
import UIEcommerceCardPage from "./pages/ui/cards/details/uiEcommerceCardPage";

import UIListsPage from "./pages/ui/lists/uiListsPage";
import UISimpleListPage from "./pages/ui/lists/details/uiSimpleListPage";


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
          <Route exact path="/ui/cards/reviewCard" component={UIReviewCardPage}/>
          <Route exact path="/ui/cards/ecommerceCard" component={UIEcommerceCardPage}/>

          <Route exact path="/ui/lists" component={UIListsPage}/>
          <Route exact path="/ui/lists/simpleList" component={UISimpleListPage}/>


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
