import { Link } from "react-router";

const DonationSection = () => {
  return (
    <div className="bg-[#faf4e9] w-11/12 sm:container xl:w-10/12 mx-auto py-8 px-5 mb-10 shadow-lg dark:bg-gray-900 rounded-xl">
      <div className="p-4 mb-6  mx-auto text-center leading-tight first-letter:capitalize dark:text-gray-100">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center">
          Spreed Smile!
        </h2>
        <p className="text-base md:w-[70%] mx-auto text-center">
          Join us in our mission to fight hunger by donating surplus food.
          Together, we can make a difference and provide meals to those in need.
          Every contribution counts!
        </p>
      </div>
      <div className="mx-auto w-fit grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        <div className="relative group bg-gray-200 h-[320px] shadow-lg rounded-2xl overflow-hidden">
          <img
            className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
            src="/assets/p1.jpg"
          />
          <div className="bg-gray-100 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease dark:bg-gray-700">
            <div className="p-6">
              <div className="capitalize flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-amber-600 text-lg font-bold">
                    Palestine: Donate life saving food
                  </h2>
                  <span className="text-sm text-blue-300 underline">
                    Read more
                  </span>
                </div>
                <div className="block mt-4">
                  <div className="absolute bottom-10 left-5">
                    <Link
                      to="/donate"
                      className="bg-amber-500 hover:bg-amber-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl "
                    >
                      Donate now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group bg-gray-200 h-[320px] shadow-lg rounded-2xl overflow-hidden">
          <img
            className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
            src="/assets/p2.jpg"
          />
          <div className="bg-gray-100 dark:bg-gray-700 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease">
            <div className="p-6">
              <div className="capitalize flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-amber-600 text-lg font-bold">
                    Syria: Share with families in need
                  </h2>
                  <span className="text-sm text-blue-300 underline">
                    Read more
                  </span>
                </div>
                <div className="block mt-4">
                  <div className="absolute bottom-10 left-5">
                    <Link
                      to="/donate"
                      className="bg-amber-500 text-gray-100 font-medium py-2.5 px-4 rounded-xl hover:bg-amber-600"
                    >
                      Donate now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group bg-gray-200 h-[320px] shadow-lg rounded-2xl overflow-hidden">
          <img
            className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
            src="/assets/p3.webp"
          />
          <div className="bg-gray-100 dark:bg-gray-700 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease">
            <div className="p-6">
              <div className="capitalize flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-amber-600 text-lg font-bold">
                    Lebanon: Help families in need
                  </h2>
                  <span className="text-sm text-blue-300 underline">
                    Read more
                  </span>
                </div>
                <div className="block mt-4">
                  <div className="absolute bottom-10 left-5">
                    <Link
                      to="/donate"
                      className="bg-amber-500 hover:bg-amber-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl"
                    >
                      Donate now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
