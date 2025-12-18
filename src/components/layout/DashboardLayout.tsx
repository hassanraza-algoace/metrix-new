import { Outlet } from "react-router-dom";
import AutoTitle from "./AutoTitle";
import DashboardHeader from "./DashboardHeader";
import SideBar from "./SideBar";
import ScrollToTop from "../ScrollToTop";

const DashboardLayout = () => {
  return (
    <>
      <ScrollToTop />
      <AutoTitle />
      <div className="flex w-full">
        <div className="lg:w-[20%] xl:w-fit">
          <SideBar />
        </div>

        <div className="flex-1 w-[80%] bg-[#EEF0FA]">
          <DashboardHeader />
          <div className="bg-[#EEF0FA] p-5 w-full">
              <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
