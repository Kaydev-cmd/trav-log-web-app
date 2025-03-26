import React from "react";
import Hero from "../../components/Hero/Hero";
import Icons from "../../components/Icons/Icons";
import Services from "../../components/Services/Services";
import TopDestinations from "../../components/TopDestinations/TopDestinations";
import TravelPoints from "../../components/TravelPoints/TravelPoints";
import KeyFeatures from "../../components/KeyFeatures/KeyFeatures";
import Testimonials from "../../components/Testimonials/Testimonials";
import Subscribe from "../../components/Subscribe/Subscribe";

export const Home = () => {
  return (
    <>
      <Hero />
      <Icons />
      <Services />
      <TopDestinations />
      <TravelPoints />
      <KeyFeatures />
      <Testimonials />
      <Subscribe />
    </>
  );
};
