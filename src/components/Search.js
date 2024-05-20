import React from "react";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import DisplayFlights from "./DisplayFlights";

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
    <div className="container mt-5">
      <h1>{title}</h1>
      <form
        action="/search"
        method="get"
        onSubmit={handleSubmit}
        class="search-form">
        <div className="mb-4">
          <h3>{description}</h3>
        </div>
        <div className="mb-3">
          <label htmlFor="destination" class="form-label">
            Destination:
          </label>
          <input
            type="text"
            name="destination"
            placeholder="Search..."
            class="destination-input"
          />
          <button class="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
      {isPending && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {flights && (
        <DisplayFlights
          isBookedFlight={false}
          title="Results"
          flights={flights}
        />
      )}
    </div>
  );
};

export default Search;
