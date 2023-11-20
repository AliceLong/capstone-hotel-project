import React, { useState, useEffect } from "react";
import BookingModal from "../Components/BookingModal";
import "react-datepicker/dist/react-datepicker.css";
import image1 from "../images/AdobeStock_323023398.jpeg";
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root");

const SpecialOffer = () => {
  const [bookModalIsOpen, setBookModalIsOpen] = useState(false);
  const [readMoreModalIsOpen, setReadMoreModalIsOpen] = useState(false);

  const openBookModal = () => {
    setBookModalIsOpen(true);
  };

  const closeBookModal = () => {
    setBookModalIsOpen(false);
  };

  const openReadMoreModal = () => {
    setReadMoreModalIsOpen(true);
  };

  const closeReadMoreModal = () => {
    setReadMoreModalIsOpen(false);
  };

  return (
    <div>
      <div className="relative w-full h-96">
        <img src={image1} alt="" className="w-full h-96 object-cover" />
        <div className="absolute top-0 left-0 w-full h-96 bg-black opacity-40" />
      </div>
      <div className="text-center absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-white text-6xl font-regular italic md:text-12xl font-body mb-1">
          Special Offers
        </div>
      </div>
      <div className="p-20 mx-20">
        <div className="flex">
          <div className="w-1/3 flex flex-col mr-30 ml-10 relative">
            <p className="text-left text-4xl uppercase font-semibold font-body mt-4">
              Grand Reopening Celebration
            </p>
            <p className="text-left text-sm font-regular font-body mt-4">
              We are thrilled to announce the much-anticipated reopening of the
              31th Hotel in October 29th. To celebrate this momentous occasion,
              we're unveiling exclusive special offers that promise an indulgent
              escape and remarkable savings
            </p>
            <div className="flex flex-row mt-10 items-center ">
              <button
                onClick={openBookModal}
                className=" ml-0 inline-block py-2 px-6 text-sm font-body text-white capitalize bg-black hover:border-black hover:border hover:bg-white hover:text-black"
              >
                Book Now
              </button>

              <button
                onClick={openReadMoreModal}
                className="ml-0 inline-block py-2 px-6 text-sm underline font-body text-black capitalize bg-transparent hover:text-gray-500"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="w-1/2 h-1/2 mx-20">
            <img
              src={image1}
              alt={image1}
              className="object-cover h-96 w-auto"
            />
          </div>
        </div>
      </div>

      <BookingModal
        bookModalIsOpen={bookModalIsOpen}
        closeBookModal={closeBookModal}
      />
      {/* Read More Modal */}
      <Modal
        isOpen={readMoreModalIsOpen}
        onRequestClose={closeReadMoreModal}
        contentLabel="Read More Modal"
      >
        <div className="p-20">
          <div className="flex">
            <div className="w-1/2 mx-10">
              <p className="text-left text-4xl uppercase font-semibold  font-body mt-4">
                Include
              </p>
              <p className="text-left text-sm font-regular font-body mt-4">
                Welcome Back Package: Enjoy a complimentary room upgrade, late
                checkout, and a welcome amenity when you book your stay during
                our reopening celebration.
                <p className="text-left text-sm font-regular font-body mt-4"></p>
                Dining Delight: Savor the culinary delights at our renowned
                restaurant with a special package that includes a gourmet dinner
                and a luxurious overnight stay.
              </p>
              <p className="text-left text-sm font-regular font-body mt-4">
                Stay Longer, Save More: Extend your stay and enjoy up to 20% off
                on consecutive nights, giving you ample time to immerse yourself
                in the opulence and charm of the 31th Hotel.
              </p>
              <p className="text-left text-sm font-regular font-body mt-4">
                VIP Spa Retreat: Pamper yourself with a rejuvenating spa
                experience. Book a spa package during our reopening and receive
                exclusive discounts on treatments, ensuring a blissful escape.
              </p>
            </div>

            <div className="w-1/2 flex flex-col ml-40 relative  uppercase  font-body">
              Avaiable for one guest only, if you want to add more guests in
              your party please contact us
              <div className="w-2/3 mt-10 items-center ">
                <p className="text-left text-4xl uppercase font-semibold  font-body mt-4">
                  only valid
                </p>
                <p className="text-left text-sm font-regular font-body mt-4">
                  on grand reopening date
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SpecialOffer;
