import React, { useState } from "react";
import { data } from "../../data/data";
import { CiCirclePlus } from "react-icons/ci";

const Cars = () => {
  const [cars, setCars] = useState(data);
  const [typeFilter, setTypeFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);
  const [activeBrand, setActiveBrand] = useState(null);
  const [activePrice, setActivePrice] = useState(null);

  const filterTypeHandler = () => {
    setTypeFilter(!typeFilter);
  };

  const filterPriceHandler = () => {
    setPriceFilter(!priceFilter);
  };

  const filterType = (category) => {
    setCars(
      data.filter((item) => {
        return item.category === category;
      })
    );
    setActiveBrand(category);
    setActivePrice(null);
  };

  const filterPrice = (price) => {
    let filteredCars;
    if (activeBrand) {
      if (price === "All") {
        filteredCars = data.filter((item) => item.category === activeBrand);
      } else {
        filteredCars = data.filter(
          (item) => item.category === activeBrand && item.price === price
        );
      }
    } else {
      filteredCars =
        price === "All" ? data : data.filter((item) => item.price === price);
    }
    setCars(filteredCars);
    setActivePrice(price);
  };

  return (
    <div name="cars" id="cars" className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-gray-600 font-bold text-4xl text-center mb-[50px]">
        Best Sellers: Explore Our Most Popular Models.
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <div className="flex items-center  mb-2 gap-[20px] w-[100px] ">
            <p className="font-bold text-gray-700 px-1">Brand</p>
            <CiCirclePlus
              size={30}
              className="hover:-rotate-45 hover:scale-110 duration-300 cursor-pointer"
              onClick={filterTypeHandler}
            />
          </div>
          {typeFilter ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <button
                onClick={() => {
                  setCars(data);
                  setActiveBrand(null);
                }}
                className={`m-1 duration-300  text-gray-500  border-b-4 hover:border-gray-500 ${
                  activeBrand === null && "active"
                }`}
              >
                All
              </button>
              <button
                onClick={() => filterType("porsche")}
                className={`m-1 duration-300  text-gray-500  border-b-4 hover:border-gray-500 ${
                  activeBrand === "porsche" && "active"
                }`}
              >
                Porsche
              </button>

              <button
                onClick={() => filterType("opel")}
                className={`m-1 duration-300  text-gray-500  border-b-4 hover:border-gray-500 ${
                  activeBrand === "opel" && "active"
                }`}
              >
                Opel
              </button>
              <button
                onClick={() => filterType("bmw")}
                className={`m-1 duration-300  text-gray-500  border-b-4 hover:border-gray-500 ${
                  activeBrand === "bmw" && "active"
                }`}
              >
                BMW
              </button>
              <button
                onClick={() => filterType("audi")}
                className={`m-1 duration-300  text-gray-500  border-b-4 hover:border-gray-500 ${
                  activeBrand === "audi" && "active"
                }`}
              >
                Audi
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="flex items-center lg:justify-end  mb-2 lg:w-full gap-[25px]">
            <p className="font-bold text-gray-700 px-1">Price</p>
            <CiCirclePlus
              size={30}
              className="hover:-rotate-45 hover:scale-110 duration-300 cursor-pointer"
              onClick={filterPriceHandler}
            />
          </div>
          {priceFilter ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <button
                onClick={() => {
                  setCars(data);
                  setActivePrice(null);
                  setActiveBrand(null);
                }}
                className={`m-1 duration-300  text-gray-500  border-b-4 hover:border-gray-500 ${
                  activePrice === null && "active"
                }`}
              >
                All
              </button>
              <button
                onClick={() => filterPrice("$")}
                className={`m-1 duration-300  text-gray-500  border-b-4 hover:border-gray-500 ${
                  activePrice === "$" && "active"
                }`}
              >
                $
              </button>
              <button
                onClick={() => filterPrice("$$")}
                className={`m-1 duration-300  text-gray-500  border-b-4 hover:border-gray-500 ${
                  activePrice === "$$" && "active"
                }`}
              >
                $$
              </button>
              <button
                onClick={() => filterPrice("$$$")}
                className={`m-1 duration-300  text-gray-500  border-b-4 hover:border-gray-500 ${
                  activePrice === "$$$" && "active"
                }`}
              >
                $$$
              </button>
              <button
                onClick={() => filterPrice("$$$$")}
                className={`m-1 duration-300  text-gray-500  border-b-4 hover:border-gray-500 ${
                  activePrice === "$$$$" && "active"
                }`}
              >
                $$$$
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
        {cars.map((item, index) => (
          <div
            key={index}
            className="border shadow-2xl hover:scale-105 duration-300 cursor-pointer rounded-xl"
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-green-500 text-gray-50 p-1 rounded-sm">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
