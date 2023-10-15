import SocialCard from "@/components/SocialCard";
import React from "react";

const SocialCardList = () => {
  let details = [
    {
      title: "BASE PLAN",
      description: "Essential marketing services",
      price: "16999",
      features: [
        "Poster design upto 5",
        "Motion graphics",
        "Social media management",
        "Social media promotions",
      ],
    },
    {
      title: "STANDARD PLAN",
      description: "More features and options",
      price: "34999",
      features: [
        "Poster design upto 8",
        "Motion graphics ",
        "Social media management",
        "Social media promotions",
        "Youtube and Google ads",
        "Branding stratergies",
        "Photoshoot and Videoshoot",
      ],
    },
    {
      title: "PREMIUM PLAN",
      description: "Advanced customized options",
      price: "78999",
      features: [
        "Poster design upto 15",
        "Motion graphics (2D,3D)",
        "Social media management",
        "Social media promotions",
        "Youtube and Google ads",
        "Branding stratergies",
        "Influencer marketing",
        "Photoshoot and Videoshoot",
        "More special services",
      ],
    },
  ];
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="w-5/6 h-5/6 p-8">
        <div className="w-full text-left text-3xl lg:text-5xl font-raleway font-black">
          START NOW...
        </div>
        <div className="w-full font-mulish text-xl lg:text-3xl text-center font-black mt-4">
          Select Your Plan
        </div>
        <div className="flex flex-col lg:flex-row w-full h-full justify-around items-center pb-12 bg-pearlwhite pt-4">
          {details.map((e) => {
            let { title, description, price, features } = e;
            return (
              <SocialCard
                title={title}
                description={description}
                price={price}
                features={features}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialCardList;
