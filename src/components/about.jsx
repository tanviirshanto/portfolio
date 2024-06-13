import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlBadge } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { BsGift } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";

function About() {
  return (
    <div className="flex flex-col  w-screen justify-start border items-center gap-14 lg:gap-0 ">
      <div
        className=" py-8 text-center  flex flex-col justify-center bg-slate-200 w-screen"
        id="skillHeading"
      >
        <div className="lg:text-4xl text-2xl  mb-5">About Me</div>
        <div className="text-center text-lg text-gray-600">My introduction</div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center lg:w-[65%] my-10 lg:my-24 mx-auto">
        <div className="">
          <Image
            src="/profile.png"
            width={700}
            height={700}
            alt=""
            className="md:w-[400px] md:h-[400px]  rounded-3xl w-48 "
          />
        </div>
        <div className="lg:w-[45%] flex flex-col justify-between items-center lg:items-start gap-10 lg:gap-0 pb-8 ">
          <div className=" flex  justify-center lg:justify-between md:gap-5 gap-2 mx-2 lg:mx-0 ">
            <div className="lg:min-w-36 lg:min-h-40 md:min-w-32 md:min-h-32 max-w-24 max-h-24 text-sm  border border-gray-300 shadow-lg rounded-2xl  flex flex-col items-center justify-center gap-2 py-2 px-3 ">
              <SlBadge className="lg:text-4xl" />
              <h1>Experience</h1>
              <h2 className="text-gray-600">Fresher</h2>
            </div>
            <div className="lg:min-w-36 lg:min-h-40 md:min-w-32 md:min-h-32 max-w-24 max-h-24 text-sm border border-gray-300 shadow-lg rounded-2xl  flex flex-col items-center justify-center gap-2 py-2 px-3">
              <BsGift className="lg:text-4xl" />
              <h1>Projects</h1>
              <h2 className="text-gray-600">2 done</h2>
            </div>
            <div
              className="lg:min-w-36 lg:min-h-40 md:min-w-32 md:min-h-32 max-w-24 max-h-24 text-sm border border-gray-300 shadow-lg rounded-2xl  flex flex-col items-center justify-center 
            gap-2 py-2 px-3 "
            >
              <BiSupport className="lg:text-4xl" />
              <h1>Support</h1>
              <h2 className="text-gray-600 text-xs">24/7 hours</h2>
            </div>
          </div>

          <div className="lg:w-[100%] md:w-[70%] lg:my-10 lg:mx-0 mx-5 md:mx-auto ">
            <h1 className="md:text-lg text-gray-500 ">
              I am an aspiring Full Stack Web Developer with a strong foundation
              in both front-end and back-end technologies. I am passionate about
              building dynamic and responsive web applications. 
            </h1>
          </div>
          <div className=" mx-5 lg:mx-0">
            <Link
              href="https://drive.google.com/uc?export=download&id=1bZGtF5uJMeWPuhakfmixkDMvm8DQzeVf"
              className="py-6 px-4 text-sm lg:text-xl bg-gray-700 text-white rounded-xl flex items-center lg:gap-3 text-nowrap w-40 lg:w-56"
              download
            >
              Download CV
              <IoDocumentTextOutline className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
