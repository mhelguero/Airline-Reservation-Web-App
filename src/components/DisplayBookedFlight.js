import React from "react";
const DisplayBookedFlight = ({ title, flight }) => {
  if (flight) console.log(flight);
  return (
    <div className="booked-flight-display">
      {flight &&
       Object.keys(flight).map((outerKey) => (
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
      ))
    }
    </div>
  );
};

export default DisplayBookedFlight;
