// import { Plus } from "lucide-react";

import { GoPlus } from "react-icons/go";
import SimpleButton from "./SimpleButton";
import { NavLink } from "react-router-dom";
import { RouteDashboardInventoryAdd } from "../../pages/Routes";

interface RecentOrderProps {
  classes?: string;
  mainClass?: string;
}
interface customerOrders {
  customerName: string;
  orderDate: string;
  orderType: string;
  trackingID: string;
  orderTotal: string;
  action: string;
  actionStatus: string;
}
export const customerdata: customerOrders[] = [
  {
    customerName: "Janet Adebayo",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    trackingID: "9348fjr73",
    orderTotal: "25,000.00",
    action: "Completed",
    actionStatus: "Completed",
  },
  {
    customerName: "Samuel Johnson",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    trackingID: "9348fjr73",
    orderTotal: "25,000.00",
    action: "In-Progress",
    actionStatus: "In-Progress",
  },
  {
    customerName: "Francis Doe",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Pick Up",
    trackingID: "9348fjr73",
    orderTotal: "25,000.00",
    action: "Pending",
    actionStatus: "Pending",
  },
  {
    customerName: "Christian Dior",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Pick Up",
    trackingID: "9348fjr73",
    orderTotal: "25,000.00",
    action: "Completed",
    actionStatus: "Completed",
  },
  {
    customerName: "Janet Adebayo",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    trackingID: "9348fjr73",
    orderTotal: "25,000.00",
    action: "Completed",
    actionStatus: "Completed",
  },
  {
    customerName: "Samuel Johnson",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    trackingID: "9348fjr73",
    orderTotal: "25,000.00",
    action: "In-Progress",
    actionStatus: "In-Progress",
  },
  {
    customerName: "Francis Doe",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Pick Up",
    trackingID: "9348fjr73",
    orderTotal: "25,000.00",
    action: "Pending",
    actionStatus: "Pending",
  },
  {
    customerName: "Christian Dior",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Pick Up",
    trackingID: "9348fjr73",
    orderTotal: "25,000.00",
    action: "Completed",
    actionStatus: "Completed",
  },
  {
    customerName: "Janet Adebayo",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    trackingID: "9348fjr73",
    orderTotal: "25,000.00",
    action: "Completed",
    actionStatus: "Completed",
  },
  {
    customerName: "Samuel Johnson",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    trackingID: "9348fjr73",
    orderTotal: "25,000.00",
    action: "In-Progress",
    actionStatus: "In-Progress",
  },
  {
    customerName: "Francis Doe",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Pick Up",
    trackingID: "9348fjr73",
    orderTotal: "25,000.00",
    action: "Pending",
    actionStatus: "Pending",
  },
  {
    customerName: "Christian Dior",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Pick Up",
    trackingID: "9348fjr73",
    orderTotal: "25,000.00",
    action: "Completed",
    actionStatus: "Completed",
  },
];

export default function RecentOrder({ classes, mainClass }: RecentOrderProps) {
  return (
    <div
      className={`bg-white mx-auto w-full p-4 rounded-lg flex flex-col ${mainClass}`}
    >
      {/* Header */}
      <h2 className={`${classes} text-sm font-medium text-gray-600 mb-6`}>
        Recent Orders
      </h2>

      {/* Empty State Content */}
      {customerdata.length < 1 ? (
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
          <NavLink to={RouteDashboardInventoryAdd}>
            <SimpleButton
              className={
                "text-[14px] py-1 px-2 gap-1 bg-[#5570F1] text-white! flex items-center rounded-lg"
              }
              content={"New Product"}
              icon={<GoPlus />}
            />
          </NavLink>
        </div>
      ) : (
        <div className="overflow-x-auto w-full max-h-[230px]">
          <table className="w-full text-left min-w-[800px]">
            <thead className="sticky top-0 bg-white">
              <tr className="text-gray-500 text-sm border-b">
                <th className="py-3">Customer Name</th>
                <th>Order Date</th>
                <th>Order Type</th>
                <th>Tracking ID</th>
                <th>Order Total</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            
              <tbody>
                {customerdata?.map((data, i) => (
                  <tr key={i} className="border-b text-sm">
                    <td className="py-3">{data.customerName}</td>
                    <td>{data.orderDate}</td>
                    <td>{data.orderType}</td>
                    <td>#{data.trackingID}</td>
                    <td>₦{data.orderTotal}</td>
                    <td>
                      <span className="px-3 py-1 bg-gray-200 rounded-xl text-xs">
                        {data.action}
                      </span>
                    </td>
                    {/* <td>₦{data.trackingID}</td> */}
                    <td>
                      <span
                        className={`px-3 py-1 rounded-xl text-xs ${
                          data.actionStatus === "Completed"
                            ? "bg-[#32936F29] text-[#519C66]"
                            : data.actionStatus === "In-Progress"
                            ? "bg-[#5570F129] text-[#5570F1] "
                            : data.actionStatus === "Pending"
                            ? "bg-[#FFF2E2] text-[#1C1D22]"
                            : "bg-yellow-500 text-white"
                        }`}
                      >
                        {data.actionStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            
          </table>
        </div>
      )}
    </div>
  );
}
