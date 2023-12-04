import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import room1 from "../images/room1.png";

const AccomendationPage = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <div className="relative w-full">
          {/* Replace the following images with your actual image paths */}
          <img src={room1} alt="" className="w-full h-256 object-cover" />
          <div className="absolute top-0 left-0 w-full h-256 bg-black opacity-40" />
        </div>
        <div className="text-left absolute top-[30%] left-[10%]">
          <p className="text-white text-4xl font-regular italic font-body mb-1">
            Room and Suite
          </p>
          <p className="text-white text-sm font-body ">
            Stylish, spacious and layered with light, our newly-renovated guest
            rooms, terrace suites and two sprawling penthouse Lofts reflect the
            luxury and creative energy of the neighborhood. Standing seventeen
            stories tall, most windows frame a stunning view of Downtown
            Manhattan.
          </p>
        </div>
        <div className=" mx-[20%] bg-white rounded-lg">
          <div className="text-left my-10">
            <h1
              className="text-2xl font-regular  
           text-gray-800 font-title"
            >
              Property Policies
            </h1>
            <h1 className="text-regular font-semibold mb-10 uppercase text-gray-800 font-title">
              31th Hotel is absolutely safe if guests follow the rules
            </h1>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AccomendationPage;
