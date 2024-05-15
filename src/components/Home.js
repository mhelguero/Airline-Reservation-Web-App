import useFetch from "./useFetch";
import Search from "./Search";
import Results from "./Results";
import React from "react";

const Home = () => {
  const destination = false;
  return (
    <div className="home">
      {!destination && (
        <Search
          title="Available Destinations (HOU, ORD, JFK, LAX, MIA)"
          description="Discover new experiences"
        />
      )}
    </div>
  );
};

export default Home;
