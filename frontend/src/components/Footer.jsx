import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const socialLinks = [
  {
    icon: <FaFacebookF color="#fff" />,
    url: "#",
    label: "Facebook",
  },
  {
    icon: <FaTwitter color="#fff" />,
    url: "#",
    label: "Twitter",
  },
  {
    icon: <AiFillInstagram color="#fff" />,
    url: "#",
    label: "Instagram",
  },
];

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Career", "Mobile"],
  },
  {
    title: "Contact",
    links: ["Why Travlog?", "Partner with us", "FAQ's", "Blog"],
  },
  {
    title: "Meet Us",
    links: [
      { text: "+00 92 1234 567", isText: true },
      { text: "info@travlog.com", url: "mailto:info@travlog.com" },
      { text: "205 R Street, New York", isAddress: true },
      { text: "BD23200", isText: true },
    ],
  },
];

const SocialIcon = ({ icon, url, label }) => {
  return (
    <a
      href={url}
      className="bg-[#5d50c6] p-2 rounded-full flex items-center justify-center"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

const FooterSection = ({ title, links }) => {
  return (
    <div className="sm:text-center">
      <h6 className="mb-3 font-bold">{title}</h6>
      <ul className="flex flex-col gap-4 sm:items-center">
        {links.map((link, index) => (
          <li key={index}>
            {link.isText ? (
              <p className="text-[14px]">{link.text}</p>
            ) : link.isAddress ? (
              <address className="text-[14px]">{link.text}</address>
            ) : (
              <a href={link.url || "#"} className="hover:underline text-[14px]">
                {link.text || link}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <>
      <div className="h-auto mt-8 bg-white">
        <div className="container">
          {/* Logo & About */}
          <div className="flex justify-between p-12 lg:p-8 lg:gap-8 md:gap-18 sm:flex-col sm:items-center">
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
              {/* Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <SocialIcon key={index} {...link} />
                ))}
              </div>
              {/* Footer Links */}
              <div className="flex justify-center gap-12 mt-8 sm:flex-col lg:justify-start lg:mt-0">
                {footerLinks.map((section, index) => (
                  <FooterSection key={index} {...section} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
