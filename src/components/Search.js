import React from "react";
const Search = ({ title, description }) => {
  return (
    <div className="search">
      <h1>{title}</h1>
      <form action="/search" method="get">
        <h3>{description}</h3>
        <input type="text" name="destination" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
