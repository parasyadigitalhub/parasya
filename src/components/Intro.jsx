import React from "react";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="h-screen w-full grad-neonred">
      <div className="flex flex-col-reverse md:flex-row w-full h-full justify-around items-center">
        <div className="flex flex-col justify-center items-center h-screen w-1/2 text-gray-200 space-y-[40px]">
          <div className="lg:text-6xl text-3xl font-semibold font-nunito w-full text-center sm:text-center">
            <div className="w-full text-left">
              <span className="mb-4 whitespace-nowrap w-full lg:ml-16 ml-4">
                Unlocking Success
              </span>
            </div>
            <div className="w-full text-right lg:mr-16 ml-4">
              <span className=" whitespace-nowrap">Across Industries</span>
            </div>
          </div>
          <div className="font-mulish w-3/4 text-left ml-4">
            <span>
              Your One-Stop Solution for Incorporation, Legal Support, Digital
              Marketing, and Cutting-Edge App & Web Development Services
            </span>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/cover.png"
            width={300}
            height={300}
            className="w-3/4 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
