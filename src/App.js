import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Results from "./Results";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/results/:destination">
              <Results />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
