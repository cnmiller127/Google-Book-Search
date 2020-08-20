import React from "react";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Saved from "./pages/Saved";
import "./style.css";

function App() {
  return (
  <Router>
    <div>
    <Nav />
        <Switch>
          <Route exact path = {"/" || "/searchbooks"}>
            <Search />
          </Route>
          <Route exact path = {"/mylibrary"}>
            <Saved />
          </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;

