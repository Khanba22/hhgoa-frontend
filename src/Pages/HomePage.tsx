import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Features from "../Components/Features";
import Team from "../Components/Team";
import Footer from "../Components/Footer";
import MarqueeWidget from "../Components/MarqueeWidget";

const HomePage = () => {
  return (
    <>
      <MarqueeWidget />
      <Header />
      <Hero />
      <About />
      <Banner />
      <Features />
      <Team />
      <Footer />
    </>
  );
};

export default HomePage;
