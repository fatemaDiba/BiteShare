import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import { Tooltip } from "react-tooltip";
import Profile from "./dashboard/Profile";

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-foods">All Foods</NavLink>
      </li>
      {user && (
        // <li>
        //   <NavLink to="/add-food">Add Food</NavLink>
        // </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      {/* {user && (
        <li>
          <NavLink to="/manage-myfoods">Manage My Foods</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/request-myfood">My Food Request</NavLink>
        </li>
      )} */}
      <li>
        <NavLink to="/events">Community Events</NavLink>
      </li>
    </>
  );

  return (
    <header className="w-full py-2 fixed z-50 top-0 bg-light-secondary/90 shadow-xl backdrop-blur-sm">
      <div className="navbar justify-between w-11/12 sm:container xl:w-10/12 mx-auto items-center!">
        <div className="">
          <Link
            to="/"
            className="flex gap-3 items-center text-xl  md:text-3xl font-bold ml-3"
          >
            <img src="/assets/logo.png" alt="" className="w-12 md:w-14" />
            BiteShare
          </Link>
        </div>

        <div>
          <div className="hidden lg:flex gap-4 items-center">
            <ul className="menu-horizontal  font-semibold px-1 gap-6 text-sm">
              {navList}
            </ul>
            <Profile />
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
              className="menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow right-0"
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
