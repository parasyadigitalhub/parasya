import React from "react";
import Image from "next/image";
const Vision = () => {
  return (
    <div className="bg-[#F8F6F0] pt-32 overflow-scroll">
      <div className="flex w-full h-full justify-around items-center px-40">
        <div className="flex justify-left w-full h-full items-center justify-around">
          <div className="flex flex-col items-start justify-center w-1/2 font-raleway">
            <div>
              <p className="font-bold text-5xl font-raleway text-center pb-4">
                About <span className="text-pred">PARASYA</span>
              </p>
              <span className="text-sm leading-[150%] w-96 block text-center pb-10">
                At PARASYA, we're not just building a business; we're crafting a
                vision, one innovation at a time. Founded in [Year of
                Establishment], we embarked on this journey with a shared dream
                - to [Briefly describe the mission or problem your startup aims
                to solve].
              </span>
            </div>
            <div>
              <p className="font-bold text-5xl font-raleway text-center pb-4">
                <span className="text-pred">Our </span>Vision
              </p>
              <span className="text-sm leading-[150%] w-96 block text-center pb-10">
                Our startup is driven by a compelling vision: [Insert your
                startup's vision statement]. We believe that by [Briefly
                describe how your startup aims to make a positive impact], we
                can contribute to a brighter and more sustaina ble future.
              </span>
            </div>
          </div>

          <div className="relative pb-16 w-96 h-96">
            <Image src="/logo.png" width={600} height={600} />
          </div>
          {""}
        </div>{" "}
      </div>
    </div>
  );
};

export default Vision;
