import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
const Team = () => {
  return (
    <div className="w-screen h-screen bg-[#F8F6F0]">
      <div className="flex w-full h-full justify-around items-center p-10">
        <div className="flex justify-left w-full h-full items-center">
          <div className="flex flex-col items-start justify-center w-1/2 font-raleway">
            <div>
              <p className="font-bold text-3xl font-raleway text-center pb-4">
                About <span className="text-pred">PARASYA</span>
              </p>
              <span className="text-sm leading-[150%] w-80 block text-center pb-10">
                At PARASYA, we're not just building a business; we're crafting a
                vision, one innovation at a time. Founded in [Year of
                Establishment], we embarked on this journey with a shared dream
                - to [Briefly describe the mission or problem your startup aims
                to solve].
              </span>
            </div>
            <div>
              <p className="font-bold text-3xl font-raleway text-center pb-4">
                <span className="text-pred">Our </span>Vision
              </p>
              <span className="text-sm leading-[150%] w-80 block text-center pb-10">
                Our startup is driven by a compelling vision: [Insert your
                startup's vision statement]. We believe that by [Briefly
                describe how your startup aims to make a positive impact], we
                can contribute to a brighter and more sustaina ble future.
              </span>
            </div>
          </div>

          <div className="relative">
            <Image src="/logo.png" layout="fill" objectFit="cover" />
          </div>
          {""}
        </div>{" "}
      </div>
    </div>
  );
};

export default Team;
