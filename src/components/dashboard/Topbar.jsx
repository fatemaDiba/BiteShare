import { FiMenu } from "react-icons/fi";
import Profile from "./Profile";

const Topbar = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-light-primary px-4 py-3 text-white shadow-md sm:px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-2xl hover:bg-white/10 lg:hidden"
        >
          <FiMenu />
        </button>
        <h1 className="text-lg font-semibold sm:text-xl">Dashboard</h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="hidden rounded-lg bg-white/20 px-4 py-2 text-sm placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 sm:block"
        />
        <Profile />
      </div>
    </header>
  );
};

export default Topbar;