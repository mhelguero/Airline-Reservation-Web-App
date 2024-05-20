import React from "react";
import { useState } from "react";

const SeatSelection = ({ flight }) => {
  const [selectedSeats, setSelectedSeats] = useState(1);

  const handleSeatChange = (e) => {
    setSelectedSeats(parseInt(e.target.value));
  };
  return (
    <div className="seat-selection">
      <label htmlFor="seatSelect">Select Number of Seats:</label>
      <select id="seatSelect" value={selectedSeats} onChange={handleSeatChange}>
        {flight &&
          [...Array(flight[0].economy_seats_available).keys()].map((seat) => (
            <option key={seat + 1} value={seat + 1}>
              {seat + 1}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SeatSelection;
