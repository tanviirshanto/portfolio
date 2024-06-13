import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="lg:my-14">
      <div className="text-4xl font-UrbaneBold flex justify-center text-slate-700">
        Tanvir
      </div>
      <div className="flex my-10 text-5xl gap-5 justify-center">
        <Link href="https://www.facebook.com/tanviirshanto" className="">
          <FaFacebookSquare className="" />
        </Link>
        <Link href="https://github.com/tanviirshanto">
          <FaGithubSquare />
        </Link>
        <Link href="linkedin.com/in/tanviir-hossen-528343244">
          <FaLinkedin />
        </Link>
          </div>
          <div className='text-slate-500 my-14 lg:my-24 text-xl flex justify-center' >
              © All right Reserved
          </div>
    </div>
  );
}

export default Footer