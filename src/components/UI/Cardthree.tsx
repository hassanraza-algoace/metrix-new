import { FaAngleDown } from "react-icons/fa";
import Graph from "./Graph";

const Cardthree = () => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-[16px] font-medium text-[#45464E] font-[Inter]">
            Summary
          </h3>
          <div className="flex items-center px-[15px] py-2.5 gap-1 bg-[#5570F114] rounded-lg">
            <p className="text-[#5570F1] font-[Inter] text-[12px] font-normal">
              Sales
            </p>
            <FaAngleDown className="text-[#5570F1] text-[8px]" />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <select
            name="fillter-days"
            id="fillter-days"
            className="text-[#1C1D22] font-[Inter] text-[12px] font-normal"
          >
            <option value="Last-1-Days">Last 1 Days</option>
            <option value="Last-2-Days">Last 2 Days</option>
            <option value="Last-3-Days">Last 3 Days</option>
            <option value="Last-4-Days">Last 4 Days</option>
            <option value="Last-5-Days">Last 5 Days</option>
            <option value="Last-6-Days">Last 6 Days</option>
            <option value="Last-7-Days">Last 7 Days</option>
          </select>
        </div>
          </div>
          <Graph/>
    </div>
  );
};

export default Cardthree;
