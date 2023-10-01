import React from "react";
import Gallery from "./Gallery";
const Team = () => {
  let galleryTab = [
    {
      imageUrl: "/team/team.jpg",
      type: "We Are The Dream Makers",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div className="bg-[#F8F6F0] pt-4">
      <div className="w-full text-center text-4xl font-bold font-raleway">
        Meet the <span className="text-pred">PARASYA</span> Team
      </div>
      <div className="p-16">
        <Gallery galleryTab={galleryTab} />
      </div>
    </div>
  );
};

export default Team;
