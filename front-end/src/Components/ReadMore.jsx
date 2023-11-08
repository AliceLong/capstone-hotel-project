import React from "react";

const ReadMore = () => {
  const terms = [
    "Please note that this offer is only valid for a limited time",
    "You must be a member of our loyalty program",
    "You must be a member of our newsletter",
    "You must have stayed with us at least once",
  ];

  return (
    <div className="container mx-auto p-6 max-w-screen-md bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Terms and Conditions
      </h1>
      <p className="mb-4 text-gray-700">
        Welcome to our special hotel offer. To book with us, kindly ensure that
        you meet the following conditions:
      </p>
      <ul className="list-disc list-inside mb-4">
        {terms.map((term, index) => (
          <li key={index} className="text-gray-800 mb-2">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            {term}
          </li>
        ))}
      </ul>
      <p className="text-gray-700">
        These terms and conditions are subject to change without notice. Please
        review them regularly for updates.
      </p>
    </div>
  );
};

export default ReadMore;
