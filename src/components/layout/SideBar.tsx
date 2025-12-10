import { TbCategoryFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import SimpleButton from "../UI/SimpleButton";
import { BsHandbag } from "react-icons/bs";
import { LuFolderMinus, LuUsersRound } from "react-icons/lu";
import {
  IoChatbubbleEllipsesOutline,
  IoLogOut,
  IoSettingsOutline,
} from "react-icons/io5";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  RouteDashboard,
  RouteDashboardConversations,
  RouteDashboardCustomers,
  RouteDashboardInventory,
  RouteDashboardOrders,
  RouteDashboardSettings,
} from "../../pages/Routes";
import { FiGift, FiHeadphones } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";

type NavBarItem = {
  label: string;
  isSelected: boolean;
  counts: number;
  url: string;
  icon: IconType;
};

const SideBar = () => {
  const initialNavBarItems: NavBarItem[] = [
    {
      label: "Dashboard",
      isSelected: true,
      counts: 0,
      url: RouteDashboard,
      icon: TbCategoryFilled,
    },
    {
      label: "Orders",
      isSelected: false,
      counts: 3,
      url: RouteDashboardOrders,
      icon: BsHandbag,
    },
    {
      label: "Customers",
      isSelected: false,
      counts: 0,
      url: RouteDashboardCustomers,
      icon: LuUsersRound,
    },
    {
      label: "Inventory",
      isSelected: false,
      counts: 0,
      url: RouteDashboardInventory,
      icon: LuFolderMinus,
    },
    {
      label: "Conversations",
      isSelected: false,
      counts: 16,
      url: RouteDashboardConversations,
      icon: IoChatbubbleEllipsesOutline,
    },
    {
      label: "Settings",
      isSelected: false,
      counts: 0,
      url: RouteDashboardSettings,
      icon: IoSettingsOutline,
    },
  ];
  const [navBarItems, setNavBarItems] =
    useState<NavBarItem[]>(initialNavBarItems);
  const selectNavBarItem = (index: number) => {
    setNavBarItems((prev) =>
      prev.map((item, i) => ({
        ...item,
        isSelected: i === index, // only the clicked item is selected
      }))
    );
  };

  const navBarClass = `text-[0px] lg:flex lg:items-center lg:justify-start lg:gap-2  lg:text-[14px] lg:font-[Inter] lg:font-normal p-2 lg:px-4 lg:py-[17px] rounded-xl text-[#53545C] lg:min-w-[180px] relative `;
  const btnclasses = `text-[0px] lg:flex lg:items-center lg:justify-start lg:gap-2  lg:text-[14px] lg:font-[Inter] lg:font-normal p-2 lg:px-4 lg:py-[17px] rounded-xl lg:min-w-[180px] relative`;
  const selectedNavbarClass = `text-[0px] lg:flex lg:items-center lg:justify-start lg:gap-2 bg-[#5570F1] lg:text-[14px] lg:font-[Inter] p-2 lg:font-normal lg:px-4 lg:py-[17px] rounded-xl text-white lg:min-w-[180px] relative`;


  return (
    <aside className="h-screen overflow-y-auto lg:px-4 pb-4 flex flex-col  items-center lg:items-start sticky top-0">
      <div className="sticky top-0 bg-white w-full pt-4 z-10 flex justify-center lg:justify-start ">
        <img src="/images/Logo.png" alt="LOGO" className="hidden lg:block" />
        <img src="/images/Graph.svg" alt="LOGO" className="block lg:hidden w-[50%]"/>
      </div>
      <div className="mt-[50px] flex flex-col justify-between flex-[100%]">
        <div>
          <ul className="flex flex-col gap-3">
            {navBarItems.map((item, index) => {
              return (
                <li>
                  <NavLink
                    to={item.url}
                    onClick={() => selectNavBarItem(index)}
                  >
                    <SimpleButton
                      content={item.label}
                      icon={<item.icon className="text-[12px]" />}
                      className={
                        item.isSelected ? selectedNavbarClass : navBarClass
                      }
                      numbers={
                        item.counts > 0 && !item.isSelected ? item.counts : null
                      }
                    />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div>
            <SimpleButton
              content={"Contact Support"}
              icon={<FiHeadphones className="text-[12px]" />}
              className={`${btnclasses} mt-20 bg-[#5E63661A] text-[#1C1D22]`}
            />
          </div>
          <div className={`${btnclasses} max-w-fit mt-5 lg:flex-col bg-[#FFCC9133]`}>
            <SimpleButton
              content={"Free Gift Awaits You!"}
              icon={<FiGift className="text-[12px]" />}
              className={`${btnclasses} p-0! text-[#1C1D22]`}
            />
            <SimpleButton
              content={"Upgrade your account"}
              icon={<FaAngleRight className="lg:text-[12px] text-0" />}
              className={`${btnclasses} p-0! lg:justify-end! lg:flex-row-reverse lg:text-[12px]! text-[#1C1D22]`}
            />
          </div>
          <div>
            <SimpleButton
              content={"Logout"}
              icon={<IoLogOut className="text-[12px]" />}
              className={`${btnclasses} text-[#CC5F5F]`}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
export default SideBar;
