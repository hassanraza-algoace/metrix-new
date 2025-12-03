import { useState, useEffect } from "react";
import { IoIosArrowDown, IoMdHome } from "react-icons/io";
import { PiBellSimpleFill } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";
import { RouteDashboard } from "../../pages/Routes";

const DashboardHeader = () => {
  const { pathname } = useLocation();

  // Initial state derived from pathname
  const getPageName = () => {
    if (pathname === "/") return "Login";
    const lastPart = pathname.split("/").pop();
    return lastPart
      ? lastPart.charAt(0).toUpperCase() + lastPart.slice(1)
      : "Page";
  };

  const [pageTitle, setPageTitle] = useState(getPageName());
  const [showProfile, setShowProfile] = useState(false);

  // Update on pathname change (and also browser tab)
  useEffect(() => {
    const title = getPageName();
    setPageTitle(title);
  }, [pathname]);
  const handleProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <header className="sticky top-0 bg-white">
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
        {
          pageTitle !== "Dashboard"  ? <p className="text-[12px]">/ {pageTitle}</p> : null
        }
        
      </div>
    </header>
  );
};

export default DashboardHeader;
