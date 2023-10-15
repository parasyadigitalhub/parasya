import Image from "next/image";
import Link from "next/link";

const Website = () => {
  return (
    <div className="py-8" id="website">
      <div className="p-10 flex flex-col justify-center items-center">
        <h1 className="font-nunito text-[#1c1c1c] text-3xl lg:text-4xl font-black text-center">
          Website Development
        </h1>
        <div className="bg-black w-screen lg:w-[1200px] h-96 mt-16 relative">
          <div className="relative w-full lg:absolute top-0 left-0 lg:p-16 flex flex-col justify-around items-start h-full lg:scale-[1] scale-[0.9]">
            <p className="text-white text-xl font-bold font-nunito w-full">
              Get Your Full fledged website starting from <br />@ Rs 9999/-
            </p>
            <span className="text-[#ececec] text-xs w-96 block">
              We use cutting-edge technology to build effective online
              solutions, resulting in robust, scalable apps with pixel-perfect
              design and clean code. We provide equal weight to your product's
              front-end and back-end components, resulting in a solid framework
              that will be practical as your app grows.{" "}
            </span>
            <Link
              href="/contact"
              className="bg-[#D4464C] rounded-xl text-xl text-white font-semibold px-16 py-3 text-center hover:bg-white hover:text-pred duration-300 ease-in-out"
            >
              Explore Now
            </Link>
          </div>
          <Image
            src="/websitecover.png"
            width={550}
            height={400}
            className="h-full absolute right-0 hidden lg:block"
          />
        </div>
      </div>
      <div className="px-4 lg:px-8 py-2 grid md:grid-cols-5 gap-6 place-items-center w-full">
        <div className="w-[224px] h-[189px] scale-[0.8] lg:scale-[1] bg-pearlwhite flex flex-col justify-center items-center shadow-2xl rounded-lg border-2 border-pred border-b-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="61"
            viewBox="0 0 80 61"
            fill="none"
          >
            <path
              d="M3.20312 30.0047L37.6289 45.1414C38.7678 45.6422 40.0495 45.6497 41.1937 45.1624L76.7792 30.0047M3.20312 41.0253L37.5146 57.2723C38.7195 57.8428 40.0985 57.8513 41.3097 57.2957L76.7792 41.0253M8.33962 21.2426L38.5314 34.5177C39.093 34.7646 39.7243 34.7718 40.2908 34.5378L72.4304 21.2627C74.4033 20.4478 74.4033 17.5204 72.4304 16.7055L40.2908 3.43044C39.7243 3.19643 39.093 3.20365 38.5314 3.45056L8.33962 16.7256C6.42968 17.5654 6.42968 20.4028 8.33962 21.2426Z"
              stroke="#154D92"
              stroke-width="4.87259"
              stroke-linecap="round"
            />
          </svg>
          <span className="font-raleway text-md font-bold pt-4">
            Static Website
          </span>
        </div>
        <div className="w-[224px] h-[189px] scale-[0.8] lg:scale-[1] bg-pearlwhite flex flex-col justify-center items-center shadow-2xl rounded-lg border-2 border-pred border-b-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="81"
            height="62"
            viewBox="0 0 81 62"
            fill="none"
          >
            <rect
              x="10.1479"
              y="3.26001"
              width="60.7309"
              height="40.4873"
              rx="2.53045"
              stroke="#921582"
              stroke-width="5.06091"
            />
            <rect
              x="2.55664"
              y="51.3386"
              width="75.9136"
              height="7.59136"
              rx="2.53045"
              stroke="#921582"
              stroke-width="5.06091"
            />
          </svg>
          <span className="font-raleway text-md font-bold pt-4">
            Dynamic Website
          </span>
        </div>
        <div className="w-[224px] h-[189px] scale-[0.8] lg:scale-[1] bg-pearlwhite flex flex-col justify-center items-center shadow-2xl rounded-lg border-2 border-pred border-b-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="71"
            height="60"
            viewBox="0 0 71 60"
            fill="none"
          >
            <path
              d="M1.81689 10.098V1.26001H6.23591V54.2882H11.7597M1.81689 15.6218V58.7072H69.2069V54.2882H59.8165M11.7597 54.2882V36.6121H21.7025V54.2882M11.7597 54.2882H21.7025M21.7025 54.2882H29.4357M29.4357 54.2882V28.8789H40.4833V54.2882M29.4357 54.2882H40.4833M40.4833 54.2882H50.4261M50.4261 54.2882C48.2166 53.1835 43.7975 50.0901 43.7975 46.5549C43.7975 43.0197 43.7975 41.3994 43.7975 41.0312C43.7975 39.2908 44.7845 35.5107 48.6242 33.609M50.4261 54.2882H59.8165M59.8165 54.2882C62.9098 52.5206 64.4196 48.3962 64.7879 46.5549C64.7879 45.4502 64.7879 42.5778 64.7879 39.9264C64.7879 37.275 61.1054 34.4026 59.2641 33.2979C59.1654 33.2485 59.0552 33.1979 58.9341 33.1468M48.6242 33.609C48.8469 33.4987 49.0791 33.3948 49.3213 33.2979C53.4443 31.6487 57.2467 32.4358 58.9341 33.1468M48.6242 33.609V19.6049H58.9341V24.4598M58.9341 33.1468V28.1753"
              stroke="#921582"
              stroke-width="2.20951"
            />
            <path
              d="M57.0548 38.8218H54.8453M54.2464 48.7538C57.2892 48.619 57.4046 47.2547 57.0548 46.5551C57.0548 46.9234 57.0548 47.218 57.0548 45.4504C57.0548 43.2408 55.95 44.3456 53.7405 44.3456C51.9729 44.3456 51.531 42.8726 51.531 42.1361C51.531 42.5043 51.531 42.7989 51.531 41.0313C51.531 39.2637 52.2675 38.8218 52.6358 38.8218H54.2464H54.8453M54.2464 48.7538C54.086 48.7609 53.9175 48.7646 53.7405 48.7646C51.0891 48.7646 50.4263 48.7646 50.4263 48.7646L54.2464 48.7538ZM54.2464 48.7538V51.4674M54.8453 38.8218V35.5076"
              stroke="#921582"
              stroke-width="2.20951"
            />
            <path
              d="M11.7603 27.7741C14.7063 27.7741 21.0402 27.5531 22.8078 26.6693C25.0173 25.5646 37.1696 23.3551 55.9504 2.36475M55.9504 2.36475V7.88852M55.9504 2.36475H50.4266"
              stroke="#921582"
              stroke-width="2.20951"
            />
          </svg>
          <span className="font-raleway text-md font-bold pt-4">
            Co-operate Website
          </span>
        </div>
        <div className="w-[224px] h-[189px] scale-[0.8] lg:scale-[1] bg-pearlwhite flex flex-col justify-center items-center shadow-2xl rounded-lg border-2 border-pred border-b-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height="60"
            viewBox="0 0 67 60"
            fill="none"
          >
            <path
              d="M0.100098 2.26001H10.7711L13.9724 12.931M13.9724 12.931L19.3079 37.4743H57.7234L64.126 12.931H13.9724Z"
              stroke="#154D92"
              stroke-width="4.26839"
            />
            <circle
              cx="22.5088"
              cy="52.4135"
              r="5.33549"
              stroke="#154D92"
              stroke-width="4.26839"
            />
            <circle
              cx="52.3877"
              cy="52.4135"
              r="5.33549"
              stroke="#154D92"
              stroke-width="4.26839"
            />
          </svg>
          <span className="font-raleway text-md font-bold pt-4">
            E-commerce Website
          </span>
        </div>
        <div className="w-[224px] h-[189px] scale-[0.8] lg:scale-[1] bg-pearlwhite flex flex-col justify-center items-center shadow-2xl rounded-lg border-2 border-pred border-b-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="65"
            viewBox="0 0 76 65"
            fill="none"
          >
            <path
              d="M15.4735 48.0588C15.4735 51.3901 15.4735 54.4477 15.4735 56.9926C15.4735 58.9779 16.8632 62.9485 22.422 62.9485C27.9808 62.9485 43.9294 62.9485 51.2088 62.9485C53.8559 63.2794 59.15 62.5515 59.15 56.9926C59.15 55.4881 59.15 52.253 59.15 48.0588M15.4735 48.0588C10.8411 47.397 1.57638 44.6838 1.57638 39.125C1.57638 33.5661 1.57638 34.8235 1.57638 36.147C1.2455 33.4999 3.56168 28.2058 15.4735 28.2058M15.4735 48.0588C15.4735 41.8747 15.4735 34.7474 15.4735 28.2058M15.4735 28.2058C15.4735 19.0287 15.4735 11.0042 15.4735 8.35308C15.4735 2.79424 20.1058 2.0663 22.422 2.39719H51.2088C56.7676 2.39719 58.8191 6.36778 59.15 8.35308C59.15 13.5229 59.15 20.8082 59.15 28.2058M59.15 28.2058C64.1132 28.8676 74.0398 31.3823 74.0398 36.147C74.0398 40.9117 74.0398 40.7794 74.0398 40.1176C74.3706 41.772 71.8558 45.6764 59.15 48.0588M59.15 28.2058C59.15 35.3117 59.15 42.5212 59.15 48.0588M59.15 48.0588C54.8485 49.0514 44.4589 51.0367 37.3118 51.0367M37.3118 51.0367L41.2824 47.0661M37.3118 51.0367L41.2824 55.0073"
              stroke="#154D92"
              stroke-width="2.93"
            />
            <path
              d="M32.3479 27.2128L23.4141 37.1393V38.1319H51.2082V27.2128L47.2376 23.2422L38.3038 32.176L32.3479 27.2128Z"
              stroke="#154D92"
              stroke-width="1.9853"
            />
            <circle
              cx="30.3627"
              cy="19.2718"
              r="3.97059"
              stroke="#154D92"
              stroke-width="1.9853"
            />
          </svg>
          <span className="font-raleway text-md font-bold pt-4">
            Website Redesign
          </span>
        </div>
      </div>
    </div>
  );
};

export default Website;
