import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import bedroom1 from "../images/one_bedroom_1.jpg";
import bedroom2 from "../images/two_bedroom_1.jpg";
import terrance from "../images/terrance_2.png";
import familyRoom from "../images/family_room_1.jpg";
import bedroom1_revised from "../images/one_bedroom_1_revised.png";
import bedroom2_revised from "../images/two_bedroom_1_revised.jpg";
import terrance_revised from "../images/terrance_2_revised.png";
import familyRoom_revised from "../images/family_room_1_revised.jpg";

const Room = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [firstVisit, setFirstVisit] = useState(true); // Add state for first visit
  const [secondVisit, setSecondVisit] = useState(false); // Add state for second visit

  const navigate = useNavigate();
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const rooms = [
    {
      src: bedroom1,
      src2: bedroom1_revised,
      alt: "Room 1",
      title: "Deluxe One Bedroom Suite",
      description:
        "The luxurious Deluxe One Bedroom Suite on the sixteenth floor spans 470 – 500 square feet, showcasing a master bedroom with a king-size bed, a distinct living area, breathtaking Manhattan vistas, and a private bar.",
    },
    {
      src: bedroom2,
      src2: bedroom2_revised,
      alt: "Room 2",
      title: "Deluxe Two Bedroom Suite",
      description:
        "Double the enjoyment with our spacious Two Bedroom Suite, including a master bedroom, a separate living room, and an adjacent bedroom for the comfortable accommodation of four guests.",
    },
    {
      src: terrance,
      src2: terrance_revised,
      alt: "This Room does not exist in 31th hotel",
      title: "Terrance Suite",
      description:
        "Enjoy a outdoor private terrance with fireplace. Interiror includes an master bedroom and a dining area. The suite is located on the top floor of the hotel, offering a panoramic view of the city.",
    },
    {
      src: familyRoom,
      src2: familyRoom_revised,
      alt: "This Room does not exist in 31th hotel",
      title: "Family Home",
      description:
        "A perfect place for family. The Home boasts three-and-a-half spacious baths, a full galley kitchen, dual fireplaces, and a generously proportioned open living and dining space, embodying a sense of tranquility and sophistication.",
    },
  ];

  useEffect(() => {
    // Check if it's the first visit by checking local storage
    console.log(localStorage);
    const visited = localStorage.getItem("Visit");
    console.log(visited);
    if (visited) {
      setFirstVisit(false);
    }

    const secondVisit = localStorage.getItem("secondVisit");
    if (secondVisit) {
      setSecondVisit(true);
    }

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
    if (index === 0) {
      // Set the local storage to mark the visit
      localStorage.setItem("Visit", "true");
    }
    if (index !== 0) {
      // Set the local storage to mark the second visit
      localStorage.setItem("secondVisit", "true");
    }

    navigate(`/Room/${encodeURIComponent(rooms[index].title)}`);
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
          <img src={bedroom1} alt="" className="w-full h-256 object-cover" />
          <div className="absolute top-0 left-0 w-full h-256 bg-black opacity-60" />
        </div>
        <div
          className="text-left absolute top-[30%] left-[10%] right-[60%]"
          style={textContainerStyle}
        >
          <p
            className="text-white font-regular italic font-body mb-[7%] border-t border-white"
            style={headerStyle}
          >
            Room and Suite
          </p>
          <p className="text-white leading-6 text-sm font-title ">
            Embark on a refined journey at Hotel 31th, NYC, where our suites
            redefine luxury living. Indulge in spa-inspired bathrooms, complete
            with expansive soaking tubs, marble rain showers, and dual
            vanities.Weave-covered walls are adorned with vintage sconces and
            gilded brass mirrors. Revel in captivating city views through
            expansive windows, and unwind in oversized king beds adorned with
            bespoke linens for a restful night's sleep. Hotel 31th Suite offers
            an unparalleled escape—a sanctuary where each detail reflects a
            perfect blend of sophistication and comfort.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[5%] my-[10%] mx-[10%] px-[5%]">
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
                  pointerEvents: index !== 0 && firstVisit ? "none" : "auto",
                }}
                className={index !== 0 && firstVisit ? "" : "cursor-pointer"}
                onClick={() => handleRoomClick(index)}
              >
                <div className="relative">
                  <img
                    src={secondVisit ? room.src2 : room.src}
                    alt={room.alt}
                    className="w-full h-auto object-cover"
                  />
                  {((firstVisit && index !== 0) ||
                    (!firstVisit && index === 0)) && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 flex items-center justify-center">
                      <div className="text-white text-3xl font-title italic mx-5">
                        {firstVisit
                          ? "Currently Unavailable"
                          : "The content is revised by unauthorized"}
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-3xl text-left font-semibold text-gray-800 font-body uppercase mt-[8%]">
                  {room.title}
                </p>
                <p className="text-left leading-5 text-sm font-title mt-[3%] mr-[20%]">
                  {room.description}
                </p>
              </div>
            );
          })}
          <button onClick={clearLocalStorage}>Clear Local Storage</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Room;
