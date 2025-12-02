import { useState, useEffect } from "react";
import { IoIosArrowDown, IoMdHome } from "react-icons/io";
import { PiBellSimpleFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";

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

  // Update on pathname change (and also browser tab)
  useEffect(() => {
    const title = getPageName();
    setPageTitle(title);
  }, [pathname]);

  return (
    <header className="">
      <div className="p-4 flex justify-between items-start">
        <div>
          <h1 className="text-[20px] font-[Poppins] font-medium">
            {pageTitle}
          </h1>
          
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-[#FEF5EA] flex items-center gap-3 cursor-pointer p-1.5 rounded-b-sm">
            <p className="text-[14px] font-[Inter]">Nanny’s Shop</p>
            <IoIosArrowDown />
          </div>
          <div>
            <PiBellSimpleFill className="text-[#5570F1] text-[18px] cursor-pointer" />
          </div>
          <div>
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
          <div className="px-4 py-1 border-t border-[#F1F3F9]">
              <IoMdHome className="text-[#5570F1] text-[18px] cursor-pointer" />
          </div>
    </header>
  );
};

export default DashboardHeader;
