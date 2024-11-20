import React from "react";
import { FaBriefcase } from "react-icons/fa6";

export const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="mt-8">
        <div className="container">
          <div
            className="
        display: flex
        justify-around
        items-center
      "
          >
            <div className="left-wrapper">
              <button
                className="
            display: flex
            items-center
            gap-[8px]
            bg-white
            p-3
            rounded-[12px]
            text-[#F85E9F]
            mb-8
            transition duration-[.3] ease-in-out
            hover:bg-[#000]
            sm:my-0
            sm:mx-auto
          "
              >
                Explore the world!
                <FaBriefcase size={20} />
              </button>
              <div className="sm:text-center">
                <h2
                  className="
              text-[62px]
              xl:text-[48px]
              lg:text-[38px]
              md:text-[28px]
              sm:text-[38px]
            "
                >
                  Travel to <span className="text-[#F85E9F]">top</span>
                  <br />
                  <span className="text-[#F85E9F]">destinations</span> around
                  <br />
                  the world
                </h2>
                <p
                  className="
            text-[#191825]
            lg:text-[14px]
            md:text-[12px]
            sm:text-[14px]
            "
                >
                  We always make our customers happy by
                  <br />
                  providing as many choices as possible
                </p>
              </div>
              <div
                className="
            display: flex
            items-center
            gap-8
            mt-8
            sm:justify-center
          "
              >
                <button
                  className="
              bg-[#5D50C6]
              py-3
              px-8
              rounded-[12px]
              text-white
              transition duration-[.3] ease-in-out
              hover:opacity-[.9]
              md:px-6
              "
                >
                  Get Started
                </button>
                <button
                  className="
              display: flex
              items-center
              gap-2
              bg-white
              py-3
              px-8
              rounded-[12px]
              border
              md:px-3
              "
                >
                  <img src="/images/home/play-circle.5 1.png" alt="Play" />
                  Watch Demo
                </button>
              </div>
            </div>
            <img
              src="/images/home/Hero-banner.png"
              alt="Hero"
              className="
          xl:w-[600px]
          lg:w-[400px]
          md:w-[320px]
          sm:hidden
        "
            />
          </div>
        </div>
      </section>
      {/* Icons */}
      <section className="mt-8">
        <div className="container">
          <div
            className="
            display: flex
            justify-between
            items-center
            "
          >
            <img
              src="/images/home/Group.png"
              alt="Trip Advisor"
              className="
              lg:w-20
              lg:h-4
              sm:w-16
              sm:h-4
              xs:w-12
              xs:h-4
              "
            />
            <img
              src="/images/home/Group 2.png"
              alt="Expedia"
              className="
              lg:w-20
              lg:h-6
              sm:w-16
              sm:h-6
              xs:w-12
              xs:h-6
            "
            />
            <img
              src="/images/home/Group 3.png"
              alt="Booking.com"
              className="
              lg:w-20
              lg:h-4
              sm:w-16
              sm:h-4
              xs:w-14
            "
            />
            <img
              src="/images/home/Group 9235.png"
              alt="Air BnB"
              className="
              lg:w-20
              lg:h-6
              sm:w-16
              xs:w-14
            "
            />
            <img
              src="/images/home/Group 4.png"
              alt="Orbitz"
              className="
              lg:w-20
              lg:h-4
              sm:w-16
              xs:w-14
            "
            />
          </div>
        </div>
      </section>
    </>
  );
};
