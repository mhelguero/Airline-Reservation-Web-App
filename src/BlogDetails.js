import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const { id } = useParams();
  console.log(id);
  const history = useHistory();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs?id=" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog[0].title}</h2>
          <p>Written by {blog[0].author}</p>
          <div className="blog-body">{blog[0].body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )} 
    </div>
  );
};

export default BlogDetails;
