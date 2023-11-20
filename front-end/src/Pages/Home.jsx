import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Accomendation from "../Components/Accomendation.jsx";
import Dining from "../Components/Dining.jsx";
import image1 from "../images/AdobeStock_323023398.jpeg";
import image2 from "../images/AdobeStock_575552556.jpeg";
import image3 from "../images/AdobeStock_629069571.jpeg";
import room1 from "../images/room1.png";
import room2 from "../images/room2.jpg";
import room3 from "../images/room3.jpg";
import Entertainment from "../Components/Entertainment.jsx";
import BookingModal from "../Components/BookingModal";
import "react-datepicker/dist/react-datepicker.css";

const images = [image1, room3, image3];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bookModalIsOpen, setBookModalIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [errorMessage, setErrorMessage] = useState("");
  const [promotionCode, setPromotionCode] = useState("");
  const [userCode, setUserCode] = useState("");
  const [guests, setGuests] = useState(1);
  const [availableDates, setAvailableDates] = useState([]);

  const openBookModal = () => {
    setBookModalIsOpen(true);
  };

  const closeBookModal = () => {
    setBookModalIsOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const [refTitle, inViewTitle] = useInView({
    triggerOnce: true,
  });

  const [refDining, inViewDining] = useInView({
    triggerOnce: true,
  });

  const [refEntertainment, inViewEntertainment] = useInView({
    triggerOnce: true,
  });

  const handleSubmit = () => {
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
  };

  return (
    <>
      <header className="fixed w-full z-10 bg-transparent transition-colors duration-500 hover:bg-white group">
        <nav className="shadow">
          <div className="container mx-auto px-6 py-3">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">
                  <Link
                    to="/error"
                    className="text-white text-xl italic font-body md:text-2xl group-hover:text-black"
                  >
                    The 31th Hotel
                  </Link>
                </div>
              </div>
              <div className="flex justify-between items-center md:flex-grow">
                <div className="flex justify-center flex-grow">
                  <Link
                    to="/error"
                    className="block mx-4 mt-2 md:mt-0 text-sm font-body text-white capitalize group-hover:text-black"
                  >
                    Dining
                  </Link>
                  <Link
                    to="/error"
                    className="block mx-4 mt-2 md:mt-0 text-sm font-body text-white capitalize group-hover:text-black"
                  >
                    Entertainment
                  </Link>
                  <Link
                    to="/error"
                    className="block mx-4 mt-2 md:mt-0 text-sm font-body text-white capitalize group-hover:text-black"
                  >
                    Gallery
                  </Link>
                </div>
                <div className="hidden md:block">
                  <button
                    onClick={openBookModal}
                    className=" ml-0 inline-block py-2 px-6 text-sm font-body text-white capitalize bg-black hover:border-black hover:border hover:bg-white hover:text-black"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="relative w-full h-256">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-10000 ease-in-out ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute w-full h-full bg-black opacity-40" />
          </div>
        ))}
        <div className="text-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-white text-1xl font-regular italic md:text-12xl font-body mb-1">
            Where Every
          </div>
          <div className="text-white text-1xl font-regular italic md:text-12xl font-body ml-20 mb-2">
            Moment is
          </div>
          <div className="text-white text-6xl font-regular italic md:text-12xl font-title ml-10">
            Unforgettable
          </div>
        </div>
      </div>
      <div>
        <div
          ref={refTitle}
          className={`transition-opacity duration-1000 ${
            inViewTitle ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-center items-center text-center text-2xl font-title italic my-40 mx-96">
            We are thrilled to announce the much-anticipated reopening of the
            31th Hotel in this October, 29th! After an extensive renovation, we
            invite you to rediscover the epitome of luxury and hospitality in
            the heart of New York City. The 31th offers unique accommodations
            with laid-back luxury, gracious hospitality, superior dining, and
            one of the most iconic bars. Since 1984, our hotel has created
            memories for generations of travelers. Create one for yourself with
            an unforgettable stay at ꓕμԍ 3Ɩϝμ μoϝԍɼ.
          </div>

          <Accomendation
            bigImage={room1}
            smallImage={room2}
            title="Room and Suite"
            text="Hotel rooms offer a range of views, from vibrant cityscapes with twinkling lights, to serene natural landscapes like gardens or oceans. Some overlook historic landmarks, providing a glimpse into the past, ensuring a personalized stay for every guest."
          />
        </div>

        <div
          ref={refDining}
          className={`transition-opacity duration-1000 ${
            inViewDining ? "opacity-100" : "opacity-0"
          }`}
        >
          <Dining />
        </div>

        <div
          ref={refEntertainment}
          className={`transition-opacity duration-1000 ${
            inViewEntertainment ? "opacity-100" : "opacity-0"
          }`}
        >
          <Entertainment />
        </div>
      </div>

      {/* Book Now Modal */}
      {/* Book Now Modal */}
      <BookingModal
        bookModalIsOpen={bookModalIsOpen}
        closeBookModal={closeBookModal}
        handleSubmit={handleSubmit}
        startDate={startDate}
        endDate={endDate}
        dateRange={dateRange}
        setDateRange={setDateRange}
        availableDates={availableDates}
        guests={guests}
        setGuests={setGuests}
        userCode={userCode}
        setUserCode={setUserCode}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </>
  );
}

export default App;
