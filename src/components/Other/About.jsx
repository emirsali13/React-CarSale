import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Main/Footer";

const About = () => {
  const images = [
    "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6285131/pexels-photo-6285131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  return (
    <>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg mb-6">
                At PlusDrive+ our mission is to revolutionize the automotive
                industry by providing cutting-edge technology and exceptional
                services to our customers. We strive to deliver the ultimate
                driving experience while ensuring safety, comfort, and
                sustainability.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-lg mb-6">
                Our vision is to become the leading provider of innovative
                automotive solutions worldwide. We aim to set new standards for
                excellence in customer service, product quality, and
                environmental responsibility, driving positive change in the
                automotive landscape.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Carousel showThumbs={false}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full max-w-md rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </Carousel>
              <Link
                to="/contact"
                className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition duration-300 ease-in-out inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
