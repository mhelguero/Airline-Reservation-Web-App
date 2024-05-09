import usefetch from "./useFetch";
import Search from "./Search";
import Results from "./Results";
import React from "react";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = usefetch("http://localhost:8000/blogs");
  const destination = false;
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {!destination && (
        <Search
          title="Available Destinations (HOU, ORD, JFK, LAX, MIA)"
          description="Discover new experiences"
        />
      )}
      {isPending && <div>Loading...</div>}
      {/* {blogs && <BlogList blogs={blogs} />} */}
    </div>
  );
};

export default Home;
