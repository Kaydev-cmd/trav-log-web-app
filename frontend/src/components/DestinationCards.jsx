import React from "react";
import { FaStar } from "react-icons/fa";

export const DestinationCards = () => {
  return (
    <>
      <div className="mt-12 display: flex justify-around gap-8 md:flex-col md:items-center">
        {/* Card */}
        <div className="w-[300px]">
          <div className="upper-wrapper">
            <img src="/images/home/Rectangle 6.png" alt="Beach" />
          </div>
          <div className="p-4 bg-white rounded-b-2xl">
            <div className="display: flex justify-between">
              <h5 className="font-bold">
                Paradise Beach,
                <br />
                Bantayan Island
              </h5>
              <p>
                <span className="text-[#F85E9F] font-bold">&#36;550.16</span>
              </p>
            </div>
            <p className="mt-4 text-[#191825]">Rome, Italy</p>
            <p className="text-[#FF5722] display: flex items-center mt-6 gap-2">
              4.8 <FaStar />
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="w-[300px]">
          <div className="upper-wrapper">
            <img src="/images/home/Rectangle 7.png" alt="Beach" />
          </div>
          <div className="p-4 bg-white rounded-b-2xl">
            <div className="display: flex justify-between">
              <h5 className="font-bold">
                An Ocean full of
                <br />
                Colors
              </h5>
              <p>
                <span className="text-[#F85E9F] font-bold">&#36;20.99</span>
              </p>
            </div>
            <p className="mt-4 text-[#191825]">Maldives</p>
            <p className="text-[#FF5722] display: flex items-center mt-6 gap-2">
              4.5 <FaStar />
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="w-[300px]">
          <div className="upper-wrapper">
            <img src="/images/home/Rectangle 8.png" alt="Beach" />
          </div>
          <div className="p-4 bg-white rounded-b-2xl">
            <div className="display: flex justify-between">
              <h5 className="font-bold">
                Mountain View,
                <br />
                Above the clouds
              </h5>
              <p>
                <span className="text-[#F85E9F] font-bold">&#36;150.99</span>
              </p>
            </div>
            <p className="mt-4 text-[#191825]">United Arab Emirates</p>
            <p className="text-[#FF5722] display: flex items-center mt-6 gap-2">
              5.0 <FaStar />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
