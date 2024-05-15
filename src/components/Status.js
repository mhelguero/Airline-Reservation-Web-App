import useFetch from "./useFetch";
import React from "react";

const Status = () => {
  const {
    data: flights,
    isPending,
    error,
  } = useFetch("http://localhost:4000/status");

  return (
    <div className="status">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {flights && (
        <div className="allFlights">
          <h1>Current Flights Status</h1>
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

export default Status;
