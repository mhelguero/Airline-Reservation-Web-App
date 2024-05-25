import React from "react";
import { useEffect, useState } from "react";
import SelectSeatType from "./SelectSeatType";
import SelectSeats from "./SelectSeats";

const SeatSelection = ({ flight }) => {
  const [selectedSeats, setSelectedSeats] = useState(1);
  const [seatType, setSeatType] = useState("first_class");
  const [totalCost, setTotalCost] = useState(0);

  const handleSeatChange = (e) => {
    setSelectedSeats(parseInt(e.target.value));
  };

  const handleSeatTypeChange = (e) => {
    setSeatType(e.target.value);
  };

  useEffect(() => {
    const seatPrices = { first_class: 100, economy: 50 };
    setTotalCost(seatPrices[seatType] * selectedSeats);
  }, [seatType, selectedSeats]);

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
      <div className="total-cost mt-3">
        <h3>Total Cost: ${totalCost}</h3>
      </div>
    </div>
  );
};

export default SeatSelection;
