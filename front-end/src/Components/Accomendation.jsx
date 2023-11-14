import React from "react";
import { Link } from "react-router-dom";

const Accommodations = ({ bigImage, smallImage, title, text }) => {
  return (
    <div className="p-20">
      <div className="flex">
        <div className="w-1/2 mx-10">
          <img src={bigImage} alt="Big" className="w-full h-auto" />
        </div>

        <div className="w-1/2 flex flex-col ml-40 relative">
          <img src={smallImage} alt="Small" className="w-2/3 h-auto" />
          <div className="w-2/3 mt-10 items-center ">
            <p className="text-left text-4xl uppercase font-semibold  font-body mt-4">
              {title}
            </p>
            <p className="text-left text-sm font-regular font-body mt-4">
              {text}
            </p>
            <Link
              to="/error"
              className="my-5 ml-0 inline-block py-2 px-6 text-sm font-body text-white capitalize bg-black hover:border-black hover:border hover:bg-white hover:text-black"
            >
              Accommodations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
