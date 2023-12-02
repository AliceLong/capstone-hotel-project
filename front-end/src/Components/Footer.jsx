import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-[15%] py-[5%] ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col items-start">
          <h3 className="text-2xl italic font-body mb-[5%]">The 31th Hotel</h3>
          <p className="text-regular font-title">
            Luxury Accommodation in the Heart of the City
          </p>
        </div>
        <div className="flex flex-col items-end ">
          <p className="text-sm font-body mb-1 underline">
            <a href="/about">About Us</a>
          </p>
          <p className="text-sm font-body mb-1 underline">
            <a href="/contact">Contact Us</a>
          </p>
          <p className="text-sm font-body mb-1 underline">
            <a href="/work">Work With Us</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
