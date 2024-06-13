import Link from 'next/link';
import React from 'react'

function ButtonX({name}) {
  return (
    <Link
      className="group inline-flex items-center justify-center rounded-md bg-[#3a99ad] px-3 py-2 lg:px-6 lg:py-4 text-md lg:text-lg font-UrbaneBold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
      href="https://wa.me/+8801832892309"
    >
      {name}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </Link>
  );
}

export default ButtonX