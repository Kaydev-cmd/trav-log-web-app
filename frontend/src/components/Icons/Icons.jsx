import React from "react";

const iconData = [
  { src: "/images/home/Group.png", alt: "Trip Advisor" },
  { src: "/images/home/Group 2.png", alt: "Expedia" },
  { src: "/images/home/Group 3.png", alt: "Booking.com" },
  { src: "/images/home/Group 9235.png", alt: "Airbnb" },
  { src: "/images/home/Group 4.png", alt: "Orbitz" },
];

const Icons = () => {
  return (
    <>
      <section className="mt-8">
        <div className="container px-6 mx-auto">
          <div className="flex flex-wrap justify-between gap-6 md:justify-between xs:gap-0">
            {iconData.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="object-contain h-auto w-50 sm:w-16 xs:w-14 lg:w-[120px] md:w-[80px]"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Icons;
