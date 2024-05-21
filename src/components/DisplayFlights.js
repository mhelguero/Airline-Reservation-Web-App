import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DisplayFlights = ({ title, flights, isBookedFlight }) => {
  const displayFlightDetails = (flight, index) => (
    <tr
      key={flight.flight_id}
      className={index % 2 === 0 ? "black-row" : "gray-row"}>
      <td>{flight.flight_no}</td>
      <td>{flight.departure_airport}</td>
      <td>{flight.arrival_airport}</td>
      <td>{flight.scheduled_departure}</td>
      <td>{flight.scheduled_arrival}</td>

      <td className={flight.flight_status}>{flight.flight_status}</td>
      {!isBookedFlight && flight.flight_status === "Cancelled" ? (
        <td></td>
      ) : (
        <td>
          <Link to={`/book-flight/${flight.flight_id}`}>
            <button className="btn btn-primary">Book Flight</button>
          </Link>
        </td>
      )}
    </tr>
  );

  return (
    <div
      className={isBookedFlight ? "booked-flight-display" : "flight-display"}>
      <h2>
        {title}
        {isBookedFlight && title === "Flight Number " && flights[0]?.flight_no}
      </h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Departure</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Flight Status</th>
            {!isBookedFlight && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => displayFlightDetails(flight, index))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayFlights;
