import React from "react";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Router>
          <Route path = {Search} />
      </Router>
    </div>
  );
}

export default App;
