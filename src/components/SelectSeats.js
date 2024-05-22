import React from "react";

const SelectSeats = ({seatType, selectedSeats, handleSeatChange, flight}) => {
  return (
    <div className="select-seats">
      <label htmlFor="seatSelect">Select Number of Seats:</label>
      <select
        id="seatSelect"
        className="black-text"
        value={selectedSeats}
        onChange={handleSeatChange}>
        {flight &&
          [...Array(flight[0][`${seatType}_seats_available`]).keys()].map(
            (seat) => (
              <option className="black-text" key={seat + 1} value={seat + 1}>
                {seat + 1}
              </option>
            )
          )}
      </select>
    </div>
  );
};

export default SelectSeats;
