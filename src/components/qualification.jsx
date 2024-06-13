import React from "react";
import VerticalWithCircles from "./qualification/vertical_with_circles";

function Qualification() {
  return (
    <div className=" w-screen flex flex-col   ">
      <div
        className=" py-8 text-center   flex flex-col justify-center bg-slate-200 "
        id="skillHeading"
      >
        <div className="lg:text-4xl text-2xl  mb-5">Qualification</div>
        <div className="text-center text-lg text-gray-600">
          My personal journey
        </div>
      </div>
 
      <div className="w-screen h-[calc(100vh-200px)]   lg:h-[600px] flex items-center justify-center lg:my-24  my-14 ">
        <VerticalWithCircles />
      </div>
    </div>
  );
}

export default Qualification;
