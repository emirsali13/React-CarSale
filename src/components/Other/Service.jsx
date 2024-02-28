import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data/data";

import Footer from "../Main/Footer";

const Service = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    carType: "",
    model: "",
    serviceType: "",
    additionalServices: [],
  });

  const handleContinueButtonClick = () => {
    alert("Your service request has been submitted!");
  };

  const handleCarTypeSelect = (carType) => {
    setSelectedOptions({
      ...selectedOptions,
      carType,
      model: "",
    });
  };

  const handleModelSelect = (model) => {
    setSelectedOptions({
      ...selectedOptions,
      model,
    });
  };

  const handleServiceTypeSelect = (serviceType) => {
    setSelectedOptions({
      ...selectedOptions,
      serviceType,
    });
  };

  const handleAdditionalServiceToggle = (service) => {
    const additionalServices = [...selectedOptions.additionalServices];
    const index = additionalServices.indexOf(service);
    if (index === -1) {
      additionalServices.push(service);
    } else {
      additionalServices.splice(index, 1);
    }
    setSelectedOptions({
      ...selectedOptions,
      additionalServices,
    });
  };

  const { carType, model, serviceType, additionalServices } = selectedOptions;

  const carTypes = Array.from(new Set(data.map((car) => car.category)));

  const modelsForSelectedCarType = data
    .filter((car) => car.category === carType)
    .map((car) => car.name);

  const serviceTypes = ["Engine", "Tires", "Brakes", "Oil Change", "Other"];

  const additionalServiceOptions = [
    "Car Wash",
    "Interior Cleaning",
    "Alignment",
    "Battery Replacement",
    "Air Conditioning Service",
  ];

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
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Schedule Service
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold mb-4">Select Car Type</h2>
              <div className="space-y-2">
                {carTypes.map((carType) => (
                  <button
                    key={carType}
                    className={`block w-full py-2 px-4 rounded-md focus:outline-none ${
                      selectedOptions.carType === carType
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => handleCarTypeSelect(carType)}
                  >
                    {carType.charAt(0).toUpperCase() + carType.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              {carType && (
                <>
                  <h2 className="text-xl font-semibold mb-4">Select Model</h2>
                  <div className="space-y-2">
                    {modelsForSelectedCarType.map((model) => (
                      <button
                        key={model}
                        className={`block w-full py-2 px-4 rounded-md focus:outline-none ${
                          selectedOptions.model === model
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                        onClick={() => handleModelSelect(model)}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                Select Service Type
              </h2>
              <div className="space-y-2">
                {serviceTypes.map((type) => (
                  <button
                    key={type}
                    className={`block w-full py-2 px-4 rounded-md focus:outline-none ${
                      selectedOptions.serviceType === type
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => handleServiceTypeSelect(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                Additional Services
              </h2>
              <div className="space-y-2">
                {additionalServiceOptions.map((option) => (
                  <button
                    key={option}
                    className={`block w-full py-2 px-4 rounded-md focus:outline-none ${
                      additionalServices.includes(option)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => handleAdditionalServiceToggle(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Selected Options</h2>
            <p>
              <span className="font-semibold">Car Type:</span>{" "}
              {carType.charAt(0).toUpperCase() + carType.slice(1)}
            </p>
            <p>
              <span className="font-semibold">Model:</span> {model}
            </p>
            <p>
              <span className="font-semibold">Service Type:</span> {serviceType}
            </p>
            {additionalServices.length > 0 && (
              <p>
                <span className="font-semibold">Additional Services:</span>{" "}
                {additionalServices.join(", ")}
              </p>
            )}
          </div>

          <div className="mt-8">
            <Link to="/home" onClick={handleContinueButtonClick}>
              <button
                className={`block w-full py-3 px-4 rounded-md font-semibold text-lg focus:outline-none focus:ring focus:ring-blue-300 ${
                  !carType || !model || !serviceType
                    ? "bg-red-500 text-white cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                disabled={!carType || !model || !serviceType}
              >
                Submit Service Request
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
