import React from "react";
import Image from "next/image";

const Social = () => {
  return (
    <div className="w-screen h-screen grad-neonred">
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full h-full  pl-36 flex justif-center items-center">
          <Image src="/social.png" width={500} height={500} />
        </div>
        <div className="w-full h-full flex flex-col justify-start items-start ">
          <p className="text-white text-6xl font-nunito font-bold mt-16 text-center text-[#1c1c1c]">
            Socalize Your{" "}
            <span className="social-text-grad">
              Social <br /> Media
            </span>{" "}
            With <span className="text-pred">Parasya</span>
          </p>
          <div className="flex w-full justify-center items-center ">
            {" "}
            <span className="text-white font-mulish text-md mt-6 tracking-tight w-96 text-left font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. enim
              minim veniam, quis nostrud exercitation adispaci
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
