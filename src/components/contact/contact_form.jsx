import axios from "axios";
import React, { useState } from "react";
import { Toaster,toast } from "react-hot-toast";
import { BsSend } from "react-icons/bs";

function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      name,email,description
    }
    const response = axios.post("/api/create", postData)
    toast.success("Response Added")
    console.log(response);
  }
  return (
    <div className="w-[90%] lg:w-full">
      <form action="" className=" flex  flex-col gap-10 " onSubmit={handleSubmit}  >
        <div className="relative ">
          <input
            type="text"
            className={`peer outline outline-1 outline-slate-300 bg-transparent rounded-lg py-3 px-4 block lg:w-1/2 w-full lg:h-[4rem] h-14 focus:ring-2 focus:ring-blue-500`}
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor=""
            className={`absolute left-2 transition-all duration-300 ${
              name ? "-top-4 bg-white text-lg" : "top-3"
            } text-gray-500 pointer-events-none peer-focus:-top-4 peer-focus:bg-white px-2 text-lg lg:text-2xl peer-focus:text-lg `}
          >
            Name
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            className={`peer outline outline-1 outline-slate-300 bg-transparent rounded-lg py-3 px-4 block lg:w-1/2 w-full lg:h-[4rem] h-14 focus:ring-2 focus:ring-blue-500 `}
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor=""
            className={`absolute left-2 transition-all duration-300 ${
              email ? "-top-4 bg-white text-lg" : "top-3"
            } text-gray-500 pointer-events-none peer-focus:-top-4 peer-focus:bg-white px-2 text-lg lg:text-2xl peer-focus:text-lg`}
          >
            Email
          </label>
        </div>
        <div className="relative">
          <textarea
            type="text"
            className="peer outline outline-1 outline-slate-300 bg-transparent rounded-lg py-5 px-4 block lg:w-1/2 w-full h-48  focus:ring-2 focus:ring-blue-500   "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label
            htmlFor=""
            className={`absolute left-2 transition-all duration-300 ${
              description ? "-top-4 bg-white text-lg" : "top-3"
            } text-gray-500 pointer-events-none peer-focus:-top-4 peer-focus:bg-white px-2 text-lg lg:text-2xl peer-focus:text-lg`}
          >
            Your Project
          </label>
        </div>
        <button className="border text-xl lg:text-2xl bg-slate-700 rounded-2xl lg:py-6 py-4 px-5 w-40 lg:w-48 text-white flex items-center gap-2 hover:bg-slate-900 cursor-pointer " type="submit">
          Contact <BsSend className="text-3xl" />
        </button>

        <div></div>
      </form>
      <Toaster/>
    </div>
  );
}

export default ContactForm;
