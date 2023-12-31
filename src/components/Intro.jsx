import React from "react";

import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="h-screen w-screen bg-pearlwhite relative ">
      <div className="flex flex-col-reverse md:flex-row w-full h-full justify-around items-center">
        <div className="flex flex-col justify-center items-center h-screen flex-1 text-gray-200 space-y-[40px]">
          <div className="lg:text-6xl text-3xl font-bold font-raleway w-full text-[#1c1c1c] sm:text-center">
            <div className="flex w-full justify-center items-center md:flex-col">
              <p className="text-2xl md:text-5xl text-center xl:text-5xl 2xl:text-6xl ">
                Unlocking&nbsp;
                <span className="text-grad">Success</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Across <span className="text-grad">Industries</span>
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <div className="font-mulish text-center md:text-center lg:text-left w-3/5 text-md md:text-xl leading-normal tracking-tighter text-wrap  text-[#1c1c1c]">
              Your One-Stop Solution for Incorporation, Legal Support, Digital
              Marketing, and Cutting-Edge App & Web Development Services
            </div>
          </div>

          <div className="text-left cursor-pointer w-full flex justify-center items-center">
            <Link
              href="#services"
              className="bg-[#D4464C] ml-4 text-xl shadow-2xl z-10 rounded-md text-white font-medium px-10 md:px-24 py-4  text-center border border-transparent hover:border-pred hover:bg-white hover:text-[#1c1c1c] duration-300 ease-in-out"
            >
              <span className="whitespace-nobreak z-[0]">Explore Now</span>
            </Link>
          </div>
          <div className="flex justify-center items-center w-full h-[auto] pt-16 px-2">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className="text-xl md:text-2xl text-black font-bold lg:text-left font-raleway whitespace-nowrap">
                Follow Us On
              </span>
              <div className="flex justify-between w-80 py-4 items-center ">
                <Link href="https://www.linkedin.com/in/parasya-in-bb406928b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                      fill="#0077B5"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.3188 14.8222C17.3188 16.3913 16.1377 17.6469 14.2412 17.6469H14.2064C12.3805 17.6469 11.2 16.3913 11.2 14.8222C11.2 13.2199 12.4164 11.9995 14.277 11.9995C16.1377 11.9995 17.2835 13.2199 17.3188 14.8222ZM16.9605 19.878V36.2197H11.5216V19.878H16.9605ZM36.5752 36.2198L36.5754 26.8499C36.5754 21.8304 33.8922 19.4943 30.3132 19.4943C27.4255 19.4943 26.1326 21.0804 25.4107 22.1931V19.8785H19.9711C20.0428 21.4119 19.9711 36.2202 19.9711 36.2202H25.4107V27.0936C25.4107 26.6052 25.446 26.118 25.5898 25.7683C25.9829 24.7926 26.8779 23.7824 28.3805 23.7824C30.3494 23.7824 31.1365 25.2809 31.1365 27.4769V36.2198H36.5752Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="https://www.facebook.com/Parasya.in?mibextid=LQQJ4d">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                      fill="#3B5998"
                    />
                    <path
                      d="M26.5015 38.1115V25.0542H30.1059L30.5836 20.5546H26.5015L26.5077 18.3025C26.5077 17.1289 26.6192 16.5001 28.3048 16.5001H30.5581V12H26.9532C22.6231 12 21.0991 14.1828 21.0991 17.8536V20.5551H18.4V25.0547H21.0991V38.1115H26.5015Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="https://www.youtube.com/@parasyadigitalacademy">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                      fill="#FF0000"
                    />
                    <path
                      d="M36.265 18.0729C35.9706 16.9419 35.1031 16.0513 34.0016 15.749C32.0054 15.1997 24 15.1997 24 15.1997C24 15.1997 15.9946 15.1997 13.9983 15.749C12.8967 16.0513 12.0292 16.9419 11.7348 18.0729C11.2 20.1227 11.2 24.3997 11.2 24.3997C11.2 24.3997 11.2 28.6765 11.7348 30.7265C12.0292 31.8575 12.8967 32.7481 13.9983 33.0505C15.9946 33.5997 24 33.5997 24 33.5997C24 33.5997 32.0054 33.5997 34.0016 33.0505C35.1031 32.7481 35.9706 31.8575 36.265 30.7265C36.8 28.6765 36.8 24.3997 36.8 24.3997C36.8 24.3997 36.8 20.1227 36.265 18.0729Z"
                      fill="white"
                    />
                    <path
                      d="M21.6 28.8003V20.8003L28 24.8004L21.6 28.8003Z"
                      fill="#FF0000"
                    />
                  </svg>
                </Link>
                <Link href="https://instagram.com/parasya.in?igshid=MzRlODBiNWFlZA==">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                      fill="url(#paint0_linear_563_975)"
                    />
                    <mask
                      id="mask0_563_975"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="48"
                      height="48"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_563_975)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.0011 11.2002C20.5248 11.2002 20.0885 11.2154 18.7232 11.2775C17.3605 11.3399 16.4303 11.5557 15.6165 11.8722C14.7746 12.1991 14.0605 12.6365 13.349 13.3482C12.637 14.0597 12.1996 14.7738 11.8716 15.6154C11.5543 16.4296 11.3383 17.36 11.277 18.7221C11.2159 20.0875 11.1999 20.524 11.1999 24.0003C11.1999 27.4766 11.2154 27.9116 11.2772 29.2769C11.3399 30.6396 11.5556 31.5697 11.8719 32.3836C12.1991 33.2255 12.6364 33.9396 13.3482 34.6511C14.0594 35.3631 14.7735 35.8015 15.6149 36.1285C16.4293 36.445 17.3597 36.6607 18.7221 36.7231C20.0874 36.7853 20.5235 36.8005 23.9995 36.8005C27.4761 36.8005 27.911 36.7853 29.2763 36.7231C30.639 36.6607 31.5702 36.445 32.3846 36.1285C33.2263 35.8015 33.9393 35.3631 34.6505 34.6511C35.3625 33.9396 35.7999 33.2255 36.1279 32.3839C36.4426 31.5697 36.6586 30.6393 36.7226 29.2772C36.7839 27.9118 36.7999 27.4766 36.7999 24.0003C36.7999 20.524 36.7839 20.0878 36.7226 18.7224C36.6586 17.3597 36.4426 16.4296 36.1279 15.6157C35.7999 14.7738 35.3625 14.0597 34.6505 13.3482C33.9385 12.6362 33.2265 12.1989 32.3838 11.8722C31.5678 11.5557 30.6372 11.3399 29.2745 11.2775C27.9091 11.2154 27.4745 11.2002 23.9971 11.2002H24.0011ZM22.8528 13.5065C23.0757 13.5062 23.3156 13.5063 23.5744 13.5064L24.001 13.5065C27.4187 13.5065 27.8237 13.5188 29.1734 13.5801C30.4214 13.6372 31.0987 13.8458 31.5499 14.021C32.1473 14.253 32.5731 14.5303 33.0209 14.9783C33.4689 15.4263 33.7462 15.853 33.9787 16.4503C34.1539 16.901 34.3627 17.5783 34.4195 18.8263C34.4809 20.1757 34.4942 20.581 34.4942 23.9971C34.4942 27.4131 34.4809 27.8184 34.4195 29.1678C34.3625 30.4158 34.1539 31.0931 33.9787 31.5438C33.7467 32.1411 33.4689 32.5665 33.0209 33.0142C32.5729 33.4622 32.1475 33.7396 31.5499 33.9716C31.0992 34.1476 30.4214 34.3556 29.1734 34.4126C27.824 34.474 27.4187 34.4873 24.001 34.4873C20.5831 34.4873 20.1781 34.474 18.8287 34.4126C17.5807 34.355 16.9034 34.1465 16.4519 33.9713C15.8545 33.7393 15.4279 33.462 14.9799 33.014C14.5319 32.5659 14.2545 32.1403 14.022 31.5427C13.8468 31.0921 13.638 30.4147 13.5812 29.1667C13.5199 27.8174 13.5076 27.412 13.5076 23.9939C13.5076 20.5757 13.5199 20.1725 13.5812 18.8231C13.6383 17.5751 13.8468 16.8978 14.022 16.4466C14.254 15.8492 14.5319 15.4226 14.9799 14.9746C15.4279 14.5266 15.8545 14.2492 16.4519 14.0167C16.9031 13.8407 17.5807 13.6327 18.8287 13.5753C20.0095 13.522 20.4671 13.506 22.8528 13.5033V13.5065ZM29.2975 17.1679C29.2975 16.3196 29.9855 15.6324 30.8335 15.6324V15.6319C31.6816 15.6319 32.3696 16.3199 32.3696 17.1679C32.3696 18.0159 31.6816 18.7039 30.8335 18.7039C29.9855 18.7039 29.2975 18.0159 29.2975 17.1679ZM24.0008 17.427C20.3707 17.4271 17.4276 20.3703 17.4276 24.0004C17.4276 27.6306 20.3709 30.5724 24.001 30.5724C27.6312 30.5724 30.5734 27.6306 30.5734 24.0004C30.5734 20.3702 27.6309 17.427 24.0008 17.427ZM28.268 24.0006C28.268 21.6441 26.3576 19.7339 24.0013 19.7339C21.6447 19.7339 19.7346 21.6441 19.7346 24.0006C19.7346 26.3569 21.6447 28.2673 24.0013 28.2673C26.3576 28.2673 28.268 26.3569 28.268 24.0006Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_563_975"
                        x1="24"
                        y1="0"
                        x2="24"
                        y2="48"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#6A48D0" />
                        <stop offset="1" stop-color="#EC2B61" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 justify-center items-center  w-full h-full hidden lg:flex">
          <div className="relative w-full h-full flex items-end ">
            <Image
              src="/cover1.png"
              layout="fill"
              objectFit="fill"
              className="bg-no-repeat scale-[0.8] mt-24 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
