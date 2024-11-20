import React from "react";

export const ServicesCards = () => {
  return (
    <div className="display: flex justify-around mt-12 lg:gap-8 md:flex-col md:items-center">
      {/* Card */}
      <div className="display: flex flex-col bg-white border p-16 items-center text-center gap-6 rounded-[12px]">
        <img src="/images/home/destination.png" alt="destination" />
        <h4>Best Tour Guide</h4>
        <p>
          What looked like a small
          <br />
          patch of purple grass,
          <br />
          above five feet
        </p>
      </div>

      {/* Card */}
      <div className="display: flex flex-col bg-white border p-16 items-center text-center gap-6 rounded-[12px] md:w-[300px]">
        <img src="/images/home/booking 1.png" alt="destination" />
        <h4>Easy Booking</h4>
        <p>
          Square, was moving
          <br />
          across the sand in their
          <br />
          direction
        </p>
      </div>

      {/* Card */}
      <div className="display: flex flex-col bg-white border p-16 items-center text-center gap-6 rounded-[12px]">
        <img src="/images/home/destination.png" alt="destination" />
        <h4>Best Tour Guide</h4>
        <p>
          What looked like a small
          <br />
          patch of purple grass,
          <br />
          above five feet
        </p>
      </div>
    </div>
  );
};
