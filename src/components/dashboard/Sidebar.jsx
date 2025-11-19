
import { useState } from "react";
import { BiCog, BiHome, BiUser } from "react-icons/bi";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { BsFolder2 } from "react-icons/bs";
import { RiStickyNoteAddLine } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router";
const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: <BiHome className="text-2xl" />, path: "/dashboard" },
    { name: "Add Food", icon: <RiStickyNoteAddLine className="text-2xl" />, path: "/dashboard/add-food" },
    { name: "My Foods", icon: <GrUpdate className="text-xl" />, path: "/dashboard/manage-myfoods" },

    { name: "Requested Foods", icon: <BsFolder2 className="text-2xl" />, path: "/dashboard/request-myfood" },

  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-slate-50 shadow-xl transition-all duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          ${isCollapsed ? "lg:w-24" : "lg:w-64"}
          w-64 lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        <div className="flex h-full flex-col">
          {/* HEADER */}
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-2 gap-2">
            {/* Logo + Title */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="BiteShare"
                className="h-9 w-9 flex-shrink-0 object-contain rounded-lg"
              />
              <h2
                className={`origin-left whitespace-nowrap text-xl font-bold text-slate-800 transition-all duration-300
                  ${isCollapsed
                    ? "lg:max-w-0 lg:scale-0 lg:opacity-0 lg:overflow-hidden"
                    : "lg:max-w-none lg:scale-100 lg:opacity-100"
                  } hidden lg:block
                `}
              >
                BiteShare
              </h2>
            </Link>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              {/* Mobile Close */}
              <button
                onClick={() => setIsMobileOpen(false)}
                className="text-xl text-slate-600 hover:text-slate-900 lg:hidden"
              >
                <FiX />
              </button>

              {/* Collapse Toggle */}
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="flex max-lg:hidden cursor-pointer p-1.5 me-0.5 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all hover:scale-110 hover:bg-blue-200"
              >
                {isCollapsed ? (
                  <PiCaretRightBold className="text-sm" />
                ) : (
                  <PiCaretLeftBold className="text-sm" />
                )}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8 flex-1 space-y-2 px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`group relative flex items-center rounded-xl transition-all duration-200
                  ${location.pathname === item.path
                    ? "bg-blue-100 text-blue-800 shadow-md shadow-blue-200/50 font-semibold"
                    : "text-slate-700 hover:bg-blue-100 hover:text-blue-700"
                  }
                  ${isCollapsed ? "lg:justify-center py-3" : "justify-start px-3 py-2.5"}
                `}
              >
                {/* Icon Container - Always Centered */}
                <div className="flex h-10 w-10 items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>

                {/* Text */}
                <span
                  className={`ml-3 whitespace-nowrap text-sm font-medium transition-all duration-300
                    ${isCollapsed
                      ? "lg:max-w-0 lg:scale-0 lg:opacity-0 lg:overflow-hidden lg:ml-0"
                      : "lg:max-w-none lg:scale-100 lg:opacity-100"
                    }`}
                >
                  {item.name}
                </span>

                {/* Tooltip: Mobile (Below) | Desktop (Right) */}
                {isCollapsed && (
                  <>
                    {/* Mobile Tooltip - Inside, Below Icon */}
                    <div className="pointer-events-none absolute inset-x-0 top-full mt-1 w-full px-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:hidden">
                      <div className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white shadow-md text-center">
                        {item.name}
                      </div>
                    </div>

                    {/* Desktop Tooltip - Outside to Right */}
                    <div className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 z-50 hidden lg:block">
                      {item.name}
                    </div>
                  </>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;