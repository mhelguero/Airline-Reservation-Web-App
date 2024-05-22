import React from "react";
import { useState } from "react";

const DisplayBookingForms = ({ parameters }) => {
    const [inputData, setInputData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        cardNumber: "",
      });

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
  return <div className="display-booking-forms">
    {parameters.map((parameter) =>(
        <div key={parameter} className="booking-form">
          <label htmlFor={parameter}>{parameter}: </label>
          <input
            type={parameter==='name' || parameter==='cardNumber' ? 'text':
                parameter==='phoneNumber' ? 'tel':'email'
            }
            id={parameter}
            name={parameter}
            value={inputData[parameter]}
            onChange={handleChange}
            required
          />
        </div>
    ))}
    
    </div>;
};

export default DisplayBookingForms;
