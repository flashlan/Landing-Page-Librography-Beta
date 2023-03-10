import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import Prices from "./components/Prices"
import BetaForm from "./components/BetaForm";
/* import Footer from "./components/Footer" */
import Features from "./components/Features";
import Subscribe from "./components/Subscribe";
import Thanks from "./components/Thanks";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/price" component={Prices} />
        <Route exact path="/beta" component={BetaForm} />
        <Route exact path="/subscribe" component={Subscribe} />
        <Route exact path="/thanks/:name" component={Thanks} />
    </Switch>
)

export default Routes;

