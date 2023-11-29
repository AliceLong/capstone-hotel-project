import React from "react";
import image1 from "../images/AdobeStock_323023398.jpeg";
import image2 from "../images/AdobeStock_575552556.jpeg";
import image3 from "../images/AdobeStock_629069571.jpeg";
import room1 from "../images/room1.png";
import room2 from "../images/room2.jpg";
import room3 from "../images/room3.jpg";

const Entertainment = () => {
  const images = [image1, image2, image3, room1, room2, room3];
  const descriptions = ["SPA", "SWIMMING", "GARDEN"];

  return (
    <div className="p-20 mx-[10%] relative">
      <h2 className="text-left text-4xl uppercase font-semibold font-body mb-10">
        Entertainment
      </h2>
      <div className="flex overflow-x-auto">
        <div className="flex space-x-2">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Entertainment ${index + 1}`}
                className="object-cover h-96 w-96"
              />
              <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
                <p className="text-3xl text-white italic font-body">
                  Coming Soon
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
