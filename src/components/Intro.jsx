import React from "react";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="h-screen w-full grad-neonred">
      <div className="flex flex-col-reverse md:flex-row w-full h-full justify-around items-center">
        <div className="flex flex-col justify-center items-center h-screen w-1/2 text-gray-200 space-y-[40px]">
          <div className="lg:text-6xl text-3xl font-bold font-raleway w-full text-center sm:text-center">
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
          <div className="font-mulish text-left ml-4 w-3/5 text-md md:text-xl leading-normal tracking-tighter text-wrap pt-16 text-left">
            Your One-Stop Solution for Incorporation, Legal Support, Digital
            Marketing, and Cutting-Edge App & Web Development Services
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center hidden lg:block">
          <Image
            src="/cover.png"
            width={300}
            height={300}
            className="w-3/4 aspect-square"
            alt="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
