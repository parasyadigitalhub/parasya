import Image from "next/image";
import Link from "next/link";

const WebApp = () => {
  return (
    <div>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          background:
            "linear-gradient(180deg, #070707 -14.5%, rgba(0, 0, 0, 0.38) 46.65%, rgba(27, 27, 27, 0.76) 112.29%), url('/webcover.png'), lightgray 50% / cover no-repeat;",
        }}
        className=""
      >
        <div className="flex flex-col justify-center items-start font-nunito p-16">
          <span className="text-5xl text-white font-[900] leading-[150%]">
            Transform your ideas into <br /> reality with our full-service{" "}
            <br />{" "}
            <span className="text-grad font-[900] font-nunito">
              Design to Development
            </span>{" "}
            team.
          </span>
          <span className="w-[500px] pl-16 pt-8 text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </span>
        </div>
        <div className="">
          <p className="text-center text-4xl font-nunito py-8 text-white font-bold">
            Tell Us What You Are Looking for...
          </p>
          <div className="w-full flex justify-around items-center font-nunito py-8">
            <Link
              href="#website"
              className="bg-pred rounded-xl text-2xl text-white font-semibold px-56 py-3 text-center hover:bg-white hover:text-pred duration-300 ease-in-out"
            >
              Website
            </Link>
            <Link
              href="#application"
              className="bg-pred rounded-xl text-2xl text-white font-semibold px-56 py-3 text-center hover:bg-white hover:text-pred duration-300 ease-in-out"
            >
              Application
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApp;
