import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import BookFlight from "./components/BookFlight.js";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound.js";
import AllFlights from "./components/AllFlights.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />            
            <Route exact path="/all-flights" element={<AllFlights />} />                        
            <Route exact path="/book-flight/:flight_id" element={<BookFlight />} />              
            <Route path="*" element={<NotFound />} />              
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
