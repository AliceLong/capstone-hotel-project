import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookingModal from "../Components/BookingModal";
import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
  const [bookModalIsOpen, setBookModalIsOpen] = useState(false);

  const openBookModal = () => {
    setBookModalIsOpen(true);
  };

  const closeBookModal = () => {
    setBookModalIsOpen(false);
  };
  return (
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
                <BookingModal
                  bookModalIsOpen={bookModalIsOpen}
                  closeBookModal={closeBookModal}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
