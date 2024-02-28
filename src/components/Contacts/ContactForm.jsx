import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FiPhone } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import Footer from "../Main/Footer";

const ContactForm = () => {
  const [flip, setFlip] = useState(false);
  const [state, handleSubmit] = useForm("xbjnyjeo");
  const [formState, setFormState] = useState({
    email: "",
    reason: "",
    message: "",
  });

  const handleFlip = () => {
    setFlip(!flip);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const isFormValid = formState.email && formState.reason && formState.message;

  const submitForm = (e) => {
    e.preventDefault();
    if (isFormValid) {
      handleSubmit(e);
    }
  };

  if (state.succeeded) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-xl font-semibold text-green-600">
            Thanks for reaching out!
          </p>

          <p className="mt-4">We'll get back to you as soon as possible.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-center">
              <form onSubmit={submitForm} className="w-full max-w-lg">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-800 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="reason"
                    className="block text-lg font-medium text-gray-800 mb-2"
                  >
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formState.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="">-- Select a reason --</option>
                    <option value="Customer Support">Customer Support</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  <ValidationError
                    prefix="Reason"
                    field="reason"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-800 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    rows="4"
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!isFormValid || state.submitting}
                  className={`w-full py-3 rounded-md font-semibold text-lg focus:outline-none ${
                    !isFormValid
                      ? "bg-red-500 text-white cursor-not-allowed"
                      : state.submitting
                      ? "bg-blue-500 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  {state.submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-center w-full items-center">
              <div className="w-full  text-center border-b-2 pb-2">
                <h2 className="text-2xl font-semibold mb-4">Working Hours</h2>
                <p className="text-lg">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-lg">Saturday: 9:00 AM - 3:00 PM</p>
                <p className="text-lg">Sunday: Closed</p>
              </div>
              {!flip ? (
                <div
                  onClick={handleFlip}
                  className="max-w-sm rounded overflow-hidden shadow-lg mt-10 w-full h-[50%]  transition-all hover:cursor-pointer"
                >
                  {/* Card content */}
                  <div className="px-6 pb-6 sm:py-4 w-full h-[250px] sm:h-full bg-[#415a77] flex items-center justify-center relative group">
                    <div className="w-[100px] h-[80px] border-4 z-10 border-[#ffecd1]"></div>
                    <h1 className="ml-[-61px] text-3xl z-10 text-[#ffecd1]">
                      Plus Drive+
                    </h1>
                    {/* Apply hover effect to this div */}
                    <div className="w-[20px] h-full bg-[#003049] absolute top-0 left-0 group-hover:w-full transition-all z-0"></div>
                  </div>
                </div>
              ) : (
                <div
                  className="max-w-sm rounded overflow-hidden shadow-lg mt-10 w-full h-[50%] hover:cursor-pointer hover:scale-105 transition-all"
                  onClick={handleFlip}
                >
                  {/* Card content */}
                  <div className="px-6 py-4 w-full h-full bg-[#415a77] relative group ">
                    {/* Name */}
                    <div className="flex justify-between items-center ">
                      <div className="font-bold text-xl mb-2 z-10 text-[#ffecd1]">
                        Emir Sali
                      </div>
                      <div className="font-bold text-md mb-2  z-10 text-[#ffecd1]">
                        Plus<span className="text-[#ecd1ab]">Drive+</span>
                      </div>
                    </div>

                    {/* Phone number */}

                    <div className="flex flex-col mt-10 text-[#ffecd1]">
                      <div className="text-xl mb-2 z-10 flex items-center">
                        <FiPhone className="mr-2" />
                        +359 123 456 789
                      </div>
                      <div className="text-xl mb-2 z-10 flex items-center">
                        <CgMail className="mr-2" />
                        emsali.tech@gmail.com
                      </div>
                      <div className="text-xl mb-2 z-10 flex items-center mb-10">
                        <IoLocationOutline className="mr-2" />
                        Sofia, Bulgaria
                      </div>
                    </div>
                    <div className="w-full h-full bg-[#003049] absolute top-0 right-0 z-0 group-hover:w-[20px] delay-100 transition-all"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
