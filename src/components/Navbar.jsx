"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from "./Dropdown";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  useEffect(() => {}, [open]);

  let handleNav = () => {
    setOpen(!open);
  };
  return (
    <nav className="relative top-0 left-0 w-full h-16 shadow-md ">
      <div className="flex top-0 h-16 w-full justify-between items-center bg-white px-4 2xl:pr-16 2xl:pl-8 overflow-hidden">
        <div className="scale-[0.65]">
          <Link href="/">
            <Image src="/logo.png" width={205} height={75} alt="logo" />
          </Link>
        </div>
        <div className="hidden sm:flex w-1/4 sm:mr-16  h-16 justify-between items-center font-nunito font-bold text-[#1c1c1c] text-lg">
          <div className="whitespace-nowrap hover:text-pred duration-300 ease-in-out inline-flex">
            <DropDown />
          </div>
          <div className="whitespace-nowrap mx-3 hover:text-pred duration-300 ease-in-out">
            <Link href="/aboutus">About Us</Link>
          </div>
          <div className="whitespace-nowrap mx-3 hover:text-pred duration-300 ease-in-out">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="sm:hidden pl-24">
          <AiOutlineMenu size={25} onClick={handleNav} color="pred" />
        </div>
        <div
          style={{ zIndex: 80 }}
          className={
            open
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-pred p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 h-screen p-10 ease-out duration-500"
          }
        >
          <div className="sm:hidden cursor-pointer float-right w-full">
            <AiOutlineClose
              size={25}
              onClick={handleNav}
              color="white"
              className="absolute right-0 top-0 m-8"
            />
          </div>
          <div className="flex-col h-full mt-24 text-left">
            <div
              className="whitespace-nowrap mx-3 text-white duration-300 my-12 ease-in-out border-b-2 border-transparent p-4 hover:border-white"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href="/" className="text-2xl">
                Home
              </Link>
            </div>
            <div
              className="whitespace-nowrap mx-3 text-white duration-300  my-12 ease-in-out p-3 border-b-2 border-transparent p-4 hover:border-white"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href="/aboutus" className="text-2xl">
                About Us
              </Link>
            </div>
            <div
              className="whitespace-nowrap mx-3 text-white duration-300 my-12 ease-in-out p-3 border-b-2 border-transparent p-4 hover:border-white"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link
                href="/services"
                className="text-2xl flex justify-around items-center"
              >
                Services
                <IoMdArrowDropdown />
              </Link>
            </div>
            <div
              className="whitespace-nowrap mx-3 text-white duration-300 my-12 ease-in-out p-3 border-b-2 border-transparent p-4 hover:border-white"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href="/contact" className="text-2xl">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            open
              ? "absolute transparent w-screen h-screen top-0 right-0 z-0"
              : "hidden"
          }
          onClick={() => {
            setOpen(false);
          }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
