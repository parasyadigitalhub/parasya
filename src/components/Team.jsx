import React from "react";
import Gallery from "./Gallery";
const Team = () => {
  let galleryTab = [
    {
      imageUrl: "/team/team.jpg",
      type: "We Are The Dream Makers",
      title: "",
    },
  ];
  return (
    <div className="bg-[#F8F6F0] pt-4">
      <div className="w-full text-center text-4xl font-bold font-raleway">
        Meet the <span className="text-pred">PARASYA</span> Team
      </div>
      <div className="lg:p-16 h-full w-full">
        <Gallery galleryTab={galleryTab} />
      </div>
    </div>
  );
};

export default Team;
