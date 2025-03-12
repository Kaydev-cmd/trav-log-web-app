import React from "react";

const keyFeatures = [
  {
    id: 1,
    imgSrc: "/images/home/Group 9239.png",
    altText: "Location",
    title: "We offer best services",
    description: "Lorem Ipsum is not simply random text",
  },
  {
    id: 2,
    imgSrc: "/images/home/Group 9240.png",
    altText: "Calender",
    title: "Schedule your trip",
    description: "It has roots in a piece of classical",
  },
  {
    id: 3,
    imgSrc: "/images/home/Group 9241.png",
    altText: "Coupon",
    title: "Get discounted coupons",
    description: "Lorem Ipsum is not simply random text",
  },
];

const FeatureCard = ({ imgSrc, altText, title, description }) => {
  return (
    <div className="flex items-center justify-around gap-8 p-4 transition-transform duration-300 border rounded-3xl hover:scale-105">
      <img src={imgSrc} alt={altText} className="lg:w-16" />
      <div className="right-wrapper">
        <h5 className="font-bold text-[18px] xs:text-[14px]">{title}</h5>
        <p className="text-[#191825] xs:text-[12px]">{description}</p>
      </div>
    </div>
  );
};

export const KeyFeaturesCards = () => {
  return (
    <div className="flex flex-col gap-8 xl:gap-4">
      {keyFeatures.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  );
};

export default KeyFeaturesCards;
