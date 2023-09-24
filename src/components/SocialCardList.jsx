import SocialCard from "@/components/SocialCard";
import React from "react";

const SocialCardList = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-5/6 h-5/6 p-8">
        <div className="w-full text-left text-5xl font-raleway font-black">
          START NOW...
        </div>
        <div className="w-full font-mulish text-3xl text-center font-black mt-4">
          Select Your Plan
        </div>
        <div className="flex w-full h-full justify-around items-center pb-12 bg-pearlwhite pt-4">
          <SocialCard />
          <SocialCard />
          <SocialCard />
        </div>
      </div>
    </div>
  );
};

export default SocialCardList;
