import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios"; // Make sure to install axios with npm install axios

const ReservationForm = (reserveType) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    reserveType: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    reserveType: false,
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    reserveType: false,
  });

  useEffect(() => {
    if (reserveType && reserveType.reserveType) {
      // Check if reserveType.reserveType exists
      setForm((prevForm) => ({
        ...prevForm,
        reserveType: reserveType.reserveType,
      })); // Set reserveType.reserveType in form state
    }
  }, [reserveType]);

  // ... other code ...

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors
    const newErrors = {
      name: !form.name,
      email: !form.email,
      phone: !form.phone,
      reserveType: !form.reserveType,
    };

    // Display error messages for unfilled fields
    setErrors(newErrors);

    // Check if there are no errors (all fields are filled)
    if (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.phone &&
      !newErrors.reserveType
    ) {
      // If reserveType is "Club Room" and all the required fields are "Club Room", navigate to the error page
      if (
        form.reserveType === "Club Room" &&
        form.name === "Club Room" &&
        form.email === "Club Room" &&
        form.phone === "Club Room"
      ) {
        console.log("script implemented");
        navigate("/error"); // Replace '/error' with the path to your error page

        // After 3 seconds, navigate to the /employee page
        setTimeout(() => {
          navigate("/Report-II-DFAWH"); // Replace '/employee' with the path to your employee page
        }, 3000);
      } else {
        // Save form data in local storage
        console.log(form);
        try {
          const apiUrl = "https://capstone-hotel-project.onrender.com";
          const response = await axios.post(`${apiUrl}/form/submit`, form);
          console.log(response.data); // Log the response data from the server
          if (form.reserveType === "Indoor Gourmet Service") {
            // If the response data from the server is successful
            alert(
              "We will be right at your door soon. It's our pleasure to serve you."
            );
            window.location.href = "about:blank";
          }
        } catch (error) {
          console.error("Error submitting form: ", error);
        }
      }
    }
  };
  return (
    <form
      className="my-[5%] mx-[10%] px-[5%] py-[5%] text-left font-title text-base border-gray-800 border-2 "
      onSubmit={handleSubmit}
    >
      <p className="text-2xl font-regular font-title mb-[1%] italic ">
        Plan Your Enjoyment Today
      </p>
      <p className="text-base  font-regular font-title mb-[3%]">
        Reservation will be open to 31TH hotel guests and ꓕμԍ 3Ɩϝμ club member
        only.
      </p>
      <div className="grid grid-cols-2 gap-[5%] my-[2%] uppercase font-medium  text-gray-500	">
        <label
          className={`border-b border-gray-800 my-[3%] ${
            errors.name ? "error" : ""
          }`}
        >
          Name:*
          <input type="text" name="name" onChange={handleChange} />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </label>
        <label
          className={`border-b border-gray-800 my-[3%] ${
            errors.email ? "error" : ""
          }`}
        >
          Email Address:*
          <input type="email" name="email" onChange={handleChange} />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </label>
        <label
          className={`border-b border-gray-800  my-[3%] ${
            errors.phone ? "error" : ""
          }`}
        >
          Phone Number:*
          <input type="tel" name="phone" onChange={handleChange} />
          {errors.phone && (
            <span className="text-red-500">This field is required</span>
          )}
        </label>
        <label
          className={`border-b border-gray-800  my-[3%] ${
            errors.reserveType ? "error" : ""
          }`}
        >
          Reserve Type:*
          <select
            name="reserveType"
            value={form.reserveType}
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="Indoor Gourmet Service">
              Indoor Gourmet Service
            </option>
            <option value="Club Room">Club Room</option>
          </select>
          {errors.reserveType && (
            <span className="text-red-500">This field is required</span>
          )}
        </label>
      </div>
      <div className="flex flex-col text-sm mt-[1%]">
        <label>
          <input type="checkbox" name="terms" />I have read and agreed to the
          policies of the 31th Hotel
        </label>
        <label className="mt-[1%]">
          <input type="checkbox" name="offers" />
          Yes, I would like to receive emails with exclusive specials and offers
        </label>
      </div>
      <input
        type="submit"
        value="Submit Reservation"
        onClick={handleSubmit}
        className="mt-10 ml-0 inline-block py-2 px-6 text-sm font-body text-white capitalize bg-black border border-black hover:border-black hover:bg-white hover:text-black"
      />
    </form>
  );
};
export default ReservationForm;
