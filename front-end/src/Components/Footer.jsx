import React from "react";
import { Link } from "react-router-dom";

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
          <Link
            to="/AboutUsLimited"
            className="text-sm font-body mb-1 underline"
          >
            About Us
          </Link>

          <p className="text-sm font-body mb-1 ">
            <div href="/error">Contact Us</div>
          </p>
          <p className="text-sm font-body mb-1 ">
            <div href="/error">Work With Us</div>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
