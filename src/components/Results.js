import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Results = ({ destination }) => {
  return (
    <div className="blog-list">
      hi
      {/* TODO: receive destination and use fetch to return results */}
      {/* {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>          
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.id}</p>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))} */}
    </div>
  );
};
export default Results;
