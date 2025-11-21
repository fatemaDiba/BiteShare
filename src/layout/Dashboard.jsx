import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import { Outlet } from "react-router";

const Dashboard = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar - Fixed on desktop, drawer on mobile */}
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Sticky Topbar */}
        <Topbar onMenuClick={() => setIsMobileOpen(true)} />

        {/* Scrollable Content Area */}
        <main
          className="flex-1 overflow-y-auto bg-linear-to-br from-amber-50/30 via-orange-50/20 to-yellow-50/30"
          onClick={closeMobileMenu} // Close mobile menu when clicking content
        >
          <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Overlay (when sidebar is open) */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </div>
  );
};

export default Dashboard;