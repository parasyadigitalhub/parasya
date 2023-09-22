import { HiOutlineChevronRight } from "react-icons/hi";
import Link from "next/link";

const Box = ({ href, name, namecolor, image, description }) => {
  return (
    <div
      className="h-96 w-80 bg-white rounded-lg text-center p-4 font-bold flex flex-col justify-around shadow-lg"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.32) 42.57%, #000 100%), url('/${image}'), lightgray -3.94px -3.737px / 151.941% 103.759%;`,
        backgroundSize: "cover",
      }}
    >
      <div className="font-raleway text-center w-full flex justify-center items-center">
        <span className="w-64 block text-xl" style={{ color: `${namecolor}` }}>
          {name}
        </span>
      </div>
      <div className="font-raleway text-center w-full flex justify-center items-center mt-16">
        <span className="text-base font-medium text-white w-64 block leading-[150%]">
          {description}
        </span>
      </div>
      <div className="font-raleway text-center w-full flex justify-center items-center mt-4">
        <Link href={`/${href}`}>
          <div
            className="w-32 text-[#1c1c1c] font-bold px-4 py-2.5 rounded-lg"
            style={{ backgroundColor: `${namecolor}` }}
          >
            Read more
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Box;
