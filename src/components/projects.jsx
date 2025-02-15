import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import ItemCard from './projects/item_card';


function Projects() {
  return (
    <div className=" w-screen flex flex-col  ">
      <div
        className=" py-8 text-center  flex flex-col justify-center bg-slate-200 "
        id="skillHeading"
      >
        <div className="lg:text-4xl text-2xl  mb-5 ">Projects</div>
        <div className="text-center text-lg text-gray-600">My recent works</div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center  w-screen lg:w-[80%] gap-10 mx-auto my-14 lg:my-32">
        <ItemCard
          image_url={"/foodcourt.jpg"}
          name="Food Court"
          demo_link={"https://foodcourt-two.vercel.app/"}
        />
        <ItemCard
          image_url={"/ip-tracker.jpg"}
          name="IP Address Tracker"
          demo_link={"https://ip-tracker-rq95.vercel.app/"}
        />
        <ItemCard image_url={"/demo.jpg"} name="Edu Tech" demo_link={""} />
      </div>
    </div>
  );
}

export default Projects