// import { Helmet } from "react-helmet-async";

const CommunityEvent = () => {
  return (
    <div>
      {/* <Helmet>
        <title>Community Event-BiteBuddy</title>
      </Helmet> */}
      <section className="w-11/12 sm:container xl:w-10/12 mx-auto bg-[#faf4e9] mt-28 mb-12 md:mb-20 rounded-xl py-12">
        <div className="px-5">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
            BiteBuddy Community Events
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="/assets/family.jpg"
                alt="Community Event 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">
                  Food Drive for Families
                </h3>
                <p className="text-gray-600 mt-2 flex-grow">
                  Join us to distribute fresh meals to families in need in your
                  community.
                </p>
                <div className="mt-4 text-right">
                  <span className="text-sm text-gray-500">Jan 15, 2025</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="/assets/share.jpg"
                alt="Community Event 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">
                  Cook & Share Meetup
                </h3>
                <p className="text-gray-600 mt-2 flex-grow">
                  A fun evening where members cook and share meals together!
                </p>
                <div className="mt-4 text-right">
                  <span className="text-sm text-gray-500">Feb 10, 2025</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="/assets/lunch.jpg"
                alt="Community Event 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">
                  Leftover Lunch Day
                </h3>
                <p className="text-gray-600 mt-2 flex-grow">
                  Encouraging food sharing and minimizing waste by sharing
                  leftovers.
                </p>
                <div className="mt-4 text-right">
                  <span className="text-sm text-gray-500">Mar 5, 2025</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="/assets/market.jpg"
                alt="Community Event 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">
                  Farmers' Market Collaboration
                </h3>
                <p className="text-gray-600 mt-2 flex-grow">
                  Collaborating with local farmers to provide fresh produce to
                  the community.
                </p>
                <div className="mt-4 text-right">
                  <span className="text-sm text-gray-500">Apr 12, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityEvent;
