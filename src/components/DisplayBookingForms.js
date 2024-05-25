import React from "react";

const DisplayBookingForms = ({ parameters, inputData, setInputData }) => {
    
      
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
    

  return(
   <div className="display-booking-forms">
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
    
    </div>
)};

export default DisplayBookingForms;
