import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
// Add functionality to Auth Buttons

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Discover", href: "#" },
  { name: "Special Deals", href: "#" },
  { name: "Contact", href: "#" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container flex items-center justify-between p-6">
          {/* Logo */}
          <div>
            <a href="/" className="flex items-center gap-2 ">
              <img
                src="/images/home/Logo.png"
                alt="Logo"
                className="w-[20px]"
              />
              <h1 className="text-[18px] font-extrabold md:text-[16px]">
                Travlog
              </h1>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-6 text-[#191825] lg:gap-4 lg:font-medium md:gap-3 md:text-[14px] sm:hidden">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[#5D50C6]">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <div className="flex gap-6 font-semibold sm:hidden">
            <button className="text-[#191825] hover:text-[#5D50C6]">
              Log In
            </button>
            <button className="bg-[#5D50C6] px-6 py-3 rounded-xl text-[#fff] cursor-pointer hover:opacity-85">
              Sign Up
            </button>
          </div>

          {/* Right Menu Icon (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="hidden sm:flex"
          >
            {menuOpen ? (
              <IoClose size={30} color="#F85E9F" />
            ) : (
              <BiMenuAltRight size={30} color="#F85E9F" />
            )}
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className={`absolute top-16 left-0 w-full bg-[#F85E9F] py-4 shadow-lg text-white text-center transition-transform duration-300 ease-in-out ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0 pointer-events-none"
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 hover:text-[#000]"
                >
                  {link.name}
                </a>
              ))}

              {/* Auth Buttons in Mobile Menu */}
              <div className="flex flex-col gap-4 mt-4">
                <button className="hover:text-[#000]">Log In</button>
                <button className="hover:text-[#000]">Sign Up</button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
