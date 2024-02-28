import React from "react";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
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
      <ContactForm />
    </div>
  );
};

export default Contact;
