import React from "react";
import DisplayFlights from "./DisplayFlights";
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
      {flights && <DisplayFlights title="All Flights" flights={flights} />}

    </div>
  );
}

export default AllFlights;
