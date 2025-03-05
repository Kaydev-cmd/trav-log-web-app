import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// DestinationCard component to represent each individual card
const DestinationCard = ({ image, title, price, location, rating }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="w-[300px] bg-white rounded-2xl shadow-lg overflow-clip"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[200px] object-cover"
          />
          {hovered && (
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-white bg-black opacity-50">
              <span className="text-lg font-semibold">Explore</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between">
            <h5 className="text-xl font-bold">{title}</h5>
            <p className="">
              <span className="text-[#f85e9f] font-bold">&#36;{price}</span>
            </p>
          </div>
        </div>
        <div className="p-4">
          <p className="mt-2 text-[#191825]">{location}</p>
          <p className="text-[#ff5722] flex items-center mt-4 gap-2">
            {rating} <FaStar />
          </p>
        </div>
      </div>
    </>
  );
};

// Main component to display the list of destination cards
export const DestinationCards = () => {
  const destinations = [
    {
      image: "/images/home/Rectangle 6.png",
      title: "Paradise Beach, Bantayan Island",
      price: "550.16",
      location: "Rome, Italy",
      rating: "4.8",
    },
    {
      image: "/images/home/Rectangle 7.png",
      title: "An Ocean full of Colors",
      price: "20.99",
      location: "Maldives",
      rating: "4.5",
    },
    {
      image: "/images/home/Rectangle 8.png",
      title: "Mountain View, Above the clouds",
      price: "150.99",
      location: "United Arab Emirates",
      rating: "5.0",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-12">
      {destinations.map((destination, index) => (
        <DestinationCard key={index} {...destination} />
      ))}
    </div>
  );
};
