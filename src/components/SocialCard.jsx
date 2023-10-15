import React from "react";
import Link from "next/link";

const SocialCard = ({ title, description, price, features }) => {
  return (
    <div className="w-72 h-[572px] rounded-lg bg-white shadow-md mb-4 relative">
      <div className="absolute w-full h-full bg-transparent border-4 border-pred rounded-lg scale-[0.9]"></div>
      <div className="absolute top-0 left-0 rounded-lg w-full h-full scale-[0.9]">
        <div className=" top-0 left-0  text-left mt-2">
          <span className="text-xl bg-pred rounded-lg px-3 py-2 font-nunito font-bold text-white leading-[150%]">
            {title}
          </span>
        </div>
        <div className=" flex w-full h-full justify-around items-center flex-col px-4">
          <div className="text-left">
            <span className="text-xs leading-1 text-[#6C6C6C]">
              {description}
            </span>
          </div>
          <div className="w-full text-left text-4xl font-mulish border-b-2 pb-2">
            <span className="font-black">Rs. {price}</span>
          </div>
          <div className="w-full">
            <ul className="p-3">
              {features.map((e) => {
                return (
                  <li className="mb-1">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                      >
                        <path
                          d="M1.34827 7L7.41159 12L16.5066 1"
                          stroke="#33363F"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                      <span className="ml-2 font-bold font-mulish text-sm">
                        {e}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full w-full flex justify-center items-center mb-10">
            <Link href="#" className="">
              <div className=" h-10 bg-pred rounded-lg text-white font-mulish font-bold flex justify-center items-center px-4 duration-300 ease-in-out hover:bg-transparent hover:text-pred">
                Subscribe Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
