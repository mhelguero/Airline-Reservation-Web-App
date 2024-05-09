import BlogList from "./BlogList";
import usefetch from "./useFetch";
import React from "react";

const Home = () => {
  const {data: blogs, isPending, error} = usefetch('http://localhost:8000/blogs');



  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
