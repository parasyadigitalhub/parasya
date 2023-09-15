import Image from "next/image";
import BoxList from "./BoxList";

const Service = () => {
  let options = [
    "Company Incorporation",
    "legal Support",
    "Digital Marketing",
    "Application Development",
    "Website Development",
  ];
  return (
    <div className="w-screen h-screen grad-neonred font-raleway ">
      <div className="w-full flex justify-center items-center">
        <span className=" relative text-center font-nunito text-white text-5xl pt-8 font-bold border-b-2 pb-1 border-white">
          Our Services
        </span>
      </div>

      <div className="h-5/6 flex flex-col lg:flex-row justify-around items-center">
        <div className="flex-1 object-fit flex justify-center items-center w-full h-full">
          <Image
            src="/services.png"
            width={400}
            height={400}
            alt="parasya"
            className="object-fit scale-[0.60] lg:scale-[0.9]"
          ></Image>
        </div>
        <div className="text-white flex-1">
          <BoxList options={options} />
        </div>
      </div>
      <div className="w-full flex justify-center text-center bottom-0 mb-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1040"
          height="2"
          viewBox="0 0 1040 2"
          fill="none"
        >
          <path
            d="M1 1H1039.02"
            stroke="url(#paint0_linear_103_65)"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_103_65"
              x1="1039"
              y1="1"
              x2="1"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#565555" stop-opacity="0" />
              <stop offset="0.479167" stop-color="#838383" />
              <stop offset="1" stop-color="#565555" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Service;
