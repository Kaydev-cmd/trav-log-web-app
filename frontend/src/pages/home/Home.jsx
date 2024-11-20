import React from "react";
import { ServicesCards } from "../../components/ServicesCards";
import { DestinationCards } from "../../components/DestinationCards";
import { TravelPointsCards } from "../../components/TravelPointsCards";
import { FaBriefcase } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="mt-8">
        <div className="container">
          <div className="display: flex justify-around items-center">
            <div className="left-wrapper">
              <button className="display: flex items-center gap-[8px] bg-white p-3 rounded-[12px] text-[#F85E9F] mb-8 transition duration-[.3] ease-in-out hover:bg-[#000] sm:my-0 sm:mx-auto">
                Explore the world!
                <FaBriefcase size={20} />
              </button>
              <div className="sm:text-center">
                <h2 className="text-[62px] xl:text-[48px] lg:text-[38px] md:text-[28px] sm:text-[38px]">
                  Travel to <span className="text-[#F85E9F]">top</span>
                  <br />
                  <span className="text-[#F85E9F]">destinations</span> around
                  <br />
                  the world
                </h2>
                <p className="text-[#191825] lg:text-[14px] md:text-[12px] sm:text-[14px]">
                  We always make our customers happy by
                  <br />
                  providing as many choices as possible
                </p>
              </div>
              <div className="display: flex items-center gap-8 mt-8 sm:justify-center">
                <button className="bg-[#5D50C6] py-3 px-8 rounded-[12px] text-white transition duration-[.3] ease-in-out hover:opacity-[.9] md:px-6">
                  Get Started
                </button>
                <button className="display: flex items-center gap-2 bg-white py-3 px-8 rounded-[12px] border md:px-3">
                  <img src="/images/home/play-circle.5 1.png" alt="Play" />
                  Watch Demo
                </button>
              </div>
            </div>
            <img
              src="/images/home/Hero-banner.png"
              alt="Hero"
              className="xl:w-[600px] lg:w-[400px] md:w-[320px] sm:hidden"
            />
          </div>
        </div>
      </section>
      {/* Icons */}
      <section className="mt-8">
        <div className="container">
          <div className="display: flex justify-between items-center">
            <img
              src="/images/home/Group.png"
              alt="Trip Advisor"
              className="lg:w-20 lg:h-4 sm:w-16 sm:h-4 xs:w-12 xs:h-4"
            />
            <img
              src="/images/home/Group 2.png"
              alt="Expedia"
              className="lg:w-20 lg:h-6 sm:w-16 sm:h-6 xs:w-12 xs:h-6"
            />
            <img
              src="/images/home/Group 3.png"
              alt="Booking.com"
              className="lg:w-20 lg:h-4 sm:w-16 sm:h-4 xs:w-14"
            />
            <img
              src="/images/home/Group 9235.png"
              alt="Air BnB"
              className="lg:w-20 lg:h-6 sm:w-16 xs:w-14"
            />
            <img
              src="/images/home/Group 4.png"
              alt="Orbitz"
              className="lg:w-20 lg:h-4 sm:w-16 xs:w-14"
            />
          </div>
        </div>
      </section>
      {/* Our Services */}
      <section className="mt-8">
        <div className="container">
          <div className="content">
            <div className="text-center">
              <h3 className="text-[#F85E9F]">Services</h3>
              <h2 className="font-bold">
                Our top value
                <br />
                categories for you
              </h2>
            </div>
            <ServicesCards />
          </div>
        </div>
      </section>
      {/* Top Destinations */}
      <section className="mt-8">
        <div className="container">
          <div className="content">
            <div className="display: flex justify-between items-center sm:flex-col">
              <div className="sm: mb-6 sm:text-center">
                <h3 className="text-[#F85E9F] uppercase">Top destinations</h3>
                <h2 className="normal-case font-bold">
                  Explore top destinations
                </h2>
              </div>
              <div className="display: flex items-center gap-6 sm:gap-3">
                <div className="bg-white p-6 rounded-[50%] border md:p-4 sm:p-2">
                  <FaArrowLeft />
                </div>
                <div className="bg-[#5D50C6] p-6 rounded-[50%] md:p-4 sm:p-2">
                  <FaArrowRight color="white" />
                </div>
              </div>
            </div>
            <DestinationCards />
          </div>
        </div>
      </section>
      {/* Travel Point */}
      <section className="mt-8">
        <div className="container">
          <div className="display: flex items-center justify-around md:flex-col-reverse">
            <img
              src="/images/home/Group 9238.png"
              alt="Travel point banner"
              className="xl:w-[600px] lg:w-[400px] md:w-[100%] md:mt-12"
            />
            <div className="md:text-center">
              <h3 className="text-[#F85E9F] uppercase">Travel Point</h3>
              <h2 className="normal-case font-bold">
                We helping you find
                <br />
                your dream location
              </h2>
              <p className="text-[#191825] mt-2">
                Contrary to popular belief, Lorem Ipsum is not
                <br />
                simply random text. It has roots in a piece of
                <br />
                classical Latin literature from 45 BC.
              </p>
              <TravelPointsCards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
