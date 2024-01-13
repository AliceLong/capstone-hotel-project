import { useRef, useEffect, useState, createRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import image1 from "../images/AdobeStock_323023398.jpeg";
import Footer from "../Components/Footer";

const policiesData = [
  {
    title: "Check-in Time",
    content:
      "The check-in time is 3:00 pm. Please do not enter any hotel floors other than 1st floor before check-in with front-desk staff.",
  },
  {
    title: "Check-out Time",
    content:
      "All check-out guest need to evacuate from their room by 6:00 am of the check out date. Our dedicated cleaning staff will perform very thorough room cleaning starting at 6:00 am.",
  },
  {
    title: "Breakfast Service",
    content:
      "Free breakfast is available in the 31th Bistro from 6:00 am to 9:00 am exclusively for hotel guests. Please noted that the restaurant is the only free food offered by the hotel during your stay. please make sure you fulfill your need for the day.",
  },
  {
    title: "Dining",
    content:
      "Our second floor offer dining services in Café, The 31th Bistro, and The Club Room that only open to members. Please note that our bar has been closed.",
    hiddenContent:
      "We have the biggest bar in the city, please come and enjoy our drinks.",
  },
  {
    title: "Employee Identification",
    content:
      "All our staffs wear name tags on the right side of their chest for easy identification. If you happen to encounter any employee without a name tag,  report the incident to the front desk as quickly as possible.",
    hiddenContent:
      "Our dedicated team of staffs is committed to welcoming guests with warmth and genuine smile.",
    additionalContent: "Real staff don't smile, they are just doing their job.",
  },
  {
    title: "Photography",
    content:
      "Photography is strictly prohibited in all areas of the hotel. If you are found taking photos, you will be asked to leave the hotel immediately.",
  },
];

const TermCondition = () => {
  const { flag } = useParams();
  const [isAgreed, setIsAgreed] = useState(false);
  const [labelText, setLabelText] = useState("I agree with the policies terms");
  const navigate = useNavigate();

  const handleAgreeChange = () => {
    setIsAgreed(!isAgreed);
    setLabelText("I agree with the policies terms");
  };
  const handleNextClick = () => {
    if (flag === "revisited") {
      navigate("/ꓕμԍ 3Ɩϝμ μoϝԍɼ");
    } else {
      navigate("/welcome");
    }
  };
  const refs = useRef([]);
  refs.current = policiesData.map((_, i) => refs.current[i] ?? createRef());

  useEffect(() => {
    refs.current.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.current.style.transition = "opacity 1000ms, transform 1000ms";
            ref.current.style.opacity = 1;
            ref.current.style.transform = "translateY(0)";
          } else {
            ref.current.style.opacity = 0;
            ref.current.style.transform = "translateY(20px)";
          }
        },
        {
          threshold: 0.1,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });
  }, []);

  return (
    <div>
      <div className="relative w-full">
        {/* Replace the following images with your actual image paths */}
        <img src={image1} alt="" className="w-full h-256 object-cover" />
        <div className="absolute top-0 left-0 w-full h-256 bg-black opacity-40" />
      </div>
      <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-white text-6xl font-regular italic md:text-12xl font-body mb-1">
          Policies
        </div>
        <p className="text-white text-center text-2xl font-semibold font-title mx-40 mt-10">
          For our guest safety, we have implemented the following policies:
        </p>
      </div>
      <div className=" mx-[20%] bg-white rounded-lg">
        <div className="text-left my-10">
          <h1
            className="text-2xl font-regular  
           text-gray-800 font-title"
          >
            Property Policies
          </h1>
          <h1 className="text-regular font-semibold mb-10 uppercase text-gray-800 font-title">
            31th Hotel is absolutely safe if guests follow the rules
          </h1>

          <div className="grid grid-cols-2 gap-2 gap-x-20 ">
            {policiesData.map((policy, index) => (
              <div key={index} className="mb-6 group" ref={refs.current[index]}>
                {<hr className="border-t border-gray-300 mb-4" />}
                <h2 className="text-sm upper font-semibold text-gray-800 mb-2 font-body">
                  {policy.title}
                </h2>
                <p className="text-gray-600 mb-2 leading-loose font-body text-sm">
                  {policy.content}
                </p>
                {policy.hiddenContent && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="mb-2 font-body text-red-500 text-sm line-through">
                      {policy.hiddenContent}
                    </span>
                  </div>
                )}
                {policy.additionalContent && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-gray-600 mb-2 text-sm">
                      {policy.additionalContent}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="text-left ">
          <h1
            className="text-2xl font-regular
            text-gray-800 font-title "
          >
            Acknowledgement
          </h1>
          <h1 className="text-regular upper font-semibold text-gray-800 font-title uppercase mb-3">
            By completing this booking, I acknowlege the rules and regulations
            during my stay in 31th Hotel
          </h1>
          <label
            onClick={handleAgreeChange}
            className={`block mb-4 text-sm  ${
              labelText === "I agree with the policies terms"
                ? "text-gray-800 font-body font-semibold"
                : "text-red-500"
            } `}
          >
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={handleAgreeChange}
              className="mr-2 text-green-500"
            />
            {labelText}
          </label>
        </div>
        <button
          className={`py-2 px-20 text-sm font-body text-white capitalize bg-black mb-[10%]
  ${isAgreed ? "" : "bg-gray-400 cursor-not-allowed"}`}
          onClick={handleNextClick}
          disabled={!isAgreed}
        >
          {" "}
          Confirm Booking
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default TermCondition;
