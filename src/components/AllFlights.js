import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";

function AllFlights() {
  const {
    data: flights,
    isPending,
    error,
  } = useFetch("http://localhost:4000/all-flights");


  return (
    <div className="allFlights">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {flights && (
        <div className="allFlights">
          <h1>Flight List</h1>
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
}

export default AllFlights;
