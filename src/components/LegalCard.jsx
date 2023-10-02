import React from "react";
import Image from "next/image";

const LegalCard = () => {
  return (
    <div className="flex justify-around items-end w-full h-full">
      <div className="bg-[#DCB280] rounded-xl w-[428px] h-[543px] p-6">
        <div className="flex justify-around items-center w-full h-36">
          <div className="bg-white rounded-[50%] w-36 h-36 mt-4 relative">
            <Image
              src="/advocate.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-[50%]"
            />
          </div>
          <div className="flex h-full items-end justify-start w-1/2">
            <span className="font-nunito font-bold text-xl whitespace-nowrap">
              <span className="text-lg font-bold">Adv.</span> Peter Henderson
            </span>
          </div>
        </div>
        <p className="text-center w-full mt-4 text-xs font-semibold font-nunito">
          Degree from: Pineville University, Pineville, New Hampshire
        </p>
        <p className="text-center mt-4 font-bold text-sm font-nunito">
          5+ years of experience
        </p>
        <div className="flex flex-col w-full  justify-center items-center mt-4">
          <p className="text-base font-nunito w-[331px] font-bold text-center leading-normal mb-6">
            “Working with Parasya was a game-changer for my business. Their
            expertise in digital marketing and web development helped us reach
            new heights. The team's dedication, creativity, and attention to
            detail truly set them apart. I highly recommend parasya to anyone
            looking to achieve outstanding results”
          </p>
          <button
            type="submit"
            className="bg-pred rounded-xl text-3xl font-mulish text-white font-bold px-5 py-2.5 text-center w-72"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalCard;
