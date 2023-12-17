import React from "react";

const Error = () => {
  return (
    <div className="grid h-screen px-4 text-center bg-white place-content-center font-title">
      <h1 className="tracking-widest text-gray-500 uppercase">
        401 unauthroized access
      </h1>
      <h1 className="tracking-widest  text-gray-500 uppercase">
        Only guest with valid reservation can access this page
      </h1>
    </div>
  );
};

export default Error;
