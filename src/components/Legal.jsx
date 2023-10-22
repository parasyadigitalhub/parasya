import React from "react";
import Image from "next/image";
import LegalCard from "./LegalCard";

const Legal = () => {
  return (
    <div
      className="w-screen px-3 lg:p-16 flex flex-col lg:flex-row justify-around items-center bg-no-repeat"
      style={{
        backgroundImage: `url('/gavel.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:ml-16 w-full flex flex-col items-center justify-center lg:block py-8">
        <p className="font-nunito w-full text-center lg:text-left text-3xl lg:text-5xl tracking-[0.064px] leading-[125%] text-white font-bold tracking-wide">
          Comprehensive <span className="legal-text-grad">Legal</span> <br />
          <span className="support-text-grad">Support</span> for You
        </p>
        <span className="text-white w-48 text-center lg:text-left lg:w-18 font-medium opacity-80 text-sm lg:text-xl font-mulish break-all">
          We provide the best of the best people in the sector for Remarkable
          Results
        </span>
        <div className="relative w-[250px] h-[200px] lg:h-[450px] lg:w-[500px]">
          <Image src="/justice.png" layout="fill" />
        </div>
      </div>
      <div className=" lg:h-full flex justify-around items-center">
        <LegalCard />
      </div>
    </div>
  );
};

export default Legal;
