import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ButtonX from "./button";
function Hero() {
  return (
    <div className="flex flex-col h-screen lg:h-screen   w-screen justify-center items-center border lg:py-32 py-20 px-3">
      <div className="flex flex-col-reverse justify-between lg:w-[80%] lg:flex-row ">
        <div className="lg:w-[15%] flex lg:flex-col flex-row justify-center text-3xl gap-5   ">
          <Link href="https://www.facebook.com/tanviirshanto">
            <FaFacebook />
          </Link>
          <Link href="https://github.com/tanviirshanto">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/tanviir-hossen-528343244">
            <FaLinkedin />
          </Link>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:w-[45%] justify-between py-5 gap-5 lg:gap-0 ">
          <h1 className="lg:text-5xl text-3xl font-UrbaneBold ">
            Tanvir Shanto
          </h1>
          <div className="relative w-full">
            <h1 className="absolute lg:left-28 lg:right-14 md:right-48   right-24 lg:-top-4 -top-3 z-10  text-gray-600 lg:text-2xl text-md md:text-lg ">
              Full Stack Developer
            </h1>
            <hr className="lg:w-24 w-0 lg:h-1 h-0  bg-gray-600 border-0 rounded  " />
          </div>
          <h1
            className="md:w-[60%] lg:text-lg 
           text-xs text-gray-400 text-center  lg:text-left px-5 lg:px-0 pt-5"
          >
            Creative full stack developer passionate about crafting seamless
            digital experiences
          </h1>
          <div className=" lg:w-[50%]">
            <ButtonX name={"Say Hello"} />
          </div>
        </div>
        <div className="lg:w-[40%] flex lg:justify-start justify-center ">
          <Image
            src="/profile.png"
            height={500}
            width={500}
            alt=""
            className="rounded-full w-48 h-48   lg:w-[22rem] lg:h-[22rem]"
          />
        </div>
      </div>{" "}
    </div>
  );
}

export default Hero;
