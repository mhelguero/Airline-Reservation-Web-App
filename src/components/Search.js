import React from "react";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";

const Search = ({ title, description }) => {
  const [destination, setDestination] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (destination) {
      setUrl(`http://localhost:4000/search?destination=${destination}`);
    }
  }, [destination]);

  const { data: flights, isPending, error } = useFetch(url);

  const handleSubmit = (e) => {
    setDestination(e.target.elements.destination.value);
    e.preventDefault();
  };

  return (
    <div className="search">
      <h1>{title}</h1>
      <form action="/search" method="get" onSubmit={handleSubmit}>
        <h3>{description}</h3>
        <input type="text" name="destination" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      {isPending && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {flights && (
        <div>
          <h2>Results</h2>
          <ul>
            {Object.keys(flights).map((outerKey) => (
              <li key={outerKey}>
                <strong>{outerKey}</strong>
                <ul>
                  {Object.keys(flights[outerKey]).map((innerKey) => (
                    <li key={innerKey}>
                      {innerKey}: {flights[outerKey][innerKey]}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
