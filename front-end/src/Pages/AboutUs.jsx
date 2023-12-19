import React from "react";
import image1 from "../images/room4.jpg";
import Header from "../Components/Header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="relative w-full">
        {/* Replace the following images with your actual image paths */}
        <img src={image1} alt="" className="w-full h-256 object-cover" />
        <div className="absolute top-0 left-0 w-full h-256 bg-black opacity-40" />
      </div>
      <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-white text-6xl font-regular italic md:text-12xl font-body mb-1">
          About Us
        </div>
        <h2 className="text-white text-center text-2xl font-semibold font-title mx-40 mt-10">
          Welcome to 31th Hotel, Where Hospitality Meets Excellence
        </h2>
      </div>
      <div className="mx-[25%] my-[5%] bg-white rounded-lg">
        <div className="text-left my-10">
          <section className="mb-6 font-title">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Our Philosophy
            </h3>
            <p className="text-gray-600">
              At 31th Hotel, we believe in providing an experience that goes
              beyond the ordinary. From the moment you step through our doors,
              you'll be enveloped in an ambiance of sophistication and
              tranquility. We are committed to exceeding your expectations at
              every turn, offering personalized service that caters to your
              every need.
            </p>
          </section>

          <section className="mb-6 font-title">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Our Management Team
            </h3>
            <p>
              Our hotel is led by a team of seasoned professionals, each
              bringing a wealth of experience and a unique perspective to the
              table. Under the visionary leadership of our General Manager,{" "}
              <b>[Data Deleted]</b>, who has over <b>[Data Deleted]</b> years in
              the hospitality industry, our team is dedicated to creating an
              environment that exudes elegance while maintaining a warm,
              welcoming atmosphere.
            </p>
            {/* Add more team members as necessary */}
          </section>

          {/* Add more sections as needed for other content */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
