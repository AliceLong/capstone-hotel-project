import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReservationForm from "../Components/ReservationForm";

import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import dining_header from "../images/dining_header.jpg";
import cafe_1 from "../images/Cafe_1.jpg";
import bistrol_2 from "../images/31th_Bistrol_2.jpg";
import door_service_1 from "../images/doorService_1.jpg";
import clubroom_1 from "../images/clubroom_1.jpg";
import Dining_handbook from "./31th Hotel Dining Department Staff Handbook.pdf";
import bistro_menu from "../images/31th_bistro_menu_10_29.png";
import note_from_unknown from "./IMG_277.pdf";

const DiningDetails = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [reserveType, setReserveType] = useState(""); // Add this line

  const formRef = useRef();
  const navigate = useNavigate();

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const rooms = [
    {
      src: door_service_1,
      alt: door_service_1,
      title: "Indoor Gourmet Service",
      description:
        "Indulge in the delightful awakening of flavors at Hotel 31th Bistro's Morning Buffet. Immerse yourself in the inviting ambiance and savor each bite in the heart of Manhattan's Hotel 31th.",

      operation_time:
        " Breakfast: 6:30am - 11:00 am | All Day Menu: 11:am – 11:00pm",
      reserve: true,
    },
    {
      src: bistrol_2,
      src2: bistrol_2,
      alt: "The 31th Bistro",
      title: "The 31th Bistro",
      description:
        "Indulge in the delightful awakening of flavors at Hotel 31th Bistro's Morning Buffet. Immerse yourself in the inviting ambiance and savor each bite in the heart of Manhattan's Hotel 31th.",
      operation_time: "Breakfast: 7:00am - 10:00am",
      reserve: false,
    },
    {
      src: cafe_1,
      src2: cafe_1,
      alt: "Cafe 31th",
      title: "Cafe 31th",
      description:
        "Double the enjoyment with our spacious Two Bedroom Suite, including a master bedroom, a separate living room, and an adjacent bedroom for the comfortable accommodation of four guests.",
      operation_time: "10:00am - 5:00pm",
      reserve: false,
    },
    {
      src: clubroom_1,
      src2: clubroom_1,
      alt: "The Club Room",
      title: "The Club Room",
      description:
        "Enjoy a outdoor private terrance with fireplace. Interiror includes an master bedroom and a dining area. The suite is located on the top floor of the hotel, offering a panoramic view of the city.",
      operation_time: "24 hours but only for ꓕμԍ 3Ɩϝμ club member",
      reserve: true,
    },
  ];

  useEffect(() => {
    console.log(localStorage);
    // Event listener for scrolling
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRoomClick = (index) => {
    const room = rooms[index];

    if (room.reserve) {
      if (room.title === "The Club Room") {
        alert(
          "Suspicious files detected. Do not open it to prevent possible pollution."
        );
        downloadFile(note_from_unknown, "IMG_2197.pdf");
      }

      formRef.current.scrollIntoView({ behavior: "smooth" });
      setReserveType(room.title);
    } else if (room.title === "The 31th Bistro") {
      window.open(bistro_menu, "_blank");
      downloadFile(
        note_from_unknown,
        "[Confidential-III] Dining Department Staff Rules and Guidelines"
      );
    }
  };

  const downloadFile = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const headerStyle = {
    fontSize: `${Math.max(4 - scrollPosition / 100, 2)}rem`, // Adjust the formula based on your needs
    transition: "font-size 0.5s ease", // Add a smooth transition effect
  };

  const textContainerStyle = {
    transform: `translateY(${-scrollPosition / 2}px)`,
    transition: "transform 0.5s ease", // Add a smooth transition effect
  };

  return (
    <div>
      <Header2></Header2>
      <div>
        <div className="relative w-full">
          {/* Replace the following images with your actual image paths */}
          <img
            src={dining_header}
            alt=""
            className="w-full h-256 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-256 bg-black opacity-70" />
        </div>
        <div
          className="text-left absolute top-[30%] left-[10%] right-[60%]"
          style={textContainerStyle}
        >
          <p
            className="text-white font-regular italic font-body mb-[7%]  border-white"
            style={headerStyle}
          >
            Dining
          </p>
          <p className="text-white leading-6 text-sm font-title ">
            {/* Elevating Manhattan's culinary scene, 31th Hotel distinguishes
            itself with the well-known 31th Bistro and a exclusive private club
            room. Our commitment to well-being shines through a carefully
            curated array of health-conscious and organic culinary options.
            Immerse yourself in a captivating gastronomic journey where each
            dish is a vibrant expression of freshness, tailored with our guests'
            overall well-being in focus. In prioritizing the safety of our
            guests, please note that we have opted not to have a bar and do not
            serve alcoholic beverages within the hotel premises. */}
            Immerse yourself in the pulsating rhythm of dining and nightlife at
            Hotel 31th. From savoring bites in the sophisticated ambiance of The
            31th Bistro to dancing the night away in the trendy beats of our
            iconic Night Bar, each space is a curated experience. The bar buzzes
            with the first light turns into a lively New York night. Indulge in
            meticulously crafted cocktails, healthful comfort cuisine, and
            spirited conversations, all set against an unbeatable soundtrack.
            Hotel 31th offers a refined fusion of culinary excellence and
            unforgettable nightlife .
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[5%] my-[10%] mx-[5%] px-[5%]">
          {rooms.map((room, index) => {
            const roomStyle = {
              transform: `translateY(${-scrollPosition / 4}px)`,
              transition: "transform 0.5s ease", // Add a smooth transition effect
            };

            return (
              <div
                key={index}
                style={{
                  ...roomStyle,
                  pointerEvents: "auto",
                }}
              >
                <div className="relative">
                  <img
                    src={room.src}
                    alt={room.alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-3xl text-left font-semibold text-gray-800 font-body uppercase mt-[8%]">
                  {room.title}
                </p>
                <p className="text-left leading-6 text-gray-700 text-base font-title mt-[3%] mr-[20%]">
                  {room.description}
                </p>
                <p className="text-left leading-6 text-base uppercase font-bold font-title mt-[3%] mr-[20%]">
                  Operation Time:
                </p>
                <p className="text-left text-gray-700 leading-6 text-base font-title mr-[20%]">
                  {room.operation_time}
                </p>
                <button
                  className={`my-5 ml-0 inline-block py-2 px-6 text-sm font-body text-white capitalize border ${
                    room.reserve
                      ? "bg-black border-black hover:border-red-500 hover:bg-red-500 hover:text-white"
                      : "bg-black border-black hover:border-black hover:bg-white hover:text-black"
                  }`}
                  onClick={() => handleRoomClick(index)}
                >
                  {room.reserve ? "Reserve Now" : "View Menu"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div ref={formRef}>
        <ReservationForm reserveType={reserveType} /> {/* Modify this line */}
      </div>
      <button className="text-gray-50" onClick={clearLocalStorage}>
        Clear Local Storage
      </button>
      <Footer></Footer>
    </div>
  );
};

export default DiningDetails;
