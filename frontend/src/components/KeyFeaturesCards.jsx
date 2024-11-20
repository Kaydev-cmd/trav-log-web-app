import React from "react";

export const KeyFeaturesCards = () => {
  return (
    <>
      <div className="flex flex-col gap-8 xl:gap-4">
        {/* Card */}
        <div className="flex items-center justify-around gap-8 p-4 border rounded-3xl">
          <img
            src="/images/home/Group 9239.png"
            alt="Location"
            className="lg:w-16"
          />
          <div className="right-wrapper">
            <h5 className="font-bold text-[18px] xs:text-[14px]">
              We offer best services
            </h5>
            <p className="text-[#191825] xs:text-[12px]">
              Lorem Ipsum is not simply random text
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="flex items-center justify-around gap-8 p-4 border rounded-3xl">
          <img
            src="/images/home/Group 9240.png"
            alt="Calender"
            className="lg:w-16"
          />
          <div className="right-wrapper">
            <h5 className="font-bold text-[18px] xs:text-[14px]">
              Schedule your trip
            </h5>
            <p className="text-[#191825] xs:text-[12px]">
              It has roots in a piece of classical
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="flex items-center justify-around gap-8 p-4 border rounded-3xl">
          <img
            src="/images/home/Group 9241.png"
            alt="Coupon"
            className="lg:w-16"
          />
          <div className="right-wrapper">
            <h5 className="font-bold text-[18px] xs:text-[14px]">
              Get discounted coupons
            </h5>
            <p className="text-[#191825] xs:text-[12px]">
              Lorem Ipsum is not simply random text
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
