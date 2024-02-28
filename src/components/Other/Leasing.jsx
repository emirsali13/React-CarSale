import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Main/Footer";

const Leasing = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <Link to="/home">
          <h1 className="text-xl sm:text-2xl lg:text-3xl px-2 duration-100 text-gray-500 border-l-4 border-gray-600 hover:border-indigo-500 hover:border-r-4 hover:border-l-0 cursor-pointer">
            Plus
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
              Drive+
            </span>
          </h1>
        </Link>
      </div>
      <div className="container mx-auto py-12 px-5 mt-0 lg:mt-5 rounded-xl lg:h-screen ">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-12">
          <div className="lg:w-1/3 order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/7144228/pexels-photo-7144228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Leasing"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2  lg:py-0">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Flexible Leasing Options
            </h2>
            <p className="text-lg mb-4">
              At PlusDrive+, we understand that every driver has unique needs.
              That's why we offer flexible leasing options tailored to suit your
              lifestyle and preferences. Whether you're looking for a short-term
              lease or a long-term commitment, we've got you covered.
            </p>
            <p className="text-lg mb-4">
              Our leasing plans come with competitive rates, comprehensive
              maintenance packages, and hassle-free vehicle upgrades. Experience
              the freedom and convenience of leasing with PlusDrive+ today!
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-12 mt-12">
          <div className="lg:w-1/3 order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/7144199/pexels-photo-7144199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Leasing"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 py-6 lg:py-0">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Hassle-Free Leasing Process
            </h2>
            <p className="text-lg mb-4">
              Leasing a vehicle should be a seamless and stress-free experience.
              That's why we've streamlined our leasing process to make it as
              simple as possible for you. From browsing our extensive inventory
              to signing the lease agreement, we're here to guide you every step
              of the way.
            </p>
            <p className="text-lg mb-4">
              With transparent pricing, flexible terms, and exceptional customer
              service, PlusDrive+ makes leasing a car a breeze. Say goodbye to
              the complexities of car ownership and hello to hassle-free leasing
              with PlusDrive+!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Leasing;
