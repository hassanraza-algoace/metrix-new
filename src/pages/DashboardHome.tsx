import Cards from "../components/UI/Cards";
import { HiOutlineChartPie } from "react-icons/hi";
import { LuFolderMinus, LuUsers } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import CardTwo from "../components/UI/CardTwo";
import { FiShoppingCart } from "react-icons/fi";
import Cardthree from "../components/UI/Cardthree";
import RecentOrder from "../components/UI/RecentOrder";

const DashboardHome = () => {
  const cardData1 = [
    { id: 1, title: "Sales", description: "₦0.00", value: "+0.00%" },
    { id: 2, title: "Volume", value: 0 },
  ];
  const cardData2 = [
    { id: 1, title: "Customers", description: 0, value: "+0.00%" },
    { id: 2, title: "Active", description: 0, value: "+0.00%" },
  ];
  const cardData3 = [
    { id: 1, title: "All Orders", value: 0 },
    { id: 2, title: "Pending", value: 0 },
    { id: 3, title: "Completed", description: 0, value: "+0.00%" },
  ];
  const cardData4 = [
    { id: 1, title: "All Products", description: 0, value: "+0.00%" },
    { id: 2, title: "Active", description: 0, value: "+0.00%"},
  ];
  const cardData5 = [
    { id: 1, title: "Abandoned Cart", description: "0%", value: "+0.00%" },
    { id: 2, title: "Customers", value: 0},
  ];
  return (
    <div className="flex flex-col max-w-full gap-5">
      <div className="flex justify-between flex-wrap gap-1.5">
        <Cards
          icons={HiOutlineChartPie}
          iconClassName="bg-[#5570F11F] text-[#5570F1] rounded-[8px] p-2"
          filterContent="This Week"
          className="p-4 rounded-lg w-full lg:max-w-[30%]"
          divClassName="w-[70%] nth-2:w-[30%]"
          content={cardData1}
        />
        <Cards
          icons={LuUsers}
          iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
          filterContent="This Week"
          className="p-4 rounded-lg w-full lg:max-w-[30%]"
          divClassName="w-[70%] nth-2:w-[30%]"
          content={cardData2}
        />
        <Cards
          icons={BsHandbag}
          iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
          filterContent="This Week"
          className="p-4 rounded-lg w-full lg:max-w-[35%]"
          divClassName={"w-[35%] nth-3:w-[30%]"}
          content={cardData3}
        />
      </div>
      <div className="flex justify-between flex-wrap lg:flex-nowrap gap-3">
        <div className="flex flex-col gap-3 w-full lg:w-[62.5%]">
          <div className="flex flex-wrap lg:flex-nowrap flex-1 gap-3">
            <div className="w-full">
              <CardTwo />
            </div>
            <div className="flex flex-col gap-3 w-full justify-between ">
              <div className="w-full">
                <Cards
                  icons={LuFolderMinus}
                  iconClassName="bg-[#FFCC9129] text-white rounded-[8px] p-2"
                  downIconClassName="hidden"
                  className="p-4 rounded-lg min-h-[152px] justify-center w-full bg-[#5570F1]!"
                  divClassName={"w-[70%] nth-2:w-[30%]"}
                  titleClassName="text-white"
                  vlueClassName="text-white"
                  content={cardData4}
                />
              </div>
              <div>
                <Cards
                  icons={FiShoppingCart}
                  iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
                  filterContent="This Week"
                  className="p-4 rounded-lg min-h-[152px] justify-center w-full"
                  divClassName={"w-[70%] nth-2:w-[30%]"}
                  content={cardData5}
                />
              </div>
            </div>
          </div>
          <div>
            <Cardthree />
          </div>
        </div>
        <div className="w-full lg:w-[35%]">
          <RecentOrder />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
