import { useState, useEffect } from "react";
import { IoIosArrowDown, IoMdHome } from "react-icons/io";
import { PiBellSimpleFill } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";
import { RouteDashboard } from "../../pages/Routes";

const DashboardHeader = () => {
  const { pathname } = useLocation();

  const getPageName = () => {
    const parts = pathname.split("/").filter(Boolean); // remove empty parts
    if (parts.length === 0) return "Login";
    if (parts[0] === "dashboard") {
      // Dynamic dashboard page title
      if (parts[1] === "customers" && parts[2]) return "Customer Details";
      return parts[1]
        ? parts[1].charAt(0).toUpperCase() + parts[1].slice(1)
        : "Dashboard";
    }
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  };

  const [pageTitle, setPageTitle] = useState(getPageName());
  const [showProfile, setShowProfile] = useState(false);

  // Update on pathname change (and also browser tab)
  useEffect(() => {
    setPageTitle(getPageName());
  }, [pathname]);
  const handleProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="p-4 flex justify-between items-start">
        <div>
          <h1 className="text-[20px] font-[Poppins] font-medium">
            {pageTitle}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <div
            className={`${
              showProfile === true ? "flex! absolute right-2 top-14" : "hidden"
            } bg-[#FEF5EA] lg:static lg:flex items-center gap-3 cursor-pointer p-1.5 rounded-b-sm`}
          >
            <p className="lg:text-[14px] text-[12px]  font-[Inter]">
              Nanny’s Shop
            </p>
            <IoIosArrowDown className="hidden lg:block" />
          </div>
          <div>
            <PiBellSimpleFill className="text-[#5570F1] text-[18px] cursor-pointer" />
          </div>
          <div onClick={handleProfile}>
            <img
              src="/images/profile.jpg"
              alt="profile-picture"
              width="32px"
              height="32px"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-1 border-t border-[#F1F3F9] flex items-center gap-2">
        <NavLink to={RouteDashboard}>
          <IoMdHome className="text-[#5570F1] text-[18px] cursor-pointer" />
        </NavLink>
        {pageTitle !== "Dashboard" ? (
          <p className="text-[12px]">/ {pageTitle}</p>
        ) : null}
      </div>
    </header>
  );
};

export default DashboardHeader;
