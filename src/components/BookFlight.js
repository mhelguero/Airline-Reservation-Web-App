import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import DisplayFlights from "./DisplayFlights";
import BookingForms from "./BookingForms";

const BookFlight = () => {
  const { flight_id } = useParams();
  const {
    data: flight,
    isPending,
    error,
  } = useFetch("http://localhost:4000/flight?flight_id=" + flight_id);

  return (
    <div className="book-flight">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {flight && (
          <DisplayFlights isBookedFlight={true} title="Flight Number " flights={flight} />
        )}

      <BookingForms flight={flight}/>
    </div>
  );
};

export default BookFlight;
