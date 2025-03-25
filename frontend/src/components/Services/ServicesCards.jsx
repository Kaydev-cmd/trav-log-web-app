import React from "react";

const services = [
  {
    id: 1,
    image: "/images/home/destination.png",
    title: "Best Tour Guide",
    description:
      "What looked like a small patch of purple grass, above five feet.",
  },
  {
    id: 2,
    image: "/images/home/booking 1.png",
    title: "Easy Booking",
    description: "Square, was moving across the sand in their direction.",
  },
  {
    id: 3,
    image: "/images/home/destination.png",
    title: "Best Tour Guide",
    description:
      "What looked like a small patch of purple grass, above five feet.",
  },
];

export const ServicesCards = () => {
  return (
    <div className="flex justify-around mt-12 display: lg:gap-4 md:flex-col md:items-center">
      {services.map((service) => (
        <div className="flex flex-col bg-white border p-16 items-center text-center gap-6 rounded-[12px] md:w-[300px] w-[400px] xl:w-[300px]">
          <img src={service.image} alt={service.title} />
          <h4 className="text-lg font-bold">{service.title}</h4>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};
