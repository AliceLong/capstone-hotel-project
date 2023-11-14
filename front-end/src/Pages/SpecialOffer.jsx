import React from "react";

const SpecialOffer = () => {
  return (
    <div className="p-20 mx-20">
      <h1 className="text-4xl font-semibold mb-10">Special Offer</h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="p-10 border-2 border-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold mb-5">Offer 1</h2>
          <p className="text-gray-500">Description of the special offer 1.</p>
        </div>
        <div className="p-10 border-2 border-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold mb-5">Offer 2</h2>
          <p className="text-gray-500">Description of the special offer 2.</p>
        </div>
        <div className="p-10 border-2 border-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold mb-5">Offer 3</h2>
          <p className="text-gray-500">Description of the special offer 3.</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
