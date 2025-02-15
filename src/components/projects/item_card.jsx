import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoArrowForward } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

function ItemCard({image_url,name,demo_link}) {
  return (
    <div className=" max-w-96   lg:border border-gray-300  rounded-xl   p-4 flex flex-col gap-5 md:h-[22rem] ">
      <div className="rounded-xl h-[80%]  overflow-hidden ">
        {" "}
 
        <Image
          src={image_url}
          width={600}
          height={400}
          alt="project"
          className=" w-full rounded-xl hover:scale-110 transition-all"
        />
      </div>
      <div className='flex flex-col justify-between items-center mb-2 h-[20%] '>
        <div className="text-xl   ">{name}</div>
      <Link
        href={demo_link}
        className="flex items-center text-lg   gap-2 text-gray-500 hover:text-blue-500 text-nowrap "
         
      >
        See Demo <IoArrowForward />
      </Link>
      </div>
      
    </div>
  );
}

export default ItemCard