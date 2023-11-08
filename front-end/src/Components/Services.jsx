import React from "react";

const Services = ({ bigImage, smallImage, title, text }) => {
  return (
    <div className="p-20">
      <div className="flex">
        <div className="w-1/2 mt-20">
          <img src={bigImage} alt="Big" className="w-full h-auto" />
        </div>
        <div className="w-1/2 flex flex-col items-center relative">
          <img src={smallImage} alt="Small" className="w-2/3 h-auto" />
          <div className="w-2/3 mt-10">
            <p className="text-left text-4xl uppercase font-semibold  font-body mt-4">
              {title}
            </p>
            <p className="text-left text-sm font-regular font-body mt-4">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
