import React from "react";

export const TravelPointsCards = () => {
  return (
    <>
      <div className="travel-points-cards">
        <div className="display: flex items-center gap-8 mt-12 mb-8 xl:mt-6 xs:gap-2">
          <div className="bg-white h-32 w-40 rounded-2xl border display: flex flex-col items-center justify-center">
            <h5 className="text-[28px] font-bold text-[#FF5722]">500+</h5>
            <p>Holiday Package</p>
          </div>
          <div className="bg-white h-32 w-40 rounded-2xl border display: flex flex-col items-center justify-center">
            <h5 className="text-[28px] font-bold text-[#FF5722]">100</h5>
            <p>Luxury Hotel</p>
          </div>
        </div>
        <div className="display: flex items-center gap-8 xs:gap-2">
          <div className="bg-white h-32 w-40 rounded-2xl border display: flex flex-col items-center justify-center">
            <h5 className="text-[28px] font-bold text-[#FF5722]">7</h5>
            <p>Premium Airlines</p>
          </div>
          <div className="bg-white h-32 w-40 rounded-2xl border display: flex flex-col items-center justify-center">
            <h5 className="text-[28px] font-bold text-[#FF5722]">2k+</h5>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </>
  );
};
