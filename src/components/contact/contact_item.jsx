import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
function ContactItem({name, email, compose, icon}) {
    return (
      <div
        className="w-full lg:w-[50%] h-40 border border-gray-300 
    flex flex-col items-center justify-center text-lg  gap-2  "
      >
        <div> {icon}</div>
        <div>{name}</div>
        <div className="text-sm text-gray-500">{email}</div>
        <div className="">
          <Link
            href={compose}
            className="flex gap-2 text-sm text-gray-500 items-center hover:text-black "
          >
            Write me <IoArrowForward />
          </Link>
        </div>
      </div>
    );
}

export default ContactItem;
