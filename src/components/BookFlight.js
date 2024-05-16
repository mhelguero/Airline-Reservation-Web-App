import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BookFlight = () => {
    const {flight_id} = useParams();
  return <div className="book-flight">hi, you want to book a flight for {flight_id}</div>;
};

export default BookFlight;
