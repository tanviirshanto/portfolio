"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import ContactItem from "./contact/contact_item";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import ContactForm from "./contact/contact_form";


function Contact() {
  return (
    <div className=" w-screen flex flex-col  ">
      <div
        className=" py-8 text-center lg:h-[20%]  flex flex-col justify-center bg-slate-200 "
        id="skillHeading"
      >
        <div className="lg:text-4xl text-2xl  mb-8">Contact</div>
        <div className="text-center text-lg text-gray-600">Get in touch</div>
      </div>
      <div className="flex flex-col lg:flex-row  justify-center items-center gap-14 lg:gap-48 w-screen lg:my-24 my-10     ">
        <div className="flex flex-col md:items-center  lg:items-end lg:w-1/2 gap-8 w-[90%] ">
          <ContactItem
            name={"Email"}
            email={"tanviir.hossen@gmail.com"}
            compose={
              "https://mail.google.com/mail/?view=cm&fs=1&to=tanviir.hossen@gmail.com"
            }
            icon={<MdOutlineEmail />}
          />
          <ContactItem
            name={"Whatsapp"}
            email={"+8801832892309"}
            compose={"https://wa.me/+8801832892309"}
            icon={<FaWhatsapp />}
          />
          <ContactItem
            name={"Messenger"}
            email={"Tanvir Hossen Shanto"}
            compose={"https:/m.me/tanviirshanto"}
            icon={<FaFacebookMessenger />}
          />
        </div>
        <div className="w-full flex flex-col items-center lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
