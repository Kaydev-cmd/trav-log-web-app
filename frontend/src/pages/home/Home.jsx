import React from "react";
import { ServicesCards } from "../../components/Services/ServicesCards";
import { DestinationCards } from "../../components/TopDestinations/DestinationCards";
import { TravelPointsCards } from "../../components/TravelPoints/TravelPointsCards";
import { KeyFeaturesCards } from "../../components/KeyFeatures/KeyFeaturesCards";
// import { FaBriefcase } from "react-icons/fa6";
import Hero from "../../components/Hero/Hero";
import Icons from "../../components/Icons/Icons";
import Services from "../../components/Services/Services";
import TopDestinations from "../../components/TopDestinations/TopDestinations";
import TravelPoints from "../../components/TravelPoints/TravelPoints";
import KeyFeatures from "../../components/KeyFeatures/KeyFeatures";
import Testimonials from "../../components/Testimonials/Testimonials";

export const Home = () => {
  return (
    <>
      <Hero />
      <Icons />
      <Services />
      <TopDestinations />
      <TravelPoints />
      <KeyFeatures />
      <Testimonials />
      {/* Testimonials */}

      {/* Subscribe */}
      {/* <section className="mt-8">
        <div className="container">
          <div className="flex flex-col items-center gap-12">
            <div className="text-center">
              <h2 className="text-[#F85E9F] text-[22px] mt-8 mb-2 md:text-[20px]">
                Subscribe To Our Newsletter
              </h2>
              <h3 className="text-[38px] font-bold md:text-[26px]">
                Prepare yourself &#38; Let&#39;s explore the
                <br />
                beauty of the world
              </h3>
            </div>
            <div className="flex xs:flex-col xs:gap-4">
              <input
                type="text"
                placeholder="Your Email"
                className="p-3 rounded-l-[12px] w-[400px] md:w-[280px] sm:w-[240px] xs:w-[100%] xs:rounded-[12px]"
              />
              <button className="bg-[#5D50C6] p-4 rounded-r-[12px] text-white hover:opacity-[.9] xs:rounded-[12px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
