import React from "react";
import KeyFeaturesCards from "./KeyFeaturesCards";

const KeyFeatures = () => {
  return (
    <>
      <section className="mt-8">
        <div className="container">
          <div className="flex items-center justify-around lg:gap-8 md:flex-col">
            <div className="left-wrapper">
              <div className="md:text-center">
                <h3 className="text-[#F85E9F] uppercase">Key Features</h3>
                <h2 className="font-bold normal-case lg:text-[34px] xs:text-[32px]">
                  We offer best services
                </h2>
                <p className="text-[#191825] mt-1 mb-8 lg:text-[14px] xs:text-[14px]">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  <br />
                  text. It has roots in a piece of classical Latin literature
                  <br />
                  from 45 BC.
                </p>
              </div>
              <KeyFeaturesCards />
            </div>
            <img
              src="/images/home/BACKGROUND.png"
              alt="Paradise on Earth"
              className="xl:w-[500px] lg:w-[400px] md:w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
