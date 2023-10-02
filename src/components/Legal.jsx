import React from "react";
import Image from "next/image";
import LegalCard from "./LegalCard";

const Legal = () => {
  return (
    <div
      className="w-screen h-screen p-16 flex justify-around items-center bg-no-repeat"
      style={{
        backgroundImage: `url('/gavel.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="ml-16 w-1/2">
        <p className="font-nunito w-full text-5xl tracking-[0.064px] leading-[125%] text-white font-bold tracking-wide">
          Comprehensive <span className="legal-text-grad">Legal</span> <br />
          <span className="support-text-grad">Support</span> for You
        </p>
        <span className="text-white w-24 font-medium opacity-80 text-xl font-mulish break-all">
          We provide the best of the <br />
          best people in the sector for <br /> Remarkable Results
        </span>
        <div className="relative w-1/2 h-[450px] w-[500px]">
          <Image src="/justice.png" layout="fill" />
        </div>
      </div>
      <div className="w-2/5 h-full flex justify-around items-center">
        <div className="flex justify-center items-center h-full pt-32 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="94"
            viewBox="0 0 24 94"
            fill="none"
          >
            <path
              d="M21 3L3 47L21 91"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <LegalCard />
        <div className="flex justify-center items-center h-full pt-32 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="94"
            viewBox="0 0 24 94"
            fill="none"
          >
            <path
              d="M3 3L21 47L3 91"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Legal;
