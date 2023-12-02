import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingModal = ({ bookModalIsOpen, closeBookModal }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [errorMessage, setErrorMessage] = useState("");
  const [promotionCode, setPromotionCode] = useState("");
  const [userCode, setUserCode] = useState("");
  const [guests, setGuests] = useState(1);
  const [availableDates, setAvailableDates] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!startDate || !endDate) {
      setErrorMessage("Check-in date is required.");
      return;
    }

    if (userCode !== promotionCode) {
      setErrorMessage("Invalid offer code.");
      return;
    }

    if (guests !== 1) {
      setErrorMessage("Only one guest is allowed.");
      return;
    }

    // If all checks pass, clear the error message and proceed with the booking.
    setErrorMessage("");
    console.log("Booking successful.");

    navigate("/TermCondition");
  };

  useEffect(() => {
    const fetchDates = async () => {
      const response = await axios.get("../data.json");
      setAvailableDates(
        response.data.reservation.availableDates.map((date) => new Date(date))
      );
      setPromotionCode(response.data.reservation.promotionCode);
      console.log("Data fetched successfully");
    };

    fetchDates();
  }, []);
  return (
    <Modal
      isOpen={bookModalIsOpen}
      onRequestClose={closeBookModal}
      style={{
        content: {
          margin: "10vh 5vw", // 10% of the viewport height top and bottom, 20% of the viewport width on the left and right
          padding: "2vh 5vw", // 5% vertical padding, 10% horizontal padding
        },
      }}
    >
      <div className="flex justify-between">
        <p className="text-left text-4xl uppercase font-semibold  font-body mt-4">
          Book and Stay
        </p>
        <button
          onClick={closeBookModal}
          className="ml-0 inline-block py-2 px-6 text-sm underline font-body text-black capitalize bg-transparent hover:text-gray-500"
        >
          Close
        </button>
      </div>
      <div className="flex  my-10">
        <div className=" w-1/2">
          <h2 className="text-left text-m uppercase font-semibold  font-body mt-4   text-black ">
            Select your stay time
          </h2>
          <DatePicker
            selected={startDate}
            onChange={(dates) => {
              const [start, end] = dates;
              if (
                start &&
                availableDates.some(
                  (availableDate) =>
                    start.getDate() === availableDate.getDate() &&
                    start.getMonth() === availableDate.getMonth()
                )
              ) {
                setDateRange(dates);
                setErrorMessage("");
              } else if (start) {
                setErrorMessage(
                  "This check-in date is not available. Please find the avaiable check-in date"
                );
              }
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            monthsShown={2}
            startDatePlaceholderText="Arrive"
            endDatePlaceholderText="Departure"
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
        <div className="w-1/4 pl-4 mx-40">
          <div className="mb-4">
            <label className="text-left text-m uppercase font-semibold  font-body mt-4  text-black">
              Check-in date:
            </label>
            <input
              type="text"
              value={startDate ? startDate.toLocaleDateString() : ""}
              readOnly
              className="w-full block text-left text-xl uppercase font-regular font-body mt-2 border-b-2 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="text-left text-m uppercase font-semibold  font-body mt-4  text-black">
              Check-out date:
            </label>
            <input
              type="text"
              value={endDate ? endDate.toLocaleDateString() : ""}
              readOnly
              className="w-full block text-left text-xl uppercase font-regular font-body mt-2 border-b-2 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="text-left text-m uppercase font-semibold  font-body mt-4  text-black">
              Guests:
            </label>
            <input
              type="number"
              defaultValue={1}
              min={1}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full block text-left text-xl uppercase font-regular font-body mt-2 border-b-2 text-black"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Offer Code"
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="w-full block text-left text-xl  font-regular mt-8 font-body border-b-2 text-black"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full ml-0 inline-block py-2 px-6 text-sm font-body text-white capitalize bg-black hover:border-black hover:border hover:bg-white hover:text-black"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BookingModal;
