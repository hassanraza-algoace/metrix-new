// import { Plus } from "lucide-react";

import { GoPlus } from "react-icons/go";
import SimpleButton from "./SimpleButton";

interface RecentOrderProps {
  classes?: string;
  mainClass?: string;
}

export default function RecentOrder({classes , mainClass}: RecentOrderProps) {
  return (
    <div className={`bg-white mx-auto p-4 rounded-lg min-h-full flex flex-col ${mainClass}`}>
      {/* Header */}
      <h2 className={`${classes} text-sm font-medium text-gray-600 mb-6`}>Recent Orders</h2>

      {/* Empty State Content */}
      <div className="flex flex-col items-center justify-center grow text-center">
        {/* Icon Circle */}
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-4">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 7l1-2h10l1 2" />
            <path d="M3 7h18l-2 13H5L3 7z" />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-1">No Orders Yet?</h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-5 px-6">
          Add products to your store and start selling to see orders here.
        </p>

        {/* Button */}
        <SimpleButton className={"text-[14px] py-1 px-2 gap-1 bg-[#5570F1] text-white! flex items-center rounded-lg"} content={"New Product"} icon={<GoPlus />} />
      </div>
    </div>
  );
}
