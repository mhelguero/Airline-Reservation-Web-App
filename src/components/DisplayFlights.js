import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DisplayFlights = ({ title, flights, isBookedFlight }) => {
  const displayFlightDetails = (flight) => (
    <ul key={flight.flight_id}>
      {Object.keys(flights).map((outerKey) => (
        <li key={outerKey}>
          <strong>{outerKey}</strong>
          <ul>
            {Object.keys(flights[outerKey]).map((innerKey) => (
              <li key={innerKey}>
                {innerKey}: {flights[outerKey][innerKey]}
              </li>
            ))}
            {!isBookedFlight && (
              <Link to={`/book-flight/${flight.flight_id}`}>
                <button>Book Flight</button>
              </Link>
            )}
          </ul>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={isBookedFlight ? "booked-flight-display" : "flight-display"}>
      <h2>
        {title}
        {isBookedFlight && title === "Flight Number " && flights[0]?.flight_no}
      </h2>
      <ul>
        {flights.map((flight) => (
          <li key={`flight-${flight.flight_id}`}>
            {displayFlightDetails(flight)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayFlights;
