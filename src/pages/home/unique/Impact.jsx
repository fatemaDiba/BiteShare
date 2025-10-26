const Impact = () => {
  return (
    <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-20">
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">
        Our Impact
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 ">
        <div className="justify-items-center ">
          <img
            className=" w-[20%] md:w-[22%] mb-5"
            src="/assets/i5.png"
            alt=""
          />
          <p className="text-sm md:text-base text-center">
            Our team pack over $20,000 of food every week, over half a million
            dollars of food over the year.
          </p>
        </div>
        <div className="justify-items-center">
          <img
            className="w-[20%] md:w-[22%] mb-5"
            src="/assets/i2.png"
            alt=""
          />
          <p className="text-sm md:text-base text-center">
            Our drivers deliver food directly to the schools’ front doors, over
            600kms per week.
          </p>
        </div>
        <div className="justify-items-center">
          <img
            className="w-[20%] md:w-[22%] mb-5"
            src="/assets/i3.png"
            alt=""
          />
          <p className="text-sm md:text-base text-center">
            Over 12,000 meals or snacks per week are provided by us with the
            food we provide.
          </p>
        </div>
        <div className="justify-items-center">
          <img
            className="w-[20%] md:w-[22%] mb-5"
            src="/assets/i4.png"
            alt=""
          />
          <p className="text-sm md:text-base text-center">
            Over 1000 volunteer are accrued each week to deliver nutrition
            programs in local area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
