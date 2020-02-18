import * as React from "react";
import { render } from "react-dom";
import {Route, BrowserRouter as Router} from "react-router-dom"

import App from "./App";
import FirstPage from "./pages/FirstRoute";
import SecondPage from "./pages/SecondRoute"

const rootElement = document.getElementById("root");
const app = (
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route path="/pageone" component={FirstPage}/>
      <Route path="/pagetwo" component={SecondPage}/>
    </div>
  </Router>
)
render(app, rootElement);
