import Swal from "sweetalert2";

const ContactUs = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    Swal.fire({
      position: "top-middle",
      icon: "success",
      title: "Your message has been sent THANK YOU",
      showConfirmButton: false,
      timer: 1500,
    });
    form.reset();
  };
  return (
    <div className="w-11/12 sm:container xl:w-10/12 mx-auto mt-24 lg:mt-28 mb-10">
      {/* <Helmet>
        <title>Contact Us-BiteShare</title>
      </Helmet> */}
      <section className="grid lg:grid-cols-2 gap-5 ">
        <div className="bg-light-secondary/70 row-start-2 lg:row-start-1 shadow-lg rounded-lg p-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions or need assistance? Reach out to us, and we’ll be
              happy to help!
            </p>
          </div>

          <form onSubmit={handleForm} className="space-y-6">
            <div>
              <label
                for="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 block w-full rounded-md bg-amber-50 border-gray-300 shadow-sm sm:text-sm"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 block w-full rounded-md bg-amber-50 border-gray-300 shadow-sm  sm:text-sm"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label
                for="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-1 p-2 block w-full rounded-md bg-amber-50 border-gray-200 shadow-sm sm:text-sm"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="row-start-1 lg:row-start-1 ">
          <img
            src="/assets/SentMessage1.png"
            alt=""
            className="w-[80%] lg:w-full mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
