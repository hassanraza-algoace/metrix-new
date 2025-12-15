import Cards from "@/components/UI/Cards";
import InventoryTable from "@/components/UI/InventoryTable";
import SimpleButton from "@/components/UI/SimpleButton";
import { FaFolderMinus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { RouteDashboardInventoryAdd } from "./Routes";

const DashboardInventory = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h2 className="font-[Inter] text-[16px] font-medium text-[#45464E]">
            Inventory Summary
          </h2>
        </div>
        <div>
          <NavLink to={RouteDashboardInventoryAdd}>
            <SimpleButton
              content={"Add a New Product"}
              icon={<GoPlus />}
              className={
                "text-[14px] py-1 px-2 gap-1 bg-[#5570F1] text-white! flex items-center rounded-lg"
              }
            />
          </NavLink>
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-1.5 mt-2">
        <Cards
          icons={FaFolderMinus}
          iconClassName="bg-[#FFFFFF29] text-white rounded-[8px] p-2"
          filterContent="This Week"
          filterClassName="hidden"
          lastOrderClassName="hidden"
          className="p-4 rounded-lg w-full lg:max-w-[49%] bg-[#5570F1]!"
          divClassName={"w-[35%] nth-3:w-[30%]"}
          titleClassName={"text-white"}
          vlueClassName={"text-white"}
          content={[
            { id: 1, title: "All Products", description: 350 },
            { id: 2, title: "Active", description: 316, value: "86%" },
          ]}
        />
        <Cards
          icons={LuUsers}
          iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
          filterContent="This Week"
          lastOrderClassName="hidden"
          className="p-4 rounded-lg w-full lg:max-w-[49%]"
          divClassName={"w-[50%] sm:w-[35%] sm:nth-3:w-[30%]"}
          content={[
            {
              id: 1,
              title: "Low Stock Alert",
              description: 23,
              titleClass: "text-[#CC5F5F]",
            },
            { id: 2, title: "Expired", description: 3 },
            { id: 3, title: "1 Start Rating", description: 2 },
          ]}
        />
      </div>
      <div>
        <InventoryTable />
      </div>
    </div>
  );
};

export default DashboardInventory;
