import React, { useState, useEffect } from "react";
import axios from "axios";

function AllFlights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/all-flights")
      .then((response) => {
        const data = response.data;     
        console.log(data[0]);   
        setFlights(data);
      })
      .catch((error) => {
        console.error("Error fetching flights:", error);
      });
  }, []);

  return (
    <div>
      <h1>Flight List</h1>
      <ul>
      {Object.keys(flights).map((outerKey) => (
                <li key={outerKey}>
                    <strong>{outerKey}</strong>
                    <ul>
                        {Object.keys(flights[outerKey]).map((innerKey) => (
                            <li key={innerKey}>
                                {innerKey}: {flights[outerKey][innerKey]}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default AllFlights;
