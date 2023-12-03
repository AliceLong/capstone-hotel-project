import React, { useState, useEffect } from "react";
import image3 from "../images/AdobeStock_629069571.jpeg";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setReminders((prevReminders) => [
          ...prevReminders,
          {
            key: new Date().getTime(),
            top: `${Math.random() * 80}vh`,
            left: `${Math.random() * 80}vw`,
          },
        ]);
      }, 2000);

      return () => clearInterval(interval);
    }, 10000); // 10 seconds delay before starting the interval

    return () => clearTimeout(timeout);
  }, []);
  // const removeReminder = (key) => {
  //   setReminders((prevReminders) =>
  //     prevReminders.filter((reminder) => reminder.key !== key)
  //   );
  // };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
      <div className="w-full h-256 relative">
        <div className="glitch-container">
          <img src={image3} alt="" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />
        </div>
      </div>
      <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="mb-4 text-white">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
        <div className="text-white text-4xl font-regular italic font-title ">
          <div
            className="glitch-text"
            text1="welcome to 31th hotel, we are processing your booking"
            text2="Are you sure you read our policies carefully?"
          ></div>
        </div>
        {reminders.map((reminder) => (
          <div
            key={reminder.key}
            className="reminder"
            style={{ top: reminder.top, left: reminder.left }}
          >
            <p className="text-black text-center text-base font-regular font-body  mx-[5vw] mb-[2vh]">
              Please read our policies carefully before confirming booking
            </p>
            <p className="text-red-500 text-center text-sm underline mx-[5vw] mb-[2vh]">
              If you haven't consumed any food provided by hotel, leave now.
              Else, you have become GUEST. You need to stay in the hotel for at
              least 3 days. Find the right rules to follow
            </p>
            <div className="flex col-2 justify-center gap-2 gap-x-20 mx-[5vw] mb-[2vh]">
              <Link
                to="/TermCondition/revisited"
                className="ml-0 inline-block py-2 px-6 text-xs font-body text-white capitalize bg-black hover:border-black hover:border hover:bg-white hover:text-black"
              >
                Go back
              </Link>
              <button className="ml-0 inline-block py-2 px-6 text-xs font-body text-white capitalize bg-black hover:border-black hover:border hover:bg-white hover:text-black">
                I have finished reading
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
