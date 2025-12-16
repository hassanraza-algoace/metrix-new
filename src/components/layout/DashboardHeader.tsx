import { useState, useMemo, useEffect } from "react";
import { IoIosArrowDown, IoMdHome } from "react-icons/io";
import { PiBellSimpleFill } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";
import { RouteDashboard } from "../../pages/Routes";
import { getUserProfile } from "../../../services/userService"; // apna path
import { auth } from "../../../firebase/config"; // apna firebase path

const DashboardHeader = () => {
  const [userName, setUserName] = useState<string>("");
  // const [userEmail, setUserEmail] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [profilePicture, setProfilePicture] = useState<string>("");

  const { pathname } = useLocation();

  const pageTitle = useMemo(() => {
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
  }, [pathname]);
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setLoading(true);

    // Firebase se user data fetch karo
    const result = await getUserProfile();

    if (result.success && result.data) {
      setUserName(result.data.displayName || "User");
      // setUserEmail(result.data.email || '');
      setProfilePicture(result.data.photoURL || '');
    } else {
      // Agar Firestore mein data nahi hai to Auth se lo
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUserName(currentUser.displayName || "User");
        // setUserEmail(currentUser.email || '');
        setProfilePicture(currentUser.photoURL || '');
      }
    }

    setLoading(false);
  };

  const [showProfile, setShowProfile] = useState(false);
  const handleProfile = () => {
    setShowProfile(!showProfile);
  };
  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    );
  }
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
              {userName}'s Shop
            </p>
            <IoIosArrowDown className="hidden lg:block" />
          </div>
          <div>
            <PiBellSimpleFill className="text-[#5570F1] text-[18px] cursor-pointer" />
          </div>
          <div onClick={handleProfile}>
            <img
              src={profilePicture}
              alt={userName}
              width="32px"
              height="32px"
              className="rounded-full"
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
