import React from "react";
import { Spotlight } from "./ui/spotlight";
import TextGenerateEffect from "./ui/textGenerateEffect";
import HeroBtn from "./ui/heroShimmerBtn";
import { TbArrowBadgeRight } from "react-icons/tb";

function Hero() {
  return (
    <>
      <div className="pb-20 pt-20">
        <div className="">
          <Spotlight
            className="-top-40 -left-10 h-screen md:top-20 md:-left-32"
            fill="white"
          />
          <Spotlight
            className="top-10 -left-full h-[80vh] w-[50vw]"
            fill="purle"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center z-10 relative my-20">
          <div className="max-w-[89vw] bg--600 text-white  md:max-w-2xl lg:max-w-[80vw] flex flex-col justify-center items-center ">
            <h2 className="uppercase tracking-widest text-center text-blue-100 max-w-80">
              Dynamic web magic with React
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming Concepts into Seamless User Experiences "
            />
            <p className="text-center tracking-widest mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I'm Yash, a FullStack Web Developer
            </p>
            <a href="#">
              <HeroBtn 
              title="See my work"
              icon={<TbArrowBadgeRight className="text-xl"/>}
               />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
