
import Swal from "sweetalert2";

const Donate = () => {
  const handleDonate = (e) => {
    e.preventDefault();
    const form = e.target;
    Swal.fire({
      position: "top-middle",
      icon: "success",
      title: "THANK YOU FOR YOUR DONATION",
      showConfirmButton: false,
      timer: 1500,
    });
    form.reset();
  };
  return (
    <div>
      {/* <Helmet>
        <title>Donate-BiteShare</title>
      </Helmet> */}
      <section className="w-11/12 sm:container xl:w-10/12 mx-auto px-6 py-12 mt-28">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Support BiteShare
          </h2>
          <p className="mt-4 text-gray-600">
            Your generous donation helps us reduce food waste and feed those in
            need.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {/* <!-- Donation Card --> */}
          <div className=" bg-light-secondary/50 shadow-md rounded-lg p-6 w-full ">
            <h3 className="text-xl font-semibold text-gray-800">
              Donate to a Cause
            </h3>
            <p className="mt-4 text-gray-600">
              Choose how much you'd like to donate and help make a difference!
            </p>
            <form onSubmit={handleDonate} className="mt-6">
              <div className="mb-4">
                <label for="amount" className="block text-gray-700 font-medium">
                  Select Amount:
                </label>
                <select
                  id="amount"
                  name="amount"
                  required
                  className="bg-amber-50 mt-1 block w-full border-gray-300 rounded-md p-2 shadow-sm"
                >
                  <option value="5">$5</option>
                  <option value="10">$10</option>
                  <option value="25">$25</option>
                  <option value="50">$50</option>
                  <option value="100">$100</option>
                </select>
              </div>

              <div className="mb-4">
                <label for="name" className="block text-gray-700 font-medium">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="bg-amber-50 mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label for="email" className="block text-gray-700 font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-amber-50 mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600"
              >
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
