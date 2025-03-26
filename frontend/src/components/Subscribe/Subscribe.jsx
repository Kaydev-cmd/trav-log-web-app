import React from "react";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setMessage("Please enter a valid email address");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail(""); // Clears input after submission
  };

  return (
    <>
      <section className="mt-8">
        <div className="container">
          <div className="flex flex-col items-center gap-12">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-[#F85E9F] text-[22px] mt-8 mb-2 md:text-[20px]">
                Subscribe To Our Newsletter
              </h2>
              <h3 className="text-[38px] font-bold md:text-[26px]">
                Prepare yourself &#38; Let&#39;s explore the
                <br />
                beauty of the world
              </h3>
            </div>

            {/* Subscription Form */}
            <div className="flex xs:flex-col xs:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="p-3 rounded-l-[12px] w-[400px] md:w-[280px] sm:w-[240px] xs:w-[100%] xs:rounded-[12px]"
              />
              <button
                onClick={handleSubscribe}
                aria-label="Subscribe to the newsletter"
                className="bg-[#5D50C6] p-4 rounded-r-[12px] text-white hover:opacity-[.9] xs:rounded-[12px]"
              >
                Subscribe
              </button>
            </div>
            {/* Message Display */}
            {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
