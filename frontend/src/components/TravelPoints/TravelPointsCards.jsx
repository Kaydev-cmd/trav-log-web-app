import React from "react";

export const TravelPointsCards = ({ travelData }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 mt-12 travel-points-cards">
        {travelData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-40 h-32 transition-shadow duration-300 bg-white border shadow-md cursor-pointer rounded-2xl hover:shadow-lg xs:w-36"
          >
            <h5 className="text-[28px] font-bold text-[#ff5722]">
              {item.value}
            </h5>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </>
  );
};
