import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
const Team = () => {
  return (
    <div className="w-screen h-screen bg-[#F8F6F0]">
      {" "}
      <div className="py-16">
        <p className="text-center font-raleway text-4xl font-medium">
          Meet The <span className="text-pred font-bold">PARASYA</span> team{" "}
        </p>{" "}
        <div className="pt-16 mx-16">
          <Carousel images={["/teamcover.png", "/cover1g.png"]} />
        </div>
      </div>
    </div>
  );
};

export default Team;
