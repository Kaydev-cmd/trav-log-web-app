import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { DestinationCards } from "./DestinationCards";

const ArrowButton = ({ direction, onClick, isPrimary }) => {
  return (
    <button
      className={`p-6 md:p-4 sm:p-2 rounded-full border flex items-center justify-center ${
        isPrimary ? "bg-[#5d50c6] text-white" : "bg-white text-black"
      }`}
      onClick={onClick}
    >
      {direction === "left" ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );
};

const TopDestinations = () => {
  return (
    <>
      <section className="mt-8">
        <div className="container">
          <div className="flex flex-col items-end justify-between sm:flex-col md:items-center md:text-center">
            {/* Heading */}
            <div className="mb-6 sm:text-center">
              <h3 className="text-[#f85e9f] uppercase text-lg font-semibold">
                Top Destinations
              </h3>
              <h2 className="text-2xl font-bold sm:text-xl">
                Explore top destinations
              </h2>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-6 sm:gap-3">
              <ArrowButton
                direction="left"
                onClick={() => alert("Previous destination")}
              />
              <ArrowButton
                direction="right"
                onClick={() => alert("Next destination")}
                isPrimary
              />
            </div>
          </div>
          <DestinationCards />
        </div>
      </section>
    </>
  );
};

export default TopDestinations;
