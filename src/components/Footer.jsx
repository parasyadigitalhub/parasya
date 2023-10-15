import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-red-700 min-h-[150px] md:h-100 w-full text-white shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between item-centre gap-y-5 py-16 md:py-8">
          <div className="scale-[0.65] items-center mx-auto">
            <Link href="/">
              <Image
                className="mx-2"
                src="/logo.png"
                width={205}
                height={75}
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:pt-9 tracking-wider text-center text-lg">
            <div className="whitespace-nowrap mx-3 hover:text-black duration-300 ease-in-out">
              <Link href="/">Home</Link>
            </div>
            <div className="whitespace-nowrap mx-3 hover:text-black duration-300 ease-in-out">
              <Link href="/">services</Link>
            </div>
            <div className="whitespace-nowrap mx-3 hover:text-black duration-300 ease-in-out">
              <Link href="/aboutus">About us</Link>
            </div>
            <div className="whitespace-nowrap mx-3 hover:text-black duration-300 ease-in-out">
              <Link href="/contact">Contacts</Link>
            </div>
          </div>
          <div className="flex gap-x-5 gap-y-5 place-items-center m-auto md:pt-18 pr-18  ">
            <div>
              {" "}
              <Link href="https://www.facebook.com/Parasya.in?mibextid=LQQJ4d">
                <BsFacebook
                  size={25}
                  className="  text-white hover:text-black hover:translate-y-1 duration-300"
                />
              </Link>
            </div>
            <div>
              {" "}
              <Link href="https://instagram.com/parasya.in?igshid=MzRlODBiNWFlZA==">
                <BsInstagram
                  size={25}
                  className="  text-white hover:text-black hover:translate-y-1 duration-300"
                />
              </Link>
            </div>{" "}
            <div>
              {" "}
              <Link href="https://www.linkedin.com/in/parasya-in-bb406928b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <BsLinkedin
                  size={25}
                  className="  text-white hover:text-black hover:translate-y-1 duration-300"
                />
              </Link>
            </div>{" "}
            <div>
              {" "}
              <Link href="https://wa.me/message/WYHC7UEJBHHUB1">
                <BsWhatsapp
                  size={25}
                  className="  text-white hover:text-black hover:translate-y-1 duration-300"
                />
              </Link>
            </div>{" "}
            <div>
              {" "}
              <Link href="https://www.youtube.com/@parasyadigitalacademy">
                <BsYoutube
                  size={25}
                  className="  text-white hover:text-black hover:translate-y-1 duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
