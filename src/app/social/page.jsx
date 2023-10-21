import React from "react";
import Social from "@/components/Social";
import SocialCardList from "@/components/SocialCardList";
import Footer from "@/components/Footer";

const SocialCard = () => {
  return (
    <div className="snap-y snap-mandatory w-screen h-screen overflow-scroll overflow-x-hidden">
      <div className="snap-center">
        <Social />
      </div>
      <div className="snap-center">
        <SocialCardList />
      </div>
      <Footer />
    </div>
  );
};

export default SocialCard;
