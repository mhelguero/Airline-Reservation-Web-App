import React from "react";
import { useEffect, useState } from "react";
import SelectSeatType from "./SelectSeatType";
import SelectSeats from "./SelectSeats";

const SeatSelection = ({ flight }) => {
  const [selectedSeats, setSelectedSeats] = useState(1);
  const handleSeatChange = (e) => {
    setSelectedSeats(parseInt(e.target.value));
  };

  const [seatType, setSeatType] = useState("first_class");
  const handleSeatTypeChange = (e) => {
    setSeatType(e.target.value);
  };

  return (
    <div className="seat-selection">
      <div className="form-group">
        <SelectSeatType
          seatType={seatType}
          setSeatType={setSeatType}
          handleSeatTypeChange={handleSeatTypeChange}
        />
        <SelectSeats
          seatType={seatType}
          selectedSeats={selectedSeats}
          handleSeatChange={handleSeatChange}
          flight={flight}
        />
      </div>
    </div>
  );
};

export default SeatSelection;
