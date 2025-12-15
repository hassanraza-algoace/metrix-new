import { LuUsers } from "react-icons/lu";
import SimpleButton from "../components/UI/SimpleButton";
import { GoPlus } from "react-icons/go";
import Cards from "../components/UI/Cards";
import { BsHandbag } from "react-icons/bs";
import CustomersTable from "../components/UI/CustomersTable";
import { useState } from "react";
import AddCustomerModal from "../components/UI/AddCustomerModal";

const DashboardCustomers = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const cardData1 = [
    { id: 1, title: "All Customers", value: "+15.80%", description: 1250 },
    { id: 2, title: "Active", value: "+85%", description: 1180 },
    { id: 3, title: "In-Active", value: "-10%", description: 70 },
  ];
  const cardData2 = [
    { id: 1, title: "New Customers", value: "-20%", description: 30 },
    { id: 2, title: "Purchasing", description: 657 },
    { id: 3, title: "Abandoned Carts", description: 5 },
  ];
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h2 className="font-[Inter] text-[16px] font-medium text-[#45464E]">
            Customers Summary
          </h2>
        </div>
        <div>
          <SimpleButton
            content={"Add a New Customer"}
            icon={<GoPlus />}
            onClick={handleOpen}
            className={
              "text-[14px] py-1 px-2 gap-1 bg-[#5570F1] text-white! flex items-center rounded-lg"
            }
          />
          <AddCustomerModal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-1.5 mt-2">
        <Cards
          icons={LuUsers}
          iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
          filterContent="This Week"
          className="p-4 rounded-lg w-full lg:max-w-[49%]"
          divClassName={"sm:w-[35%] sm:nth-3:w-[30%]"}
          titleClassName=""
          content={cardData1}
        />
        <Cards
          icons={BsHandbag}
          iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
          filterContent="This Week"
          className="p-4 rounded-lg w-full lg:max-w-[49%]"
          divClassName={"sm:w-[35%] sm:nth-3:w-[30%]"}
          content={cardData2}
        />
      </div>
      <div className="h-full w-full">
        <CustomersTable />
      </div>
    </div>
  );
};

export default DashboardCustomers;
