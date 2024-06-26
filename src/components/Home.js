import Search from "./Search";
import Status from "./Status";
import React from "react";

const Home = () => {
  const destination = false;
  return (
    <div className="home">
      <div className="search-section">
        {!destination && (
          <Search
            title="Discover new experiences"
            description="Available Destinations (HOU, ORD, JFK, LAX, MIA)"
          />
        )}
      </div>
      <div className="status-section">
        <Status />
      </div>
    </div>
  );
};

export default Home;
