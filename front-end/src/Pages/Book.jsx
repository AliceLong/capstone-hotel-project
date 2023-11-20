import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Book() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Book Your Accommodation</h1>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
    </div>
  );
}

export default Book;
