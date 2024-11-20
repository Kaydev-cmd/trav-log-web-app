import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";
// Work on Fonts

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div
            className="
            display: flex
            items-center
            justify-between
            py-[16px]
            px-[24px]
          "
          >
            <BiMenuAltLeft
              size={30}
              color="#5D50C6"
              className="
              hidden
              md:flex
              sm:hidden
            "
            />
            <div
              className="
              md:relative
              md:left-[12%]
              sm:left-0
            "
            >
              <a
                href="/"
                className="
                display: flex
                items-center
                gap-[8px]
              "
              >
                <img
                  src="/images/home/Logo.png"
                  alt="Logo"
                  className="
                  w-[20px]
                "
                />
                <h1
                  className="
                  text-[22px]
                  normal-case
                  font-bold
                  md:text-[18px]
                "
                >
                  Travlog
                </h1>
              </a>
            </div>
            <div className="links">
              <ul
                className="
                display: flex
                gap-[48px]
                md:hidden
              "
              >
                <li>
                  <a
                    href="/"
                    className="
                    transition duration-[.3] ease-in-out
                    text-[#474747]
                    hover:text-[#000000]
                  "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="
                    transition duration-[.3] ease-in-out
                    text-[#474747]
                  hover:text-[#000000]
                  "
                  >
                    Discover
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="
                    transition duration-[.3] ease-in-out
                    text-[#474747]
                  hover:text-[#000000]
                  "
                  >
                    Special Deals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="
                    transition duration-[.3] ease-in-out
                    text-[#474747]
                  hover:text-[#000000]
                  "
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="
              display: flex
              gap-[16px]
              items-center
              sm:hidden
            "
            >
              <button
                className="
                transition duration-[.3] ease-in-out
                text-[#474747]
                hover:text-[#000000]
                md:text-[14px]
                "
              >
                Log In
              </button>
              <button
                className="
                transition duration-[.3] ease-in-out
                bg-[#5D50C6]
                py-2
                px-6
                rounded-[12px]
                text-white
                hover:opacity-[.8]
                md:text-[14px]
              "
              >
                Sign Up
              </button>
            </div>
            <BiMenuAltRight
              size={30}
              color="#5D50C6"
              className="
              hidden
              sm:flex
            "
            />
          </div>
        </div>
      </div>
    </>
  );
};
