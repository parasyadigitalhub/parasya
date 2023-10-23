import IncorporateList from "./IncorporateList";
import Instruction from "./instruction";

const Incorporate = () => {
  let details = [
    {
      name: "OPC",
      description:
        "In an OPC, you're the sole proprietor, ensuring your business thrives on your terms and vision—complete control, boundless opportunities.",
      price: " ₹12,500",
    },
    {
      name: "LLP",
      description:
        "A Limited Liability Partnership (LLP) combines the benefits of a partnership and a corporation, offering limited liability to its partners.",
      price: " ₹10,100",
    },
    {
      name: "Pvt. Ltd",
      description:
        "A Private Limited Company (Pvt. Ltd.) is a business entity with limited liability, separate legal identity, and shares not available to the public.",
      price: " ₹13500",
    },
  ];
  return (
    <div
      className=" font-raleway bg-pearlwhite"
      style={{
        background: `url(/background.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      id="incorporation"
    >
      <div className="w-full text-center font-bold py-8 flex flex-col justify-center items-center mb-6 font-raleway">
        <span className="uppercase px-2 text-3xl lg:text-4xl font-bold text-white w-full pb-1 md:pb-2">
          incorporate your company
        </span>
        <span className="text-white font-bold opacity-90">
          From anywhere. At a single click
        </span>
      </div>

      <div className="flex flex-col-reverse justify-center items-center w-full h-1/2 lg:px-16 px-3">
        <div className="h-full mb-6 lg:mb-16 bg-white w-full h-[90%] rounded-xl border-2 border-pred lg:px-16 px-3">
          <div className="w-full text-left mt-2  ">
            <span className="text-black border-b-2 border-pred text-4xl font-bold pt-4">
              Get More Quotes
            </span>
            <div className="my-6 flex flex-col justify-around items-center">
              <div className="flex flex-col lg:flex-row justify-around items-center w-full lg:gap-4">
                <input
                  type="text"
                  id="base-input"
                  placeholder="Your Full Name"
                  className="bg-gray-50 w-full ring-0 outline-none border border-[#727272] placeholder-[#A5A5A5] text-sm rounded-xl block w-1/2 p-2.5 duration-300 ease-in-out hover:border-pred focus:border-pred mb-2"
                />
                <input
                  type="text"
                  id="base-input"
                  placeholder="E-mail"
                  className="bg-gray-50 w-full ring-0 outline-none border border-[#727272] placeholder-[#A5A5A5] text-sm rounded-xl block w-1/2 p-2.5 duration-300 ease-in-out hover:border-pred focus:border-pred mb-2"
                />
              </div>

              <div className="flex flex-col lg:flex-row justify-around items-center w-full lg:gap-4">
                <input
                  type="text"
                  id="base-input"
                  placeholder="Mobile Number"
                  className="bg-gray-50 w-full ring-0 flex-1 outline-none border border-[#727272] placeholder-[#A5A5A5] text-sm rounded-xl block w-full p-2.5 duration-300 ease-in-out hover:border-pred focus:border-pred mb-2"
                />
                <input
                  type="text"
                  id="base-input"
                  placeholder="City"
                  className="bg-gray-50 w-full ring-0 flex-1 outline-none border border-[#727272] placeholder-[#A5A5A5] text-sm rounded-xl block w-full p-2.5 duration-300 ease-in-out hover:border-pred focus:border-pred mb-2"
                />
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:gap-4">
                <select
                  id="countries"
                  className="bg-gray-50 w-full ring-0 outline-none border border-[#727272] placeholder-[#A5A5A5] text-sm rounded-xl block font-semibold  p-2.5 duration-300 ease-in-out hover:border-pred focus:border-pred mb-2"
                >
                  <option selected hidden>
                    Select what you are looking for
                  </option>
                  <option value="OPC">OPC</option>
                  <option value="LLP">LLP</option>
                  <option value="Private Limited">Private Limited</option>
                </select>
                <a href="https://wa.me/message/WYHC7UEJBHHUB1">
                  <button
                    type="submit"
                    className="bg-pred rounded-md text-white font-bold px-6 py-3 text-center hover:bg-white hover:text-pred duration-300 ease-in-out"
                  >
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/2 w-full lg:px-16 py-4 my-8 px-3">
          <Instruction />
        </div>
        <div className="w-1/2 flex flex-start flex-col  items-center lg:scale-[0.8] scale-[0.7] font-raleway mb-4 lg:px-16 px-3">
          <div>
            <IncorporateList details={details} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incorporate;
