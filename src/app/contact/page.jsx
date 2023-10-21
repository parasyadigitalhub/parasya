import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="bg-pearlwhite lg:p-16 flex justify-center items-center relative">
        <div
          className="absolute w-full h-full bg-pearlwhite opacity-80 top-0 left-0 z-0"
          style={{
            backgroundImage: 'url("/background.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {" "}
        </div>
        <div className="w-full h-full z-0 border-0 rounded-none lg:border-2 border-pred lg:rounded-lg p-4 bg-[#F5F5F5]">
          <div className="w-full text-center  font-raleway font-bold py-16">
            <p className=" text-2xl lg:text-5xl">
              <span className="text-pred">Connect</span> With Us
            </p>
            <span className="text-sm lg:text-3xl block p-4 font-medium leading-[150%]">
              "Your success is important to us and we are eager to address any
              inquiries you may have. <br /> We would be delighted to assist
              you."
            </span>
          </div>
          <form className="z-10">
            <div class="relative z-0 w-full mb-6 group grid md:grid-cols-2 md:gap-6 gap-4">
              <div className="group relative">
                {" "}
                <input
                  type="name"
                  name="floating_name"
                  id="floating_name"
                  className="block py-4 px-4 w-full text-md shadow-pred border-b-2 shadow-sm focus:shadow-none bg-transparent duration-200 ease-in-out rounded-lg focus:rounded-none border-0 focus:border-0 focus:border-b-2 border-pred appearance-none focus:outline-none focus:ring-0 focus:border-pred peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_name"
                  className="peer-focus:font-medium px-4 text-center absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pred peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="group relative">
                {" "}
                <input
                  type="tel"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-4 px-4 w-full text-md shadow-pred border-b-2 shadow-sm focus:shadow-none bg-transparent duration-200 ease-in-out rounded-lg focus:rounded-none border-0 focus:border-0 focus:border-b-2 border-pred appearance-none focus:outline-none focus:ring-0 focus:border-pred peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  className="peer-focus:font-medium px-4 text-center absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pred peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Mobile Number
                </label>
              </div>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-4 px-4 w-full text-md shadow-pred border-b-2 shadow-sm focus:shadow-none bg-transparent duration-200 ease-in-out rounded-lg focus:rounded-none border-0 focus:border-0 focus:border-b-2 border-pred appearance-none focus:outline-none focus:ring-0 focus:border-pred peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium px-4 text-center absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pred peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            <div class="grid md:grid-cols-3 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <select
                  id="countries"
                  className="block py-4 px-4 w-full text-md shadow-pred border-b-2 shadow-sm focus:shadow-none bg-transparent duration-200 ease-in-out rounded-lg focus:rounded-none border-0 focus:border-0 focus:border-b-2 border-pred pr-8 cursor-pointer focus:outline-none focus:ring-0 focus:border-pred peer"
                >
                  <option selected hidden>
                    Organization Type
                  </option>
                  <option value="CT">Corporate</option>
                  <option value="CP">Co-operative</option>
                  <option value="CR">Charitable</option>
                  <option value="CO">Community</option>
                  <option value="FL">Flat</option>
                  <option value="CM">committee</option>
                </select>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="company"
                  name="floating_company"
                  id="floating_company"
                  className="block py-4 px-4 w-full text-md shadow-pred border-b-2 shadow-sm focus:shadow-none bg-transparent duration-200 ease-in-out rounded-lg focus:rounded-none border-0 focus:border-0 focus:border-b-2 border-pred appearance-none focus:outline-none focus:ring-0 focus:border-pred peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_company"
                  className="peer-focus:font-medium px-4 text-center absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pred peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company Name
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <select
                  id="countries"
                  className="block py-4 px-4 w-full text-md shadow-pred border-b-2 shadow-sm focus:shadow-none bg-transparent duration-200 ease-in-out rounded-lg focus:rounded-none border-0 focus:border-0 focus:border-b-2 border-pred pr-8 cursor-pointer focus:outline-none focus:ring-0 focus:border-pred peer"
                >
                  <option selected hidden className="opacity-8">
                    Service Required
                  </option>
                  <option value="CI">Company Incorporation</option>
                  <option value="LS">Legal Support</option>
                  <option value="DM">Digital Marketin</option>
                  <option value="WD">Website Development</option>
                  <option value="AD">Application Development</option>
                </select>
              </div>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <textarea
                type="description"
                name="floating_description"
                id="floating_description"
                className="block py-4 px-4 w-full text-md shadow-pred border-b-2 shadow-sm focus:shadow-none bg-transparent duration-200 ease-in-out rounded-lg focus:rounded-none border-0 focus:border-0 focus:border-b-2 border-pred appearance-none focus:outline-none focus:ring-0 focus:border-pred peer"
                placeholder=" "
                required
                rows={5}
              />
              <label
                for="floating_description"
                className="peer-focus:font-medium px-4 text-center absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pred peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Project Specification
              </label>
            </div>
            <div className="w-full text-center">
              {" "}
              <button
                type="submit"
                class="text-white bg-pred hover:bg-red-800 duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-red-300 font-raleawy text-2xl font-medium rounded-lg text-sm w-full sm:w-auto px-32 py-3 text-center"
              >
                Connect
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
