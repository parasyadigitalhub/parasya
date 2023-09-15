import Instruction from "./instruction";

const Incorporate = () => {
  return (
    <div className="w-screen h-screen grad-neonred font-raleway">
      <div className="w-full text-center font-bold py-8 flex flex-col justify-center items-center">
        <span className="uppercase text-4xl font-bold text-white w-full pb-2">
          incorporate your company
        </span>
        <span className="text-white font-bold">
          From anywhere. At a single click
        </span>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full h-1/2">
        <div className="h-full bg-white w-1/4 h-[90%] rounded-xl">
          form left
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center lg:scale-[1] scale-[0.7]">
          <div className="flex flex-row justify-center items-center">
            <div className="mx-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="215"
                height="193"
                viewBox="0 0 215 193"
                fill="none"
              >
                <path
                  d="M180.593 44.1652C208.879 119.071 229.877 140.972 200.729 171.701C171.58 202.429 49.2452 198.739 11.2392 162.686C-26.7668 126.634 42.3432 60.558 71.492 29.8297C100.641 -0.898545 155.713 -21.7224 180.593 44.1652Z"
                  fill="#C3282E"
                />
              </svg>
            </div>
            <div className="mx-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="214"
                height="191"
                viewBox="0 0 214 191"
                fill="none"
              >
                <path
                  d="M205.554 79.4305C169.848 150.358 183.45 184.873 141.823 190.494C100.196 196.115 7.96336 117.208 1.01062 65.7216C-5.94213 14.2356 47.6671 8.09732 89.294 2.47595C130.921 -3.14542 244.294 2.47598 205.554 79.4305Z"
                  fill="#C3282E"
                />
              </svg>
            </div>
          </div>

          <div className="mt-4 ml-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="220"
              height="203"
              viewBox="0 0 220 203"
              fill="none"
            >
              <path
                d="M205.513 104.82C161.533 175.428 156.704 206.579 112.95 201.907C69.1962 197.235 -4.94367 93.933 0.834269 39.8161C6.61221 -14.3008 104.755 1.05235 148.509 5.72387C192.263 10.3954 244.198 42.7127 205.513 104.82Z"
                fill="#C3282E"
                id="p1"
              />
              <text x="0" y="0" color="white">
                TEXT
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="h-1/2 w-full bg-[#1B1B1B]">
        <Instruction />
      </div>
    </div>
  );
};

export default Incorporate;
