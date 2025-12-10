import { Outlet } from "react-router-dom";
import AutoTitle from "./AutoTitle";
import DashboardHeader from "./DashboardHeader";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  return (
    <>
      <AutoTitle />
      <div className="flex w-full">
        <div className="lg:w-[20%]">
          <SideBar />
        </div>

        <div className="flex-1 w-[80%]">
          <DashboardHeader />
          <div className="bg-[#EEF0FA] p-5 min-h-screen w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
