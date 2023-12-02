import React from "react";
import image3 from "../images/AdobeStock_629069571.jpeg";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-full">
        <img src={image3} alt="" className="w-full h-256 object-cover" />
        <div className="absolute top-0 left-0 w-full h-256 bg-black opacity-60" />
      </div>
      <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="mb-4 text-white">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
        <p className="text-center text-white font-title text-xl italic">
          Welcome to 31th Hotel, we are now processing your booking information
        </p>
      </div>
    </div>
  );
};

export default Welcome;
