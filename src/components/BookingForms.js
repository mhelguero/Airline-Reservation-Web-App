import React, { useState } from "react";
import DisplayBookingForms from "./DisplayBookingForms"
const BookingForms = ({ flight }) => {
  const parameters = ["name", "phoneNumber", "email", "cardNumber"];
  const [selectedSeats, setSelectedSeats] = useState(1);
  const [boardingPasses, setBoardingPasses] = useState([]);

  const handleSeatChange = (e) => {
    setSelectedSeats(parseInt(e.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // fetch("http://localhost:4000/customer", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(inputData),
    // });
  };
  return (
    <div className="booking-forms">
      {/* input forms */}
      <form onSubmit={handleSubmit}>
        <DisplayBookingForms parameters={parameters} />
      </form>

      {/* seat selection */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="seatSelect">Select Number of Seats:</label>
        <select
          id="seatSelect"
          value={selectedSeats}
          onChange={handleSeatChange}>
          {flight &&
            [...Array(flight[0].economy_seats_available).keys()].map((seat) => (
              <option key={seat + 1} value={seat + 1}>
                {seat + 1}
              </option>
            ))}
        </select>
        <button type="submit">Book Seats</button>
      </form>
    </div>
  );
};

export default BookingForms;
