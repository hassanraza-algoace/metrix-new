import { Outlet } from "react-router-dom";
import AutoTitle from "./AutoTitle";
import DashboardHeader from "./DashboardHeader";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  return (
    <>
      <AutoTitle />
      <div className="flex">
        <SideBar />

        <div className="flex-1">
          <DashboardHeader />
          <div className="bg-[#EEF0FA] p-5 min-h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
