import React from "react";
import { TiTick } from "react-icons/ti";
import Item from "./skills/item";
function Skills() {

  return (
    <div className=" w-screen flex flex-col    ">
      <div
        className=" py-8 text-center   flex flex-col justify-center bg-slate-200 "
        
      >
        <div className="lg:text-4xl text-2xl  mb-5">Skills</div>
        <div className="text-center text-lg text-gray-600">
          My technical level
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row  justify-center w-screen lg:my-24 lg:gap-24 ">
        <div className="lg:w-1/3 w-full lg:h-fit   lg:shadow-2xl ">
          <h1 className="text-center lg:text-xl font-UrbaneBold my-8">
            Frontend
          </h1>
          <div className="flex flex-row  justify-center gap-10 mb-14">
            <div className="flex flex-col gap-8 ">
              <Item name={"HTML"} level={"basic"} />{" "}
              <Item name={"CSS"} level={"Advanced"} />
              <Item name={"Javascript"} level={"Advanced"} />
            </div>
            <div className="flex flex-col gap-8">
              <Item name={"Bootstrap"} level={"Basic"} />{" "}
              <Item name={"GIT"} level={"Intermediate"} />
              <Item name={"React"} level={"Intermediate"} />
            </div>
          </div>
          {/* items */}
        </div>

        <div className="lg:w-1/3 w-full lg:h-fit   lg:shadow-2xl ">
          <h1 className="text-center lg:text-xl font-UrbaneBold my-8">
            Backend
          </h1>
          <div className="flex flex-row  justify-center gap-10 mb-14">
            <div className="flex flex-col gap-8 ">
              <Item name={"Node JS"} level={"Intermediate"} />{" "}
              <Item name={"Next JS"} level={"Advanced"} />
              <Item name={"Django"} level={"Intermediate"} />
            </div>
            <div className="flex flex-col gap-8">
              <Item name={"MongoDB"} level={"Intermediate"} />{" "}
              <Item name={"MySQL"} level={"Intermediate"} />
              <Item name={"Firebase"} level={"Basic"} />
            </div>
          </div>
          {/* items */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
