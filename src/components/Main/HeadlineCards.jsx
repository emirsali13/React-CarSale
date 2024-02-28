import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      <div className="rounded-sm relative">
        <div className="absolute w-full h-full bg-black/45 rounded-t-lg  sm:rounded-xl text-white flex items-center justify-center text-center">
          <p className="font-bold text-2xl px-2 pt-4">
            Unmatched Variety, Your Perfect Car Awaits!
          </p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-t-lg sm:rounded-xl "
          src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/45  text-white flex items-center justify-center text-center sm:rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">
            Driving Dreams Worldwide.
          </p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full h-full object-cover sm:rounded-xl "
          src="https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/45 rounded-b-lg sm:rounded-xl text-white flex items-center justify-center text-center">
          <p className="font-bold text-2xl px-2 pt-4">
            Streamlined Purchase, Elevate Your Journey Instantly!
          </p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-b-lg sm:rounded-xl"
          src="https://images.pexels.com/photos/7144199/pexels-photo-7144199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
