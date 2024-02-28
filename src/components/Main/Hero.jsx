import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto xl:h-screen ">
      <div className="h-full relative">
        <div className="absolute w-full h-full text-gray-200  bg-black/40 flex flex-col justify-center ">
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-center px-8">
              <h1 className=" text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:mb-4 font-kanit">
                Driven by Quality.
              </h1>
              <h1 className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-kanit ">
                Defined by You.
              </h1>
            </div>
          </div>
        </div>
        <img
          className="w-full h-full object-cover object-center"
          src="https://cdn.pixabay.com/photo/2020/12/01/18/06/porsche-911-gt2-5795128_1280.jpg"
          alt="porsche-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
