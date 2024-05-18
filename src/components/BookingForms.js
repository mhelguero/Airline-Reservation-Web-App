import React, { useState } from "react";

const BookingForms = ({flight}) => {
  const [inputData, setInputData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    cardNumber: "",
  });
  const [selectedSeats, setSelectedSeats] = useState(1);
  const [boardingPasses, setBoardingPasses] = useState([]);

  const handleSeatChange = (e) => {
    setSelectedSeats(parseInt(e.target.value));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
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
    // TODO: form design component
    <div className="booking-forms">
      <form onSubmit={handleSubmit}>
        <div className="booking-form">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="booking-form">
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={inputData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="booking-form">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="booking-form">
          <label htmlFor="cardNumber">Card Number: </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={inputData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
      </form>
       <form onSubmit={handleSubmit}>
        <label htmlFor="seatSelect">Select Number of Seats:</label>
        <select id="seatSelect" value={selectedSeats} onChange={handleSeatChange}>
          {flight && [...Array(flight[0].economy_seats_available).keys()].map(seat => (
            <option key={seat + 1} value={seat + 1}>{seat + 1}</option>
          ))}
        </select>
        <button type="submit">Book Seats</button>
      </form>
    </div>
  );
};

export default BookingForms;
