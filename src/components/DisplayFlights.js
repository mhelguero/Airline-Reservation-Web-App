import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DisplayBookedFlight from "./DisplayBookedFlight";

const DisplayFlights = ({ title, flights, isBooking }) => {
  return (
    <div className="flight-display">
      <ul>
        {(title === "Flight Number " && (
          <h2>
            {title}
            {flights[0].flight_no}
          </h2>
        )) || <h2>{title}</h2>}
        {isBooking && <DisplayBookedFlight flight={flights} />}

        {!isBooking && (
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
                  <Link to={`/book-flight/${flights[outerKey].flight_id}`}>
                    <button>Book Flight</button>
                  </Link>
                </ul>
              </li>
            ))}
          </ul>
        )}
      </ul>
    </div>
  );
};

export default DisplayFlights;
