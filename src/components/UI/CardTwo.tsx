import { FaAngleDown } from "react-icons/fa";
import { ChartPieDonut } from "./ChartPieDonut";

const CardTwo = () => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-5 w-full">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-medium text-[#45464E] font-[Inter]">
          Marketting
        </h3>
        <div className="flex items-center gap-1">
          <p className="text-[#BEC0CA] font-[Inter] text-[12px] font-normal">
            This Week
          </p>
          <FaAngleDown className="text-[#BEC0CA] text-[8px]" />
        </div>
      </div>
      <div>
        <ul className="flex justify-between flex-wrap">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-[100%] bg-[#5570F1]"></div>
            <p className="text-[11px] font-normal font-[Inter] text-[#A6A8B1]">
              Acquisition
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-[100%] bg-[#97A5EB]"></div>
            <p className="text-[11px] font-normal font-[Inter] text-[#A6A8B1]">
              Purchase
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-[100%] bg-[#FFCC91]"></div>
            <p className="text-[11px] font-normal font-[Inter] text-[#A6A8B1]">
              Retention
            </p>
          </li>
        </ul>
      </div>
      <div className="-my-2.5">
          <ChartPieDonut />
      </div>
    </div>
  );
};

export default CardTwo;
