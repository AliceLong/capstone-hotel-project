import React, { useState } from "react";
import { Link } from "react-router-dom";

const Accommodations = ({ bigImage, smallImage, home2 }) => {
  // State to track the text
  const defaultText =
    "Hotel rooms offer a range of views, from vibrant cityscapes with twinkling lights, to serene natural landscapes like gardens or oceans. Some overlook historic landmarks, providing a glimpse into the past, ensuring a personalized stay for every guest.";
  const texts = [
    "",
    "We are here to help",
    "The special offer",
    "is under the 31th Bistro",
    "Use the mirror",
  ];
  const [textIndex, setTextIndex] = useState(0);

  // Function to handle the click event
  const handleAccommodationsClick = () => {
    // Update the text index when the button is clicked
    setTextIndex((textIndex + 1) % texts.length);
  };
  return (
    <div className="p-20">
      <div className="flex">
        <div className="w-1/2 mx-[10%]">
          <img src={bigImage} alt="Big" className="w-full h-auto" />
        </div>

        <div className="w-1/2 flex flex-col ml-[5%] relative">
          <img src={smallImage} alt="Small" className="w-2/3 h-auto" />
          <div className="w-2/3 mt-10 items-center ">
            <p className="text-left text-4xl uppercase font-semibold  font-body mt-4">
              {"Room and Suite"}
            </p>
            <p className="text-left text-sm font-regular font-body mt-4">
              {defaultText}
            </p>
            <p className="text-left text-sm font-regular font-body mt-4 bg-red-500 text-white">
              {texts[textIndex]}
            </p>
            {home2 ? (
              <Link
                to="/room"
                className="my-5 ml-0 inline-block py-2 px-6 text-sm font-body text-white capitalize bg-black hover:border-black hover:border hover:bg-white hover:text-black"
              >
                Accommodations
              </Link>
            ) : (
              <button
                className="my-5 ml-0 inline-block py-2 px-6 text-sm font-body text-white capitalize bg-black hover:border-black hover:border hover:bg-white hover:text-black"
                onClick={handleAccommodationsClick}
              >
                Accommodations
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
