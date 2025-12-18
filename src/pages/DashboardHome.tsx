import Cards from "../components/UI/Cards";
import { HiOutlineChartPie } from "react-icons/hi";
import { LuFolderMinus, LuUsers } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import CardTwo from "../components/UI/CardTwo";
import { FiShoppingCart } from "react-icons/fi";
import Cardthree from "../components/UI/Cardthree";
import DashboardRecentOrder from "../components/UI/DashboradRecentOrder";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

const DashboardHome = () => {
  const cardData1 = [
    { id: 1, title: "Sales", description: "₦4,000,000.00" },
    { id: 2, title: "Volume", description: 450, value: "+0.00%" },
  ];
  const cardData2 = [
    { id: 1, title: "Customers", description: "1,250", value: "+15.80%" },
    { id: 2, title: "Active", description: "1,180", value: "85%" },
  ];
  const cardData3 = [
    { id: 1, title: "All Orders", description: 450 },
    { id: 2, title: "Pending", description: 5 },
    { id: 3, title: "Completed", description: 445 },
  ];
  const cardData4 = [
    { id: 1, title: "All Products", description: 45 },
    { id: 2, title: "Active", description: 32, value: "+24%" },
  ];
  const cardData5 = [
    { id: 1, title: "Abandoned Cart", description: "20%", value: "+0.00%" },
    { id: 2, title: "Customers", description: 30 },
  ];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate 1 second loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center py-4">
          <Loader height="h-5" width="w-5" />
        </div>
      ) : (
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
              <DashboardRecentOrder />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardHome;
