import { GoPlus } from "react-icons/go";
import SimpleButton from "../components/UI/SimpleButton";
import Cards from "../components/UI/Cards";
import { BsHandbag } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import RecentOrder from "../components/UI/RecentOrder";

const DashboardOrders = () => {
  const cardData1 = [
    { id: 1, title: "All Orders", value: 0 },
    { id: 2, title: "Pending", value: 0 },
    { id: 3, title: "Completed", value: 0 },
  ];
  const cardData2 = [
    { id: 1, title: "Canceled", value: 0 },
    { id: 2, title: "Returned", value: 0 },
    { id: 3, title: "Damaged", value: 0 },
  ];
  const cardData3 = [
    { id: 1, title: "Abandoned Cart", value: 0 },
    { id: 2, title: "Customers", value: 0 },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h2 className="font-[Inter] text-[16px] font-medium text-[#45464E]">
            Order Summary
          </h2>
        </div>
        <div>
          <SimpleButton
            content={"Create a New Order"}
            icon={<GoPlus />}
            className={"text-[14px] py-1 px-2 gap-1 bg-[#5570F1] text-white! flex items-center rounded-lg"}
          />
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-1.5 mt-2">
        <Cards
          icons={BsHandbag}
          iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
          filterContent="This Week"
          className="p-4 rounded-lg w-full lg:max-w-[35%]"
          divClassName={"w-[35%] nth-3:w-[30%]"}
          content={cardData1}
        />
        <Cards
          icons={BsHandbag}
          iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
          filterContent="This Week"
          className="p-4 rounded-lg w-full lg:max-w-[35%]"
          divClassName={"w-[35%] nth-3:w-[30%]"}
          content={cardData2}
        />
        <Cards
          icons={FiShoppingCart}
          iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
          filterContent="This Week"
          className="p-4 rounded-lg w-full lg:max-w-[28%]"
          divClassName={"w-[70%] nth-2:w-[30%]"}
          content={cardData3}
        />
      </div>
      <div className="h-full">
        <RecentOrder classes={"hidden"} mainClass={"min-h-[60vh]"}/>
      </div>
    </div>
  );
};

export default DashboardOrders;
