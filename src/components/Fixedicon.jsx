import React from "react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const Fixedicon = () => {
  return (
    <div className="">
      <Link href="https://wa.me/message/WYHC7UEJBHHUB1">
        <BsWhatsapp
          size={45}
          className=" fixed bottom-16 right-7 text-green-700 z-20"
        />
      </Link>
    </div>
  );
};

export default Fixedicon;
