import React from "react";
import { useState } from "react";

const DisplayBookingForms = ({ parameters }) => {
    const [inputData, setInputData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        cardNumber: "",
      });
      
    const labels = {
      name: "Full Name",
      phoneNumber: "Phone Number",
      email: "Email",
      cardNumber: "Credit Card Number"
    }
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
        <div key={parameter} className="form-group">
          <label htmlFor={parameter} className="form-label">{labels[parameter]}: </label>
          <input
            type={parameter==='name' || parameter==='cardNumber' ? 'text':
                parameter==='phoneNumber' ? 'tel':'email'
            }
            id={parameter}
            name={parameter}
            value={inputData[parameter]}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
    ))}
    
    </div>;
};

export default DisplayBookingForms;
