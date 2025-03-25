import React from "react";
import { ServicesCards } from "./ServicesCards";

const Services = () => {
  return (
    <>
      <section className="mt-8">
        <div className="container">
          <div className="content">
            <div className="text-center">
              <h3 className="text-[#F85E9F]">Services</h3>
              <h2 className="font-bold normal-case xs:text-[32px]">
                Our top value
                <br />
                categories for you
              </h2>
            </div>
            <ServicesCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
