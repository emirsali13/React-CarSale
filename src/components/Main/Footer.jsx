import React from "react";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center">
      <div className="container mx-auto py-8 w-[80%] md:w-[100%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h6 className="text-lg font-semibold mb-4">About</h6>
            <p className="text-sm">
              PlusDrive: Redefining car buying. From compact city cars to luxury
              rides, we've got your perfect match. Let our experts guide you.
              Drive with PlusDrive - it's a plus.
            </p>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Location</h6>
            <h2>We are located in Sofia, Bulgaria.</h2>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Contact Us</h6>
            <ul>
              <li className="flex justify-center items-center">
                <a
                  href="mailto: emsali.tech@gmail.com"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FcGoogle /> emsali.tech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="flex justify-center items-center">
          <p className="text-smr">
            Copyright &copy; 2024 All Rights Reserved by {""}
            <a
              href="https://github.com/emirsali13"
              target="_blank"
              className="text-blue-400"
            >
              Emir Sali
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
