import React from "react";
import Incorporate from "@/components/Incorporate";
import Legal from "@/components/Legal";

const Home = () => {
  return (
    <div
      className="w-screen h-screen overflow-scroll  snap-mandatory overflow-y-scroll"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="snap-center" id="legalsupport">
        <Legal />
      </div>
      <div className="snap-center" id="legalsupport">
        <Incorporate />
      </div>
    </div>
  );
};

export default Home;
