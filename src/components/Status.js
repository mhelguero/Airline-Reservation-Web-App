import useFetch from "./useFetch";
import DisplayFlights from "./DisplayFlights";
import React from "react";

const Status = () => {
  const {
    data: flights,
    isPending,
    error,
  } = useFetch("http://localhost:4000/status");

  const flightsArray = Array.isArray(flights) ? flights : [flights];

  return (
    <div className="status">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {flights && (
        <div className="allFlights">
          <DisplayFlights title="Flights Status" flights={flightsArray} />
        </div>
      )}
    </div>
  );
};

export default Status;
