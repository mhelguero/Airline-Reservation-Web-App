import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DisplayFlights = ({ title, flights }) => {
  return (
    <div className="flight-display">
      <ul>
        <h2>{title}</h2>
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
      </ul>
    </div>
  );
};

export default DisplayFlights;
