import React from "react";
const DisplayBookedFlight = ({ flight }) => {
  return (
    <div className="booked-flight-display">
      {Object.keys(flight).map((outerKey) => (
        <li key={outerKey}>
          <strong>{outerKey}</strong>
          <ul>
            {Object.keys(flight[outerKey]).map((innerKey) => (
              <li key={innerKey}>
                {innerKey}: {flight[outerKey][innerKey]}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </div>
  );
};

export default DisplayBookedFlight;
