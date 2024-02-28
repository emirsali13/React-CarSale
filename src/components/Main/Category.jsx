import React from "react";
import { categories } from "../../data/data";

const Category = () => {
  return (
    <div name="collection" className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-gray-600 mb-4 font-bold text-4xl text-center">
        Explore Our Diverse Collection.
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
        {categories.map((item, index) => (
          <div
            className="shadow-md mb-4 p-4 bg-white rounded-lg p-4 flex justify-center items-center cursor-pointer hover:scale-105 duration-200 border-b-4 border-gray-500 hover:border-r-4"
            key={index}
          >
            <img
              className="w-[100px] h-[100px] object-contain"
              src={item.image}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
