import React from "react";
import { useParams } from "react-router-dom";
import livingroom1 from "../images/livingroom1.png";
import bedroom1 from "../images/one bedroom.jpg";
import bathroom from "../images/bathroom.jpg";
import bedroom2 from "../images/one_bedroom_2.png";
import bedroom3 from "../images/one_bedroom_3.png";
import { Link } from "react-router-dom";

const rooms = [
  {
    title: "Deluxe One Bedroom Suite",
    description:
      "Indulge in our 310-square-foot Deluxe One Bedroom Suite, a tastefully designed haven exuding luxury. The master bedroom features a king-sized bed, while a separate living area, adorned with timeless retro-style standing mirrors, provides a stylish space for relaxation. Admire stunning views of the Manhattan skyline through expansive windows, creating an ever-changing cityscape backdrop. The spacious bathroom, a blend of luxury and functionality, offers upscale amenities for a pampering experience. Lush greens placed throughout the suite add a touch of nature, fostering a refreshing and tranquil environment. Whether glimpsed through the windows or thoughtfully incorporated within, these green accents enhance the overall sense of serenity. Immerse yourself in a rejuvenating bath or modern shower, surrounded by an ambiance of sophistication.Carefully curated for a sophisticated and memorable stay, our Deluxe One Bedroom Suite seamlessly integrates retro-chic decor with panoramic city views. Every detail, from the decor to the amenities, has been thoughtfully considered to provide an extraordinary experience. Welcome to a stylish retreat where luxury meets the vibrant energy of Manhattan.",
    includes: [
      "Daily a la carte breakfast for two guests at 31th Bistro",
      "In-room fully stocked wet bar",
      "Daily cleaning after 9am",
      "High-speed Wi-Fi access throughout the suite",
      "24/7 concierge service for personalized assistance",
      "Evening turndown service for a restful night's sleep",
    ],
    amenities: [
      "Fully stocked wet bar with counter seating​",
      "Large bathroom with soaking tub and double vanity",
      "Glass enclosed working fireplace",
      "Oversized king bed or two deluxe twin beds",
      "Separate living room with sofa and coffee table",
      "Large walk-in closet",
      "55” flat screen TV",
    ],
    images: [bedroom2, bedroom3, bedroom1],
  },
  {
    title: "Deluxe Two Bedroom Suite",
    description:
      "This is Room Type X2HDS9C, a minimumn of 2 people is required to stay in this room for more than 10 hours per day",
    includes: ["Daily a la carte breakfast for two guests at 31th Bistro"],

    amenities: [
      "We do not have any fridge in the room, if you notice a fridge in the room, do not consume any food within it and contact our maintainence department with telephone provided in the room​",
      "Our TV only play chanel 23 and chanel 41. If you notice TV playing any chanel other than these two, contact our maintainence department as soon as possible​",
      "There is no internect connection or service in the room. Do not answer any call from your phone even it is from your friend or family. It is not them calling you",
      "There are mirrors all over the room. They are SAFE.",
      "There is no in-door service. Do not allow any staff to enter the room",
    ],
    images: ["images deleted", "images deleted", "images deleted"],
  },
  {
    title: "Terrance Suite",
    description:
      "This is Room Type OPC2RS , a minimumn of 4 people is required to stay in this room for more than 10 hours per day",
    includes: ["Daily a la carte breakfast for two guests at 31th Bistro"],
    amenities: [
      "We do not have any fridge in the room, if you notice a fridge in the room, do not consume any food within it and contact our maintainence department with telephone provided in the room​",
      "Our TV only play chanel 23 and chanel 41. If you notice TV playing any chanel other than these two, contact our maintainence department as soon as possible​",
      "There is no internect connection or service in the room. Do not answer any call from your phone even it is from your friend or family. It is not them calling you",
      "There are mirrors all over the room. They are SAFE.",
      "There is no in-door service. Do not allow any staff to enter the room",
      "There is no Terrance in the room. Do not open the balcony door",
    ],
    images: ["images deleted", "images deleted", "images deleted"],
  },
  {
    title: "Family Home",
    description: "Deleted Room ",
    includes: [
      "The reflection in the mirror should be the up side down image.",
    ],
    amenities: ["Mirror", "Mirror", "Mirror", "Mirror", "Mirror"],
    images: [
      "The reflection in the mirror should be the up side down image.",
      "Stay away from mirror if you see the reflectio not up side donw.",
      "It mean it has target you",
    ],
  },
];

const RoomDetailsPage = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const room = rooms.find((room) => room.title === decodedTitle);

  return (
    <div className="flex p-20">
      <div className="w-1/2">
        <div className="flex justify-left">
          <Link
            to="/room"
            className="my-5 ml-0 inline-block py-2 px-6 text-sm font-body text-white capitalize bg-black border border-black hover:border-black hover:bg-white hover:text-black"
          >
            Back to Overview
          </Link>
        </div>
        <img src={room.images[0]} alt={room.images[0]} />
        <div className="flex space-x-2 mt-5 2-1/2">
          <img
            src={room.images[1]}
            alt={room.images[1]}
            className="w-1/2 h-full"
          />

          <img
            src={room.images[2]}
            alt={room.images[2]}
            className="w-1/2 h-full"
          />
        </div>
      </div>
      <div className="w-1/2 px-[7%] text-center">
        <h1 className="text-black text-3xl italic font-body my-[10%]">
          The 31th Hotel
        </h1>
        <h1 className="text-gray text-2xl font-semibold uppercase font-body border-t border-white my-[5%]">
          {room ? room.title : "Room not found"}
        </h1>
        <div className=" text-gray-800 text-left font-title text-base leading-7 ">
          <p>{room ? room.description : "No description available"}</p>
          <p className=" font-bold mt-[10%] mb-2 uppercase"> Amenity:</p>
          {room ? (
            <ul>
              {room.amenities.map((amenities, index) => (
                <li key={index}>{amenities}</li>
              ))}
            </ul>
          ) : (
            <p>None</p>
          )}
          <p className=" font-bold  mt-[10%] mb-2 uppercase"> Include:</p>

          {room ? (
            <ul>
              {room.includes.map((includes, index) => (
                <li key={index}>{includes}</li>
              ))}
            </ul>
          ) : (
            <p>None</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
