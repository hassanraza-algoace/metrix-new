import { TbCategoryFilled } from "react-icons/tb";
import Cards from "../components/UI/Cards";

const DashboardHome = () => {
  const cardData = [
    { id: 1, title: "Total Orders", description: "Today", value: 120 },
    { id: 2, title: "Completed", value: 95 },
  ];
  return (
    <div className="flex flex-col max-w-full">
      <div className="flex justify-between">
        <Cards
          icons={TbCategoryFilled}
          filterContent="orders"
          className="p-4 rounded-lg"
          content={cardData}
        />
        <Cards
          icons={TbCategoryFilled}
          filterContent="orders"
          className="p-4 rounded-lg"
          content={cardData}
        />
      </div>
      <div></div>
    </div>
  );
};

export default DashboardHome;
