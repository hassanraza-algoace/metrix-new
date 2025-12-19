// import { Plus } from "lucide-react";

import { GoPlus } from "react-icons/go";
import SimpleButton from "./SimpleButton";
import { NavLink } from "react-router-dom";
import { RouteDashboardInventoryAdd } from "../../pages/Routes";
import { CiFilter, CiSearch } from "react-icons/ci";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface RecentOrderProps {
  classes?: string;
  mainClass?: string;
}
interface customerOrders {
  customerName: string;
  orderDate: string;
  orderType: string;
  trackingID: string;
  orderTotal: string | number;
  action: string;
  actionStatus: string;
}
export const customerdata: customerOrders[] = [
  {
    customerName: "Janet Adebayo",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    trackingID: "9348fjr73",
    orderTotal: 25000,
    action: "Completed",
    actionStatus: "Completed",
  },
  {
    customerName: "Samuel Johnson",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    trackingID: "9348fjr73",
    orderTotal: 250000,
    action: "In-Progress",
    actionStatus: "In-Progress",
  },
  {
    customerName: "Francis Doe",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Pick Up",
    trackingID: "9348fjr73",
    orderTotal: 5000,
    action: "Pending",
    actionStatus: "Pending",
  },
  {
    customerName: "Christian Dior",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Pick Up",
    trackingID: "9348fjr73",
    orderTotal: 10000,
    action: "Completed",
    actionStatus: "Completed",
  },
  {
    customerName: "Janet Adebayo",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    trackingID: "9348fjr73",
    orderTotal: 35000,
    action: "Completed",
    actionStatus: "Completed",
  },
  {
    customerName: "Samuel Johnson",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    trackingID: "9348fjr73",
    orderTotal: 1500,
    action: "In-Progress",
    actionStatus: "In-Progress",
  },
  {
    customerName: "Francis Doe",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Pick Up",
    trackingID: "9348fjr73",
    orderTotal: 2000,
    action: "Pending",
    actionStatus: "Pending",
  },
  {
    customerName: "Christian Dior",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Pick Up",
    trackingID: "9348fjr73",
    orderTotal: 500,
    action: "Completed",
    actionStatus: "Completed",
  },
  {
    customerName: "Janet Adebayo",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    trackingID: "9348fjr73",
    orderTotal: 250,
    action: "Completed",
    actionStatus: "Completed",
  },
  {
    customerName: "Samuel Johnson",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    trackingID: "9348fjr73",
    orderTotal: 200000,
    action: "In-Progress",
    actionStatus: "In-Progress",
  },
  {
    customerName: "Francis Doe",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Pick Up",
    trackingID: "9348fjr73",
    orderTotal: 25000,
    action: "Pending",
    actionStatus: "Pending",
  },
  {
    customerName: "Christian Dior",
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Pick Up",
    trackingID: "9348fjr73",
    orderTotal: 29000,
    action: "Completed",
    actionStatus: "Completed",
  },
];
type Filters = {
  search: string;
  status: string;
  orderType: string[];
  priceFrom: number | ""; // empty string for initial state
  priceTo: number | "";
};
export default function RecentOrder({ classes, mainClass }: RecentOrderProps) {
  const [filterBox, setFilterBox] = useState(false);
  const [resfilter, setResFilter] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    status: "all",
    orderType: [],
    priceFrom: "",
    priceTo: "",
  });
  const handleResponsiveBtn = () => {
    setResFilter(!resfilter);
  };
  const handleFilterbtn = () => {
    setFilterBox(!filterBox);
  };
  const filteredData = customerdata.filter((item) => {
    const matchStatus =
      filters.status === "all" || item.actionStatus === filters.status;

    const matchSearch = item.customerName
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const matchOrderType =
      filters.orderType.length === 0 ||
      filters.orderType.includes(item.orderType);

    const matchPrice =
      (filters.priceFrom === "" ||
        Number(item.orderTotal) >= filters.priceFrom) &&
      (filters.priceTo === "" || Number(item.orderTotal) <= filters.priceTo);

    return matchStatus && matchSearch && matchOrderType && matchPrice;
  });
  const handlePriceFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // form submit ko rok do
    // filteredData automatically update ho jaayega kyunki filters state me change ho gaya
  };

  return (
    <div
      className={`bg-white mx-auto w-full p-4 rounded-lg relative flex flex-col ${mainClass}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center min-h-[50px] relative ">
        <h2 className={`${classes} text-sm font-medium text-gray-600 mb-0`}>
          Customer Orders
        </h2>
        <div className="block lg:hidden">
          <BsThreeDotsVertical onClick={handleResponsiveBtn} />
        </div>
        <div
          className={`${
            resfilter === true
              ? "flex! flex-col max-h-[120px] overflow-x-hidden overflow-y-auto absolute bg-white p-2 lg:p-1 border rounded top-10 right-0 z-50"
              : "hidden"
          } hidden lg:flex  gap-2 lg:w-auto w-[200px]`}
        >
          <div className="flex gap-2 px-1 rounded-sm items-center border border-[#CFD3D4]">
            <CiSearch size={20} className="text-[#53545C]" />
            <input
              type="text"
              placeholder="Search Name..."
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  search: e.target.value,
                }))
              }
              className="p-0 focus:outline-0 placeholder:text-[12px]"
            />
          </div>
          <div
            className="hidden lg:flex gap-1 px-1 rounded-sm items-center border cursor-pointer border-[#53545C]"
            onClick={handleFilterbtn}
          >
            <CiFilter size={12} className="text-[#53545C]" />
            <p className="text-[12px]">Filter</p>
          </div>
          <div
            className={`${
              filterBox ? "lg:block" : "lg:hidden"
            } lg:absolute top-10 lg:shadow-xl lg:border lg:p-3 lg:rounded-2xl right-0 max-w-[300px]! min-h-[200px]! bg-white z-1`}
          >
            <div className="flex flex-col gap-3">
              <h3 className="font-medium font-[Inter] text-[#1C1D22] text-sm">
                Filter
              </h3>
              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xs text-[#53545C]">Order Type</h4>
                  <div className="flex items-center gap-3 pb-2 border-b ">
                    <label className="text-[12px] gap-1 flex items-center">
                      {/* <input
                        type="checkbox"
                        name="homedelivery"
                        id="homedelivery"
                      /> */}
                      <input
                        type="checkbox"
                        name="homedelivery"
                        id="homedelivery"
                        value="Home Delivery"
                        checked={filters.orderType.includes("Home Delivery")}
                        onChange={() =>
                          setFilters((prev) => {
                            const isSelected =
                              prev.orderType.includes("Home Delivery");

                            return {
                              ...prev,
                              orderType: isSelected
                                ? prev.orderType.filter(
                                    (t) => t !== "Home Delivery"
                                  ) // uncheck
                                : [...prev.orderType, "Home Delivery"], // check
                            };
                          })
                        }
                      />
                      <p className="text-[#53545C]">Home Delivery</p>
                    </label>
                    <label className="text-[12px] gap-1 flex items-center">
                      <input
                        type="checkbox"
                        name="pickup"
                        id="pickup"
                        value="Pick Up"
                        checked={filters.orderType.includes("Pick Up")}
                        onChange={() =>
                          setFilters((prev) => {
                            const isSelected =
                              prev.orderType.includes("Pick Up");

                            return {
                              ...prev,
                              orderType: isSelected
                                ? prev.orderType.filter((t) => t !== "Pick Up") // uncheck
                                : [...prev.orderType, "Pick Up"], // check
                            };
                          })
                        }
                      />
                      <p className="text-[#53545C]">Pick Up</p>
                    </label>
                  </div>
                  <div className="border-t pt-2 flex flex-col gap-2">
                    <h4 className="text-xs text-[#53545C]">Status</h4>
                    <select
                      value={filters.status}
                      className=" focus:outline-none w-full rounded border p-1 text-[12px] focus:border-black focus:text-black text-[#53545C]"
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          status: e.target.value,
                        }))
                      }
                    >
                      <option value="all">All</option>

                      {[
                        ...new Set(
                          customerdata.map((item) => item.actionStatus)
                        ),
                      ].map((status, i) => (
                        <option key={i} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="border-t pt-2 flex flex-col gap-2">
                    <h4 className="text-xs text-[#53545C]">Amount</h4>
                    <form className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <div>
                          <h6 className="text-[12px]">From</h6>
                          <input
                            type="number"
                            name="from"
                            value={filters.priceFrom}
                            onChange={(e) =>
                              setFilters((prev) => ({
                                ...prev,
                                priceFrom:
                                  e.target.value === ""
                                    ? ""
                                    : Number(e.target.value),
                              }))
                            }
                            placeholder="0.00"
                            className="w-full text-[12px] border p-1 rounded placeholder-black"
                          />
                        </div>
                        <div>
                          <h6 className="text-[12px]">To</h6>
                          <input
                            type="number"
                            name="to"
                            value={filters.priceTo}
                            onChange={(e) =>
                              setFilters((prev) => ({
                                ...prev,
                                priceTo:
                                  e.target.value === ""
                                    ? ""
                                    : Number(e.target.value),
                              }))
                            }
                            placeholder="0.00"
                            className="w-full text-[12px] border p-1 rounded placeholder-black"
                          />
                        </div>
                      </div>
                      <button
                        onClick={(e) => handlePriceFilter(e)}
                        className="w-full bg-[#5570F1] py-1 rounded-xl text-white"
                      >
                        Filter
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              {filteredData?.map((data, i) => (
                <tr key={i} className="border-b text-sm">
                  <td className="py-3">{data.customerName}</td>
                  <td>{data.orderDate}</td>
                  <td>{data.orderType}</td>
                  <td>#{data.trackingID}</td>
                  <td>₦{Number(data.orderTotal).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
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
