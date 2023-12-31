import { HiOutlineChevronRight } from "react-icons/hi";
import Link from "next/link";

const Box = ({ href, name, namecolor, image, description }) => {
  console.log(namecolor);
  return (
    <div
      className="h-96 w-80 bg-white rounded-lg text-center p-4 font-bold flex flex-col justify-around drop-shadow-3xl duration-300 ease-in-out hover:filter-none"
      style={{
        background: `url('/${image}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
            className={`w-32 text-[#1c1c1c] font-bold px-4 py-2.5 rounded-lg bg-[${namecolor}] hover:bg-transparent hover:text-white duration-300 ease-in-out`}
          >
            Read more
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Box;
