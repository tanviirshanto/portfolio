import Link from 'next/link';
import React, { useState } from 'react'
import { RiAppsFill } from "react-icons/ri";
function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className=' lg:hidden ' >
            <div className='z-20 fixed right-8 ' ><button className="" onClick={() => setIsOpen(!isOpen)}>
          <RiAppsFill />
        </button>
            </div> 
        <div
          className={`fixed bg-slate-200 h-screen w-[calc(100vh/3)] top-0 z-10 ${
            isOpen ? "right-0" : "-right-[100%]"
          } transition-all duration-300 shadow-xl `}
        >
          <div className="flex flex-col gap-10 p-10 pt-24 ">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
            <Link href="/qualification" onClick={() => setIsOpen(false)}>
              Qualification
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Sidebar