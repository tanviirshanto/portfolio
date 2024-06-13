import React from "react";
import { MdOutlineDateRange } from "react-icons/md";

function VerticalWithCircles() {
  return (
    <div className="h-[80%]   w-1 bg-gray-300 relative">
      <div className="absolute top-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/3  h-4 rounded-full">
        {" "}
        <div className=" bg-blue-500 w-4 h-4 rounded-full"></div>
        <div className="absolute text-lg md:text-xl md:-top-14 -top-7 right-14 border border-gray-600 rounded-xl w-32 md:w-64 px-4 py-2 flex flex-col gap-1  ">
          M.Sc(Eng.) in ICT
          <p className="text-sm md:text-lg text-gray-500">Comilla University</p>
          <p className="text-sm md:text-lg  text-gray-400 flex gap-2 items-center">
            <MdOutlineDateRange />
            2023-present
          </p>
        </div>
      </div>

      <div className="absolute top-1/3 md:left-1/2 transform -translate-x-1/2  ">
        <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
        <div className="absolute text-lg md:text-xl md:-top-14 -top-24 left-14 border border-gray-600 rounded-xl w-32 md:w-64 px-4 py-2 flex flex-col gap-1  ">
          B.Sc(Eng.) in ICT
          <p className="text-sm md:text-lg text-gray-500">Comilla University</p>
          <p className="text-sm md:text-lg text-gray-400 flex gap-2 items-center">
            <MdOutlineDateRange />
            2018-2022
          </p>
        </div>
      </div>
      <div className="absolute top-[66%] left-1/2 transform -translate-x-1/2 bg-blue-500 w-4 h-4 rounded-full">
        {" "}
        <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
        <div className="absolute text-lg md:text-xl -top-24 md:-top-14 right-14 border border-gray-600 rounded-xl w-32 md:w-64 px-4 py-2 flex flex-col gap-1  ">
          HSC
          <p className="text-sm text-gray-500">
            Ispahani Public School & College
          </p>
          <p className="text-sm md:text-lg text-gray-400 flex gap-2 items-center">
            <MdOutlineDateRange />
            2017
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 w-4 h-4 rounded-full">
        {" "}
        <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
        <div className="absolute text-lg md:text-xl -top-24 md:-top-14 left-14 border border-gray-600 rounded-xl w-32 md:w-64 px-4 py-2 flex flex-col gap-1  ">
          SSC
          <p className="text-sm text-gray-500">
            Ispahani Public School & College
          </p>
          <p className="text-sm md:text-lg text-gray-400 flex gap-2 items-center">
            <MdOutlineDateRange />
            2015
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerticalWithCircles;
