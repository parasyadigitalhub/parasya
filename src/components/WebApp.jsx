import Image from "next/image";
import Link from "next/link";

const WebApp = () => {
  return (
    <div>
      <div
        style={{
          background: "url('/webcover.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-start font-nunito p-4 lg:p-16">
          <span className="text-2xl w-full lg:text-5xl text-white font-black leading-[150%]">
            Transform your ideas into <br /> reality with our full-service{" "}
            <br />{" "}
            <span className="text-grad font-[900] font-nunito">
              Design to Development
            </span>{" "}
            team.
          </span>
          <span className="w-full lg:w-[500px] pt-8 text-white text-sm whitespace-break-spaces block">
            We offer a holistic digital solution encompassing web and app
            development. Our web development team creates visually captivating
            and responsive websites, tailored to your unique needs, using
            cutting-edge technologies . Simultaneously, our app development
            experts craft innovative, user-friendly mobile applications for
            Android and iOS platforms, transforming your concepts into engaging
            reality. With a one-stop mix of web and app development, we ensure a
            seamless digital presence that elevates your brand in today's
            fast-paced digital landscape.{" "}
          </span>
        </div>
        <div className="">
          <p className="text-center text-xl lg:text-4xl font-nunito py-8 text-white font-bold">
            Tell Us What You Are Looking for...
          </p>
          <div className="w-full flex justify-around items-center font-nunito py-8">
            <Link
              href="#website"
              className="bg-pred rounded-xl text-lg lg:text-2xl text-white font-semibold px-8 lg:px-56 py-3 text-center hover:bg-white hover:text-pred duration-300 ease-in-out"
            >
              Website
            </Link>
            <Link
              href="#application"
              className="bg-pred rounded-xl text-lg lg:text-2xl text-white font-semibold px-8 lg:px-56 py-3 text-center hover:bg-white hover:text-pred duration-300 ease-in-out"
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
