import React from "react";
import Image from "next/image";
const Vision = () => {
  return (
    <div className="bg-[#F8F6F0] pt-8 md:pt-16 lg:pt-32 overflow-hidden">
      <div className="flex flex-col lg:flex-row  w-full h-full justify-around items-center lg:px-40">
        <div className="flex justify-left w-full h-full items-center justify-center">
          <div className="flex flex-col items-center px-16 justify-start w-1/2 font-raleway">
            <div>
              <p className="font-bold text-4xl lg:text-5xl font-raleway text-center pb-4">
                About <span className="text-pred">PARASYA</span>
              </p>
              <span className="text-xs md:text-sm leading-[150%] w-96 block text-center px-4 pb-10">
                At PARASYA, we're not just building a business; we're crafting a
                vision, one innovation at a time. Founded in 2023, we embarked
                on this journey with a shared dream to unlock your brnad's full
                online potential with our digital marketing expertise.
              </span>
            </div>
            <div>
              <p className="font-bold text-3xl md:text-5xl font-raleway text-center pb-4">
                <span className="text-pred">Our </span>Vision
              </p>
              <span className="text-xs md:text-sm leading-[150%] w-96 block text-center pb-10 lg:px-4">
                Our start is driven by a compelling vision: to create a future
                where every business can harness the full potential of digital
                marketing, enabling them to not only survive but thrive in the
                ever-changing digital landscape, achieving unprecedented growth
                and success.
              </span>
            </div>
          </div>

          <div className="pl-64 relative pb-4 w-full h-full hidden lg:block mb-10 flex justify-center items-center">
            <div className=" pb-1 mb-8 w-full h-1/2 aspect-video border-red-100 ">
              <video
                loop
                autoPlay
                className=" w-auto h-auto max-w-full mb- border border-red-700 rounded-lg dark:border-red-700"
                src="/Parasya-Motion.mp4"
                alt="Parasya animation video"
              ></video>
            </div>
          </div>
          {""}
        </div>{" "}
      </div>
    </div>
  );
};

export default Vision;
