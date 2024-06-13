import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Qualification from "../components/qualification";
import Projects from "../components/projects";
import dynamic from "next/dynamic";
// import Contact from "../components/contact";
const DynamicContactComponent = dynamic(() => import("../components/contact"), {
  ssr: false,
});
function Page() {
  return (
    <div className=" overflow-hidden ">
      <Hero />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <DynamicContactComponent />
    </div>
  );
}

export default Page;
