import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayBookingForms from "./DisplayBookingForms";
import SeatSelection from "./SeatSelection";

const BookingForms = ({ flight }) => {
  const parameters = ["name", "phoneNumber", "email", "cardNumber"];
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    cardNumber: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();

    // make sure all fields inputted
    if (
      !inputData.name ||
      !inputData.phoneNumber ||
      !inputData.email ||
      !inputData.cardNumber
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");

        // redirect to home page after successfully booking a flight
        navigate("/"); 
      } else {
        console.log("Error submitting form");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="booking-forms mt-4">
        <form onSubmit={handleSubmit}>
          {/* input forms */}
          <DisplayBookingForms
            parameters={parameters}
            inputData={inputData}
            setInputData={setInputData}
          />

          {/* dropdown menu for seats */}
          <SeatSelection flight={flight} />
        </form>
        <button className="btn btn-primary mt-3" type="submit">
          Book Seats
        </button>
      </div>
    </form>
  );
};

export default BookingForms;
