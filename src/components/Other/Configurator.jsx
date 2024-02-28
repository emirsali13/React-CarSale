import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data/data";
import Footer from "../Main/Footer";

const Configurator = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    brand: "",
    model: "",
    color: "Red",
    wheels: "Standard",
    interior: "Leather",
  });

  const handleContinueButtonClick = () => {
    alert("Your car will be ready soon!");
  };

  const handleOptionChange = (optionType, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionType]: value,
    });
  };

  const handleBrandSelect = (brand) => {
    setSelectedOptions({
      ...selectedOptions,
      brand,
      model: "",
    });
  };

  const handleModelSelect = (model) => {
    setSelectedOptions({
      ...selectedOptions,
      model,
    });
  };

  const { brand, model, color, wheels, interior } = selectedOptions;

  const brands = Array.from(new Set(data.map((car) => car.category)));

  const modelsForSelectedBrand = data
    .filter((car) => car.category === brand)
    .map((car) => car.name);

  const colorClasses = {
    Red: "bg-red-500",
    Blue: "bg-blue-500",
    Black: "bg-gray-900",
    Gray: "bg-gray-500",
    Yellow: "bg-yellow-400",
  };

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
      <div className="flex  items-center justify-center mt-4">
        <h1 className="text-2xl mb-4 md:text-4xl lg:mb-0 lg:mt-2">
          Configure Your Dreams
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row max-w-7xl w-full px-4 py-12 lg:h-screen">
          <div className="lg:w-1/2 lg:mr-4">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 sm:mt-0 ">Car Brands</h2>
              <div className="flex flex-col space-y-1 sm:space-y-0 sm:space-x-4 sm:flex-row">
                {brands.map((brand) => (
                  <div
                    key={brand}
                    className={`p-2 rounded-md cursor-pointer ${
                      selectedOptions.brand === brand
                        ? "bg-gray-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleBrandSelect(brand)}
                  >
                    {brand.charAt(0).toUpperCase() + brand.slice(1)}
                  </div>
                ))}
              </div>
            </div>
            {modelsForSelectedBrand.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Models</h2>
                <div className="flex flex-col space-y-1 sm:space-y-0 sm:space-x-4 sm:flex-row">
                  {modelsForSelectedBrand.map((model) => (
                    <div
                      key={model}
                      className={`p-2 rounded-md cursor-pointer ${
                        selectedOptions.model === model
                          ? "bg-gray-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => handleModelSelect(model)}
                    >
                      {model}
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold mb-2 w-full">Options</h2>
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <p className="text-sm font-bold mb-1 mt-1 w-full">
                        Color
                      </p>
                      <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:space-x-4">
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.color === "Red"
                              ? "bg-red-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => handleOptionChange("color", "Red")}
                        >
                          Red
                        </button>
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.color === "Blue"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => handleOptionChange("color", "Blue")}
                        >
                          Blue
                        </button>
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.color === "Black"
                              ? "bg-gray-700 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => handleOptionChange("color", "Black")}
                        >
                          Black
                        </button>
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.color === "Gray"
                              ? "bg-gray-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => handleOptionChange("color", "Gray")}
                        >
                          Gray
                        </button>
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.color === "Yellow"
                              ? "bg-yellow-400 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => handleOptionChange("color", "Yellow")}
                        >
                          Yellow
                        </button>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm font-bold mb-1 mt-2 ">Wheels</p>
                      <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:space-x-4">
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.wheels === "Standard"
                              ? "bg-gray-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() =>
                            handleOptionChange("wheels", "Standard")
                          }
                        >
                          Standard
                        </button>
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.wheels === "Sport"
                              ? "bg-gray-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => handleOptionChange("wheels", "Sport")}
                        >
                          Sport
                        </button>
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.wheels === "Steel"
                              ? "bg-gray-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => handleOptionChange("wheels", "Steel")}
                        >
                          Steel
                        </button>
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.wheels === "Chrome"
                              ? "bg-gray-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => handleOptionChange("wheels", "Chrome")}
                        >
                          Chrome
                        </button>
                      </div>
                    </div>
                    <div className="w-full mb-4 lg:mb-0">
                      <p className="text-sm font-bold mb-1 mt-2">Interior</p>
                      <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:space-x-4">
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.interior === "Leather"
                              ? "bg-gray-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() =>
                            handleOptionChange("interior", "Leather")
                          }
                        >
                          Leather
                        </button>
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.interior === "Fabric"
                              ? "bg-gray-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() =>
                            handleOptionChange("interior", "Fabric")
                          }
                        >
                          Fabric
                        </button>
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.interior === "Suede"
                              ? "bg-gray-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() =>
                            handleOptionChange("interior", "Suede")
                          }
                        >
                          Suede
                        </button>
                        <button
                          className={`py-2 px-4 rounded-md ${
                            selectedOptions.interior === "Wooden"
                              ? "bg-gray-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() =>
                            handleOptionChange("interior", "Wooden")
                          }
                        >
                          Wooden
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 bg-gray-700 text-white rounded p-8 h-[300px] rounded-xl relative">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold  mb-4">Selected Options</h2>
              <p className="text-2xl font-bold mb-4">
                {brand.charAt(0).toUpperCase() + brand.slice(1)}
              </p>
            </div>
            <p className="mb-2">Model: {model}</p>
            <p className="mb-2">Color: {color}</p>
            <p className="mb-2">Wheels: {wheels}</p>
            <p className="mb-2">Interior: {interior}</p>
            <div
              className={`w-[150px] sm:w-[200px] h-[50px] absolute bottom-0 right-0 rounded-tl-lg ${colorClasses[color]} hover:h-[50%] transition-all`}
            ></div>

            <div className="mt-10">
              <Link
                to="/home"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:text-gray-700  dark:hover:bg-white dark:focus:ring-blue-800 transition-all"
                onClick={handleContinueButtonClick}
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Configurator;
