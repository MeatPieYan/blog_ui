import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Others from "./components/pages/Others";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="about" name="about" component={About}></Route>
      <Route path="others" name="others" component={Others}></Route>
    </Route>
  </Router>, app);
