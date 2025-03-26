import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Mark Smith",
    role: "Travel Enthusiast",
    image: "/images/home/Ellipse 22.png",
    rating: "/images/home/Frame 54.png",
    feedback:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
  {
    name: "John Doe",
    role: "Adventure Blogger",
    image: "/images/home/Ellipse 22.png",
    rating: "/images/home/Frame 54.png",
    feedback:
      "Traveling has changed my life! This service made it even better with seamless experiences and amazing destinations.",
  },
  {
    name: "Jane Williams",
    role: "Frequent Traveller",
    image: "/images/home/Ellipse 22.png",
    rating: "/images/home/Frame 54.png",
    feedback:
      "I've never had a better travel experience. The services were excellent, and I highly recommend them to anyone.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  const handlePrev = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  const { name, role, image, rating, feedback } = testimonials[currentIndex];

  return (
    <>
      <section className="bg-[url('/images/home/Layer_1.png')] bg-cover bg-center bg-no-repeat mt-8">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="p-6 transition-transform duration-300 bg-white border rounded-full md:p-4 sm:p-2 duration hover:scale-105"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />
            </button>

            {/* Testimonial Content */}
            <div className="flex flex-col items-center gap-8">
              <h3 className="text-[#F85E9F] font-semibold tracking-wide">
                Testimonials
              </h3>
              <h2 className="font-bold normal-case xs:text-[32px]">
                Trust our clients
              </h2>
              <img
                src={image}
                alt={`${name}'s picture`}
                className="w-20 h-20 rounded-full"
              />
              <p>
                <span className="text-[20px] p-1 text-[#FF5722] font-bold xs:text-[16px]">
                  {name}
                </span>
                /
                <span className="text-[16px] p-1 text-[#191825] xs:text-[14px]">
                  {role}
                </span>
              </p>
              <img src={rating} alt="Customer Rating Stars" className="w-32" />
              <p className="text-center xs:text-[12px]">{feedback}</p>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="bg-[#5d50c6] p-6 rounded-full text-white md:p-4 sm:p-2 transition-transform duration-300 hover:scale-105"
              aria-label="Next testimonial"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
