import { HiOutlineChevronRight } from "react-icons/hi";
import Link from "next/link";

const Box = ({ name }) => {
  let href = name.replaceAll(" ", "").toLowerCase();
  return (
    <div className="w-full h-full my-2 rounded-xl cursor-pointer mb-10 ml-2 bg-pred pl-3 flex justify-between items-center px-16 font-mulish font-bold border-b-2 border-transparent hover:bg-transparent hover:border-pred hover:rounded-none hover:shadow-md duration-300 ease-in-out">
      <Link href={`/#${href}`} className="w-full pl-8 md:pl-16 lg:text-xl">
        {name}
      </Link>
      <HiOutlineChevronRight size={23} />
    </div>
  );
};

export default Box;
