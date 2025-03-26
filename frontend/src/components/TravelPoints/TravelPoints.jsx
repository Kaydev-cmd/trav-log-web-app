import React from "react";
import { TravelPointsCards } from "./TravelPointsCards";

const travelPoints = [
  { value: "500+", label: "Holiday Package" },
  { value: "100", label: "Luxury Hotel" },
  { value: "7", label: "Premium Airlines" },
  { value: "2k+", label: "Happy Customers" },
];

const TravelPoint = () => {
  return (
    <>
      <section className="mt-8">
        <div className="container">
          <div className="flex items-center justify-around display: md:flex-col-reverse">
            <img
              src="/images/home/Group 9238.png"
              alt="Travel point banner"
              className="xl:w-[600px] lg:w-[400px] md:w-[100%] md:mt-12"
            />
            <div className="md:text-center">
              <h3 className="text-[#F85E9F] uppercase">Travel Point</h3>
              <h2 className="font-bold normal-case xs:text-[32px]">
                We helping you find
                <br />
                your dream location
              </h2>
              <p className="text-[#191825] mt-2 xs:text-[14px]">
                Contrary to popular belief, Lorem Ipsum is not
                <br />
                simply random text. It has roots in a piece of
                <br />
                classical Latin literature from 45 BC.
              </p>
              <TravelPointsCards travelData={travelPoints} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TravelPoint;
