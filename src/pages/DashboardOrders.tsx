import { GoPlus } from "react-icons/go";
import SimpleButton from "../components/UI/SimpleButton";
import Cards from "../components/UI/Cards";
import { BsHandbag } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import RecentOrder from "../components/UI/RecentOrder";
import { customerdata } from "../components/UI/RecentOrder";
const DashboardOrders = () => {
  const cardData1 = [
    { id: 1, title: "All Orders", description: customerdata.length },
    {
      id: 2,
      title: "Pending",
      description: customerdata.filter(
        (order) => order.actionStatus === "Pending"
      ).length,
    },
    {
      id: 3,
      title: "Completed",
      description: customerdata.filter(
        (order) => order.actionStatus === "Completed"
      ).length,
    },
  ];
  const cardData2 = [
    { id: 1, title: "Canceled", description: 30, value: "-20%" },
    { id: 2, title: "Returned", description: 20 },
    { id: 3, title: "Damaged", description: 5 },
  ];
  const cardData3 = [
    { id: 1, title: "Abandoned Cart",description: "20%", value: "+0.00%" },
    { id: 2, title: "Customers", description: 30 },
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
            className={
              "text-[14px] py-1 px-2 gap-1 bg-[#5570F1] text-white! flex items-center rounded-lg"
            }
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
      <RecentOrder />
    </div>
  );
};

export default DashboardOrders;
