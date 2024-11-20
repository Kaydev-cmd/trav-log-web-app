import React from "react";

export const TravelPointsCards = () => {
  return (
    <>
      <div className="travel-points-cards">
        <div className="flex items-center gap-8 mt-12 mb-8 display: xl:mt-6 xs:gap-2">
          <div className="flex flex-col items-center justify-center w-40 h-32 bg-white border rounded-2xl display:">
            <h5 className="text-[28px] font-bold text-[#FF5722]">500+</h5>
            <p>Holiday Package</p>
          </div>
          <div className="flex flex-col items-center justify-center w-40 h-32 bg-white border rounded-2xl display:">
            <h5 className="text-[28px] font-bold text-[#FF5722]">100</h5>
            <p>Luxury Hotel</p>
          </div>
        </div>
        <div className="flex items-center gap-8 display: xs:gap-2">
          <div className="flex flex-col items-center justify-center w-40 h-32 bg-white border rounded-2xl display:">
            <h5 className="text-[28px] font-bold text-[#FF5722]">7</h5>
            <p>Premium Airlines</p>
          </div>
          <div className="flex flex-col items-center justify-center w-40 h-32 bg-white border rounded-2xl display:">
            <h5 className="text-[28px] font-bold text-[#FF5722]">2k+</h5>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </>
  );
};
