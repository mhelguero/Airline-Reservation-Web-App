import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Create from "./components/Create.js";
import BookFlight from "./components/BookFlight.js";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound.js";
import AllFlights from "./components/AllFlights.js";

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
            <Route exact path="/all-flights">
              <AllFlights />
            </Route>
            <Route exact path="/book-flight/:flight_id">
              <BookFlight />
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
