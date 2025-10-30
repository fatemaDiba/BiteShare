import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOutBtn = (e) => {
    e.preventDefault();
    logOutUser()
      .then((res) => {
        console.log("User Successfully Logged Out");
        navigate("/");
      })
      .catch((error) => {
        console.log(first)("Something went wrong!");
      });
  };

  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/available-foods">Available Foods</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/add-food">Add Food</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/manage-myfoods">Manage My Foods</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/request-myfood">My Food Request</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/events">Community Events</NavLink>
      </li>
    </>
  );

  return (
    <header className="w-full py-2 fixed z-50 top-0 bg-light-secondary/90 shadow-xl backdrop-blur-sm">
      <div className="navbar justify-between w-11/12 sm:container xl:w-10/12 mx-auto !items-center">
        <div className="">
          <a className="flex gap-3 items-center text-xl dark:text-white md:text-3xl font-bold ml-3">
            <img src="/assets/logo.png" alt="" className="w-12 md:w-14" />
            BiteShare
          </a>
        </div>

        <div>
          <div className="hidden lg:flex gap-4 items-center">
            <ul className="menu-horizontal dark:text-white font-semibold px-1 gap-6 text-sm">
              {navList}
            </ul>
            {user ? (
              <div className="flex gap-4">
                <Tooltip
                  anchorSelect="#profile-pic"
                  place="bottom"
                  className="!p-2 !rounded-lg !bg-gray-700 !text-white !h-24"
                  clickable
                >
                  <div className="flex flex-col justify-center items-center space-y-2 py-2">
                    <p className="font-bold text-md">{user?.displayName}</p>
                    <button
                      onClick={handleLogOutBtn}
                      className="px-4 py-2 text-white font-semibold rounded-lg hover:bg-slate-500 bg-light-primary"
                    >
                      Logout
                    </button>
                  </div>
                </Tooltip>

                <div
                  tabIndex={0}
                  role="button"
                  id="profile-pic"
                  className="btn btn-ghost dark:border-white/70 btn-circle avatar"
                >
                  <div className="md:w-10 w-8 rounded-full relative">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/login"
                  className="bg-slate-200 text-sm px-4 py-2 rounded-md font-semibold hover:bg-slate-400 "
                >
                  LogIn
                </Link>
                <Link
                  to="/register"
                  className=" bg-amber-500 hover:bg-amber-600 text-sm px-4 py-2 rounded-md font-semibold"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          <div className="dropdown right-0 lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-base-100 rounded-box z-[30] mt-3 w-52 p-2 shadow right-0"
            >
              {navList}
            </ul>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
