import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="text-white bg-gray-900">
      <div className="w-11/12 sm:container xl:w-10/12 mx-auto">
        <div className="py-10 md:py-20">
          <div className="flex flex-col items-center justify-center">
            <img src="/assets/logo.png" alt="" className="w-12 md:w-14 mb-2" />
            <h3 className="text-xl md:text-3xl font-bold mb-2">BiteBuddy</h3>
            <p className="md:w-[45%] text-center text-sm md:text-base text-white/50">
              Share your food, your story, and your love for cooking. Join a
              community that celebrates every bite!
            </p>
          </div>
          <div className="border-t-2 border-[#09080F1A] mt-10">
            <footer className="grid grid-cols-2 lg:grid-cols-4 gap-10 p-10 mx-auto">
              <nav className="flex flex-col gap-1 ">
                <p className="text-base md:text-lg text-white/90 mb-2">
                  Our Impact
                </p>
                <p className="text-white/50 text-sm md:text-base">
                  Over 10,000 meals shared, 5,000+ community members, and
                  growing every day!
                </p>
              </nav>
              <nav className="flex flex-col gap-1 ">
                <p className="text-base md:text-lg text-white/90 mb-2">
                  Join Our Community
                </p>
                <p className="text-white/50 text-sm md:text-base">
                  Be part of a movement that values food, reduces waste, and
                  builds meaningful connections.
                </p>
              </nav>
              <nav className="flex flex-col gap-1 ">
                <p className="text-base md:text-lg text-white/90 mb-2">
                  Explore
                </p>
                <Link
                  to="/contact-us"
                  className="link link-hover hover:text-orange-400 text-white/50 text-sm md:text-base"
                >
                  Contact Us
                </Link>
                <Link
                  to="/events"
                  className="link link-hover  hover:text-orange-400 text-white/50 text-sm md:text-base"
                >
                  Community Events
                </Link>
                <Link
                  to="/success-stories"
                  className="link link-hover hover:text-orange-400 text-white/50 text-sm md:text-base"
                >
                  Success Stories
                </Link>
              </nav>
              <nav className="flex flex-col gap-1 ">
                <p className=" text-base md:text-lg  text-white/90 mb-2">
                  Stay Updated
                </p>
                <p className="text-white/50 text-sm md:text-base">
                  Sign up for our newsletter to get the latest food-sharing tips
                  and updates.
                </p>
              </nav>
            </footer>
          </div>
          <div className="border border-t-1 border-white/30 mb-10 mt-10 w-full"></div>
          <div className="flex flex-col lg:flex-row justify-between items-center text-center text-sm md:text-base text-white/70">
            <div className="flex flex-col md:flex-row gap-4">
              <p className=" text-white/50">
                © {new Date().getFullYear()} BiteBuddy Page. All Rights
                Reserved.
              </p>
              <div className="flex gap-3">
                <Link
                  to="/privacy-policy"
                  className="link link-hover hover:text-orange-400 text-white/50 text-sm md:text-base"
                >
                  Privacy & Policy
                </Link>
                <Link
                  to="/accessibility"
                  className="link link-hover hover:text-orange-400 text-white/50 text-sm md:text-base"
                >
                  Accessibility
                </Link>
                <Link
                  to="/manage-cookie"
                  className="link link-hover hover:text-orange-400 text-white/50 text-sm md:text-base"
                >
                  Manage Cookies
                </Link>
              </div>
            </div>

            <div className="flex gap-3 mt-4 lg:mt-0">
              <a href="https://web.facebook.com/" target="_blank">
                <FaFacebook className="text-2xl hover:scale-125 transition-transform delay-100 duration-300 ease-out" />
              </a>
              <a href="https://x.com/" target="_blank">
                <FaTwitter className="text-2xl hover:scale-125 transition-transform delay-150 duration-300 ease-out" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedinIn className="text-2xl hover:scale-125 transition-transform delay-150 duration-300 ease-out" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <IoLogoYoutube className="text-2xl hover:scale-125 transition-transform delay-150 duration-300 ease-out" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <RiInstagramFill className="text-2xl hover:scale-125 transition-transform delay-150 duration-300 ease-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
