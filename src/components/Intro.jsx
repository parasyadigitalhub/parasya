import React from "react";

import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="h-screen w-screen bg-pearlwhite relative">
      <div className="flex flex-col-reverse md:flex-row w-full h-full justify-around items-center">
        <div className="flex flex-col justify-center items-center h-screen w-1/2 text-gray-200 space-y-[40px]">
          <div className="lg:text-6xl text-3xl font-bold font-raleway w-full text-[#1c1c1c] text-center sm:text-center">
            <div className="">
              <p className="text-xl md:text-3xl text-center ml-8 xl:text-5xl 2xl:text-6xl ">
                Unlocking&nbsp;
                <span className="text-grad">Success</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Across <span className="text-grad">Industries</span>
              </p>
            </div>
          </div>
          <div className="font-mulish text-left ml-4 w-3/5 text-md md:text-xl leading-normal tracking-tighter text-wrap  text-[#1c1c1c]">
            Your One-Stop Solution for Incorporation, Legal Support, Digital
            Marketing, and Cutting-Edge App & Web Development Services
          </div>
          <div className="text-left cursor-pointer w-full flex justify-center items-center">
            <Link
              href="#services"
              className="bg-[#D4464C] ml-4 shadow-2xl z-10 rounded-md text-white font-bold px-10 py-4  text-center border border-transparent hover:border-pred hover:bg-white hover:text-[#1c1c1c] duration-300 ease-in-out"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center hidden lg:flex w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src="/cover1.png"
              layout="fill"
              objectFit="fill"
              className="bg-no-repeat scale-[0.7]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
