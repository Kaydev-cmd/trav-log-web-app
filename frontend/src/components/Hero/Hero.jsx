import React from "react";

// Reusable Button Component
const Button = ({ text, onClick, icon, variant = "primary" }) => {
  const baseStyles =
    "py-3 px-8 rounded-[12px] transition duration-300 ease-in-out flex items-center gap-2";
  const variants = {
    primary: "bg-[#5d50c6] text-white hover:opacity-90",
    secondary: "bg-white border text-[#191825] hover:bg-gray-100",
    highlight: "bg-white text-[#f85e9f] hover:bg-[#000]",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {icon && <img src={icon} alt="icon" className="w-5 h-5" />}
      {text}
    </button>
  );
};

const Hero = () => {
  return (
    <>
      <section className="mt-8">
        <div className="container flex items-center justify-between sm:justify-center">
          <div className="flex flex-col items-center justify-between">
            {/* Left Content */}
            <div className="flex flex-col max-w-lg sm:items-center sm:text-center">
              <div>
                <Button text="Explore the world!" variant="highlight" />
              </div>
              <h2 className="text-[68px] xl:text-[48px] lg:text-[38px] md:text-[28px] sm:text-[38px] font-bold mt-4">
                Travel to <span className="text-[#f85e9f]">top</span>
                <br />
                <span className="text-[#f85e9f]">destinations</span> around{" "}
                <br />
                the world
              </h2>

              <p className="text-[#191825] mt-4 lg:text-[14px] md:text-[12px] sm:text-[14px]">
                We always make our customers happy by <br />
                providing as many choices as possible.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 lg:justify-start sm:justify-center">
              <Button
                text="Get Started"
                onClick={() => alert("Getting Started!")}
              />
              <Button
                text="Watch Demo"
                icon="/images/home/play-circle.5 1.png"
                variant="secondary"
              />
            </div>
          </div>

          {/* Right Hero Image */}
          <img
            src="/images/home/Hero-banner.png"
            alt="Travel the world"
            className="xl:w-[600px] lg:w-[400px] md:w-[320px] sm:hidden"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
