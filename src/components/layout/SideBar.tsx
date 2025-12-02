import { TbCategoryFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import SimpleButton from "../UI/SimpleButton";
import { BsHandbag } from "react-icons/bs";
import { LuFolderMinus, LuUsersRound } from "react-icons/lu";
import { IoChatbubbleEllipsesOutline, IoSettingsOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <aside className="w-[296px] h-screen p-4 flex flex-col items-start">
      <div>
        <img src="/images/Logo.png" alt="LOGO" />
      </div>
      <div className="mt-[50px]">
        <ul className="flex flex-col gap-3">
          <li>
            <NavLink to="/dashboard">
              <SimpleButton
                content={"Dashboard"}
                icon={<TbCategoryFilled />}
                className="flex items-center justify-start gap-2 bg-[#5570F1] text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-white w-[180px]"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/orders">
              <SimpleButton
                content={"Orders"}
                icon={<BsHandbag />}
                className="flex items-center justify-start gap-2 text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-[#53545C] w-[180px]"
                numbers={3}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/customers">
              <SimpleButton
                content={"Customers"}
                icon={<LuUsersRound />}
                className="flex items-center justify-start gap-2 text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-[#53545C] w-[180px]"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/inventory">
              <SimpleButton
                content={"Inventory"}
                icon={<LuFolderMinus />}
                className="flex items-center justify-start gap-2 text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-[#53545C] w-[180px]"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/conversations">
              <SimpleButton
                content={"Conversations"}
                icon={<IoChatbubbleEllipsesOutline />}
                className="flex items-center justify-start gap-2 text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-[#53545C] w-[180px]"
                numbers={16}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/settings">
              <SimpleButton
                content={"Settings"}
                icon={<IoSettingsOutline />}
                className="flex items-center justify-start gap-2 text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-[#53545C] w-[180px]"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default SideBar;
