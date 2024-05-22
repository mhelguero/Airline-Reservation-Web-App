import React from "react";
const SelectSeatType = ({seatType, setSeatType, handleSeatTypeChange}) => {
   
  return (
    <div className="select-seat-type">
      <label htmlFor="seatTypeSelect">Select Seat Type:</label>
      <select
        id="seatTypeSelect"
        className="black-text"
        value={seatType}
        onChange={handleSeatTypeChange}>
        <option className="black-text" value="first_class">
          First-Class
        </option>
        <option className="black-text" value="economy">
          Economy
        </option>
      </select>
    </div>
  );
};

export default SelectSeatType;
