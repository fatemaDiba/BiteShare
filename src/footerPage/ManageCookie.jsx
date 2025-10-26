import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ManageCookie = () => {
  const handleCookie = (e) => {
    e.preventDefault();
    const form = e.target;
    Swal.fire({
      position: "top-middle",
      icon: "success",
      title: "THANK YOU",
      showConfirmButton: false,
      timer: 1500,
    });
    form.reset();
  };
  return (
    <div className="w-11/12 sm:container xl:w-10/12 mx-auto mt-24 lg:mt-28 mb-10">
      <Helmet>
        <title>Manage Cookie-BiteBuddy</title>
      </Helmet>
      <div className=" bg-[#faf4e9] shadow-lg rounded-lg p-6">
        <h2 className="text-2xl md:text-4xl font-bold text-black/70 mb-4">
          Manage Cookies
        </h2>
        <p className="text-gray-800 mb-6">
          Control how cookies are used on BiteBuddy. You can customize your
          preferences below:
        </p>

        <form onSubmit={handleCookie} className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <label for="essential" className="text-gray-800 font-medium">
                Essential Cookies
              </label>
              <p className="text-gray-500 text-sm">
                These cookies are necessary for the website to function properly
                and cannot be disabled.
              </p>
            </div>
            <input
              type="checkbox"
              id="essential"
              name="essential"
              className="toggle-checkbox"
              checked
              disabled
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label for="analytics" className="text-gray-800 font-medium">
                Analytics Cookies
              </label>
              <p className="text-gray-500 text-sm">
                These cookies help us understand how visitors interact with our
                website.
              </p>
            </div>
            <input
              type="checkbox"
              id="analytics"
              name="analytics"
              className="toggle-checkbox"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label for="marketing" className="text-gray-800 font-medium">
                Marketing Cookies
              </label>
              <p className="text-gray-500 text-sm">
                These cookies are used to deliver personalized advertisements.
              </p>
            </div>
            <input
              type="checkbox"
              id="marketing"
              name="marketing"
              className="toggle-checkbox"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label for="preferences" className="text-gray-800 font-medium">
                Preference Cookies
              </label>
              <p className="text-gray-500 text-sm">
                These cookies remember your settings and preferences.
              </p>
            </div>
            <input
              type="checkbox"
              id="preferences"
              name="preferences"
              className="toggle-checkbox"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2"
          >
            Save Preferences
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageCookie;
