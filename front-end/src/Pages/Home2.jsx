import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Accomendation from "../Components/Accomendation.jsx";
import Dining2 from "../Components/Dining2.jsx";
import image1 from "../images/AdobeStock_323023398.jpeg";
import image3 from "../images/AdobeStock_629069571.jpeg";
import room1 from "../images/room1.png";
import room2 from "../images/room2.jpg";
import room3 from "../images/room3.jpg";
import Entertainment from "../Components/Entertainment.jsx";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import Footer from "../Components/Footer.jsx";
import Header2 from "../Components/Header2.jsx";

const images = [image1, room3, image3];

// function TermModal({ isOpen, onRequestClose }) {
//   const [hasAgreed, setHasAgreed] = useState(false);

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       style={{
//         content: {
//           margin: "200px 400px",
//           padding: "100px 150px", // 100px vertical padding, 50px horizontal padding
//         },
//       }}
//     >
//       <h2>Terms and Conditions</h2>
//       <ul>
//         <li>Term 1: Description of term 1</li>
//         <li>Term 2: Description of term 2</li>
//         <li>Term 3: Description of term 3</li>
//         {/* Add more terms and conditions as needed */}
//       </ul>
//       <div>
//         <input
//           type="checkbox"
//           id="agree"
//           name="agree"
//           value="agree"
//           onChange={() => setHasAgreed(!hasAgreed)}
//         />
//         <label htmlFor="agree">
//           I have read and agree to the terms and conditions
//         </label>
//       </div>
//       <button disabled={!hasAgreed} onClick={onRequestClose}>
//         I Agree
//       </button>
//     </Modal>
//   );
// }

function Home2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [termModalIsOpen, setTermModalIsOpen] = useState(true);
  const home2 = true;

  const [refDining, inViewDining] = useInView({
    triggerOnce: false,
  });

  const [refEntertainment, inViewEntertainment] = useInView({
    triggerOnce: false,
  });

  const [refAccommendation, inViewAccommendation] = useInView({
    triggerOnce: false,
  });
  const [refTitle, inViewTitle] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header2></Header2>
      <div className="relative w-full h-256">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-10000 ease-in-out ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute w-full h-full bg-black opacity-40" />
          </div>
        ))}
        <div className="text-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-white text-1xl font-regular italic md:text-12xl font-body mb-1">
            Where Every
          </div>
          <div className="text-white text-1xl font-regular italic md:text-12xl font-body ml-20 mb-2">
            Moment is
          </div>
          <div className="text-white text-6xl font-regular italic md:text-12xl font-title ml-10">
            Unforgettable
          </div>
        </div>
      </div>
      <div>
        <div
          ref={refTitle}
          className={`transition-opacity duration-1000 ${
            inViewTitle ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-center items-center text-center text-2xl font-title italic my-[10%] mx-[30%]">
            We are thrilled to announce the much-anticipated reopening of the
            31th Hotel in this October, 29th! After an extensive renovation, we
            invite you to rediscover the epitome of luxury and hospitality in
            the heart of New York City. The 31th offers unique accommodations
            with laid-back luxury, gracious hospitality, superior dining{" "}
            <div style={{ textDecoration: "line-through" }}>
              one of the most iconic bars.
            </div>{" "}
            Since 1984, our hotel has created memories for generations of
            travelers. Create one for yourself with an unforgettable stay at ꓕμԍ
            3Ɩϝμ μoϝԍɼ.
          </div>
        </div>
        <div
          ref={refAccommendation}
          style={{
            transform: inViewAccommendation
              ? "translateX(0)"
              : "translateX(-10%)",
            transition: "transform 1s ease-out",
            opacity: inViewAccommendation ? 1 : 0,
          }}
        >
          <Accomendation bigImage={room1} smallImage={room2} home2={home2} />
        </div>

        <div
          ref={refDining}
          style={{
            transform: inViewDining ? "translateX(0)" : "translateX(-10%)",
            transition: "transform 1s ease-out",
            opacity: inViewDining ? 1 : 0,
          }}
        >
          <Dining2 home2={home2} />
        </div>

        <div
          ref={refEntertainment}
          style={{
            transform: inViewEntertainment
              ? "translateX(0)"
              : "translateX(-10%)",
            transition: "transform 1s ease-out",
            opacity: inViewEntertainment ? 1 : 0,
          }}
        >
          <Entertainment home2={home2} />
        </div>
      </div>
      {/* <TermModal
        isOpen={termModalIsOpen}
        onRequestClose={() => {
          setTermModalIsOpen(false);
        }}
      /> */}
      <Footer />
    </>
  );
}

export default Home2;
