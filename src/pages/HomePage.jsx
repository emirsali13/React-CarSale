import React from "react";
import Navbar from "../components/Main/Navbar";
import Hero from "../components/Main/Hero";
import HeadlineCards from "../components/Main/HeadlineCards";
import Cars from "../components/Main/Cars";
import Category from "../components/Main/Category";
import Footer from "../components/Main/Footer";

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <HeadlineCards />
      <Cars />
      <Category />
      <Footer />
    </div>
  );
};

export default HomePage;
