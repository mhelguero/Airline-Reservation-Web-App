import React, { useState } from "react";
import DisplayBookingForms from "./DisplayBookingForms";
import SeatSelection from "./SeatSelection";

const BookingForms = ({ flight }) => {
  const parameters = ["name", "phoneNumber", "email", "cardNumber"];

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
      <form onSubmit={handleSubmit}>
        {/* input forms */}
        <DisplayBookingForms parameters={parameters} />

        {/* dropdown menu for seats */}
        <SeatSelection flight={flight} />
      </form>
      <button className="btn btn-primary" type="submit">Book Seats</button>
    </div>
  );
};

export default BookingForms;
