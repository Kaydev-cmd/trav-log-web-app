import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <div className="mt-8 h-[300px] bg-white sm:h-[900px]">
        <div className="container">
          <div className="flex justify-between p-14 lg:p-8 lg:gap-8 md:gap-18 sm:flex-col sm:items-center">
            <div className="flex flex-col gap-8 sm:items-center">
              <a href="/" className="flex items-center gap-1">
                <img
                  src="/images/home/Logo.png"
                  alt="Logo"
                  className="w-[20px]"
                />
                <h6 className="font-bold">Travlog</h6>
              </a>
              <p className="text-[#191825] lg:text-[14px] sm:text-center">
                Contrary to popular belief, Lorem Ipsum is not simply
                <br />
                random text. It has roots in a piece of classical Latin
                <br />
                literature from 45 BC.
              </p>
              <div className="flex items-center gap-8">
                <div className="bg-[#5D50C6] p-2 rounded-[50%]">
                  <a href="#">
                    <FaFacebookF color="#fff" />
                  </a>
                </div>
                <div className="bg-[#5D50C6] p-2 rounded-[50%]">
                  <a href="#">
                    <FaTwitter color="#fff" />
                  </a>
                </div>
                <div className="bg-[#5D50C6] p-2 rounded-[50%]">
                  <a href="#">
                    <AiFillInstagram color="#fff" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-28 xl:gap-12 sm:flex-col sm:items-center">
              {/* Company */}
              <div className="company">
                <h6 className="mb-3 font-bold sm:text-center">Company</h6>
                <ul className="flex flex-col gap-4 sm:items-center">
                  <li>
                    <a href="" className="hover:underline text-[14px]">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline text-[14px]">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline text-[14px]">
                      Mobile
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="contact">
                <h6 className="mb-3 font-bold sm:text-center">Contact</h6>
                <ul className="flex flex-col gap-4 sm:items-center">
                  <li>
                    <a href="" className="hover:underline text-[14px]">
                      Why Travlog?
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline text-[14px]">
                      Partner with us
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline text-[14px]">
                      FAQ&#39;s
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline text-[14px]">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Meet Us */}
              <div className="meet-us">
                <h6 className="mb-3 font-bold sm:text-center">Meet Us</h6>
                <ul className="flex flex-col gap-4 sm:items-center">
                  <li>
                    <p>+00 92 1234 567</p>
                  </li>
                  <li>
                    <a href="" className="hover:underline text-[14px]">
                      info@travlog.com
                    </a>
                  </li>
                  <li>
                    <address className="text-[14px]">
                      205 R Street, New York
                    </address>
                  </li>
                  <li>
                    <p className="text-[14px]">BD23200</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
