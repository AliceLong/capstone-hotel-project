import React, { useState, useEffect } from "react";

const ReservationForm = (reserveType) => {
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

  const handleSubmit = (e) => {
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
      // Save form data in local storage
      console.log(form);
      localStorage.setItem("reservationData", JSON.stringify(form));
      console.log(localStorage);
    }
  };

  return (
    <form
      className="my-[5%] mx-[10%] px-[5%] py-[5%] text-left border font-title text-base"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl font-regular font-title mb-[5%] italic">
        Plan Your Enjoyment Today
      </p>
      <div className="grid grid-cols-2 gap-[5%] my-[5%] uppercase font-medium	">
        <label
          className={`border-b border-gray-300 my-[3%] ${
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
          className={`border-b border-gray-300 my-[3%] ${
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
          className={`border-b border-gray-300 my-[3%] ${
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
          className={`border-b border-gray-300 my-[3%] ${
            errors.reserveType ? "error" : ""
          }`}
        >
          Reserve Type:*
          <input
            type="text"
            name="reserveType"
            value={form.reserveType} // Display the reserveType from the form state
            readOnly // Make the input field read-only
          />
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
