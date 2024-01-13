import React from "react";
import specialOfferCode from "../images/speical_offer_code.png";

const MirrorError = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white font-title text-gray-500">
      <div className="text-center text-lg">
        <h1 className="tracking-widest uppercase">422 Unprocessable Entity</h1>
        <div className="mt-15">
          <div className="text-left px-[30%]">
            <h3 className="font-medium text-base tracking-widest uppercase mt-10">
              Unprocesssable due to incomplete request
            </h3>
            <p className="text-base mt-2">
              An incomplete request typically occurs when the URL you're trying
              to access is not fully specified. This could mean that a part of
              the URL, such as the domain name, path, or query parameters, is
              missing or incorrectly formatted.
            </p>
          </div>
        </div>
        <div className="mt-15">
          <img src={specialOfferCode} alt="Special Offer" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default MirrorError;
