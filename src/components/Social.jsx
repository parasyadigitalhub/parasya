import React from "react";
import Image from "next/image";

const Social = () => {
  return (
    <div className="w-screen h-screen grad-redblack">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full h-full px-2">
        <div className="w-full h-full pl-3  lg:pl-36 flex justify-center items-center scale-[0.8] lg:scale-[1]">
          <Image src="/social.png" width={500} height={500} />
        </div>
        <div className="w-full h-full flex flex-col justify-start items-start ">
          <p className="text-white text-4xl lg:text-6xl font-nunito font-bold mt-16 text-center text-[#1c1c1c]">
            Socalize Your{" "}
            <span className="social-text-grad">
              Social <br /> Media
            </span>{" "}
            With <span className="text-pred">Parasya</span>
          </p>
          <div className="flex w-full justify-center items-center ">
            {
              "At Parasya, we're your dedicated social media partner. We specialize in crafting tailored strategies, creating engaging content, managing your online community, and running targeted advertising campaigns. With our experienced team and commitment to results, we're here to help you make a powerful impact on social media. Let's collaborate and elevate your brand's online presence together. "
            }
            <span className="text-white font-mulish text-md mt-6 tracking-tight w-full lg:w-96 text-left font-bold text-xs"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
