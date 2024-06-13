"use client"
import Link from "next/link";
import React, { useState } from "react";

import Sidebar from "./navbar/sidebar"
function Navbar() {
  
  return (
    <div className="fixed bg-white z-50 top-0 w-screen">
      <div className="flex text-xl justify-between px-5 lg:px-0 lg:max-w-[80%]  mx-auto lg:py-10 py-5  ">
        <div className="font-UrbaneBold">
          <Link href="/">Tanvir</Link>
        </div>
        <div className=" space-x-10 hidden lg:block ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/qualification">Qualification</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        
         <Sidebar />
        
      </div>
    </div>
  );
}

export default Navbar;
