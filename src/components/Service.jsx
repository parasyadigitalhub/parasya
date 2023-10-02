import Image from "next/image";
import BoxList from "./BoxList";

const Service = () => {
  let options = [
    {
      href: "incorporation",
      name: "Expert Company Incorporation and Legal Solutions",
      nameColor: "#DCB280",
      description:
        "Empowering Your Business Journey with Seamless Legal Compliance and Setup",
      image: "legal.jpg",
    },
    {
      href: "social",
      name: "Strategic Social Media Marketing Solutions",
      nameColor: "#C1272D",
      description:
        "Boosting Your Online Presence and Engagement for Digital Success",
      image: "socialcover.jpg",
    },
    {
      href: "web",
      name: "Bespoke Web and App Development",
      nameColor: "#FC9925",
      description:
        "Transforming Your Ideas into Exceptional Digital Experiences",
      image: "web.png",
    },
  ];
  return (
    <div className="w-screen h-screen bg-[#8E0000] font-raleway px-16 relative z-0">
      <div className="w-full h-full top-0 right-0 z-0 absolute">
        <Image
          src="/serviceCover.png"
          width={600}
          height={600}
          className="float-right relative"
        />
      </div>
      <div className="flex flex-col jusify-center items-center z-10">
        <div className="w-full flex justify-start items-center ">
          <span className=" relative text-white font-raleway leading-[150%] text-[#1c1c1c] text-4xl pt-8 font-bold text-left">
            Intergrated Buisness Solutions <br /> for Growth and Success
          </span>
        </div>
        <div className="w-full text-left z-10">
          <span className="text-white text-base font-light font-raleway mt-4 lg:w-[1057px] tracking-tight text-left block">
            At Parasya, we understand that every business is unique. Our
            tailored solutions encompass a wide spectrum of services, from
            strategic planning and financial management to cutting-edge
            technology implementation. We believe that a holistic approach to
            business is key to sustained success, which is why our team of
            experts collaborates closely with you to identify opportunities,
            mitigate risks, and create a roadmap to achieve your goals.
          </span>
        </div>
        <div className="z-10 w-full h-full px-4">
          <BoxList options={options} />
        </div>
      </div>
    </div>
  );
};

export default Service;
