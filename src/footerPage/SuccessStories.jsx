

const SuccessStories = () => {
  return (
    <div>
      {/* <Helmet>
        <title>Success Stories-BiteShare</title>
      </Helmet> */}
      <section className="w-11/12 sm:container xl:w-10/12 mx-auto mt-28 mb-14 md:mb-20 bg-[#faf4e9] rounded-2xl">
        <div className="px-7 py-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
            BiteShare <span className="text-amber-700">Success</span> Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* <!-- Card 1 --> */}
            <div className="bg-white hover:bg-light-secondary/70 shadow-lg rounded-lg p-6">
              <img
                src="/assets/community.jpg"
                alt="Success Story 1"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Sarah's Community Meal
              </h3>
              <p className="text-gray-600 mt-2">
                "Thanks to BiteShare, I was able to share a home-cooked meal
                with my neighbors. It felt great to help those in need, and the
                platform made it so easy to find people to share with!"
              </p>
              <div className="mt-4 text-right">
                <p className="font-semibold text-gray-800">Sarah K.</p>
                <p className="text-sm text-gray-500">BiteShare User</p>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="bg-white hover:bg-light-secondary/70 shadow-lg rounded-lg p-6">
              <img
                src="/assets/pantry.jpg"
                alt="Success Story 2"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Mark's Pantry Cleanout
              </h3>
              <p className="text-gray-600 mt-2">
                "I had extra food sitting around and didn’t want it to go to
                waste. Through BiteShare, I was able to donate my items to
                people in my community who needed them!"
              </p>
              <div className="mt-4 text-right">
                <p className="font-semibold text-gray-800">Mark L.</p>
                <p className="text-sm text-gray-500">BiteShare Donor</p>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="bg-white hover:bg-light-secondary/70 shadow-lg rounded-lg p-6">
              <img
                src="/assets/charity.jpg"
                alt="Success Story 3"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Emily's Charity Event
              </h3>
              <p className="text-gray-600 mt-2">
                "I hosted a charity event and used BiteShare to gather food
                donations. The platform helped me connect with generous donors
                and create a memorable event for the community."
              </p>
              <div className="mt-4 text-right">
                <p className="font-semibold text-gray-800">Emily R.</p>
                <p className="text-sm text-gray-500">BiteShare Host</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
