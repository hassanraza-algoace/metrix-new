import { useState } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa";
import { IoCalendarNumberOutline, IoChevronDown } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

export default function CustomersTable() {
    const [isChecked , setIsChecked] = useState(false)
  const customers = Array(10).fill({
    name: "Janet Adebayo",
    email: "janet.a@mail.com",
    phone: "+2348065650633",
    orders: 10,
    orderTotal: "₦250,000.00",
    customerSince: "12 Aug 2022 — 12:25 am",
    status: "Active",
  });
    const handelCheckBtn = () => {
     console.log("Hello")
    }

  return (
    <div className="p-4 bg-white rounded-xl border">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium font-[Inter] text-[16px] text-[#45464E]">
          Customers
        </h2>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="flex items-center border border-[#CFD3D4] rounded-md px-3 py-2 gap-2">
            <CiSearch size={16} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm w-40"
            />
          </div>

          {/* Filter Buttons */}
          <button className="flex items-center gap-1 border px-3 py-2 rounded-md">
            <CiFilter size={16} />
            Filter
          </button>

          <button className="flex items-center gap-1 border px-3 py-2 rounded-md">
            <IoCalendarNumberOutline size={16} />
            Filter
          </button>

          {/* Share */}
          <button className="flex items-center gap-1 border px-3 py-2 rounded-md">
            <LuSend size={16} />
            Share
          </button>

          {/* Bulk Action Dropdown */}
          <button className="flex items-center gap-1 border px-3 py-2 rounded-md">
            Bulk Action
            <IoChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {/* Table Header */}
          <thead>
            <tr className="border-b text-[#2C2D33] font-normal">
              <th className="py-3 text-left w-10">
                <input type="checkbox" onClick={handelCheckBtn}/>
              </th>
              {[
                "Customer Name",
                "Email",
                "Phone",
                "Orders",
                "Order Total",
                "Customer Since",
                "Status",
              ].map((header) => (
                <th
                  key={header}
                  className="py-3 text-left text-[#2C2D33] font-normal font-[Inter]"
                >
                  <div className="flex items-center gap-1">
                    {header}
                    <IoChevronDown size={14} className="text-gray-400" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {customers.map((cust, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 text-[#6E7079] text-[14px] font-normal"
              >
                <td className="py-3">
                  <input type="checkbox" />
                </td>
                <td className="py-3">{cust.name}</td>

                <td className="py-3">
                  <div className="flex items-center gap-2">
                    {cust.email}
                    <FaRegCopy
                      size={14}
                      className="text-gray-400 cursor-pointer"
                    />
                  </div>
                </td>

                <td className="py-3">
                  <div className="flex items-center gap-2">
                    {cust.phone}
                    <FaRegCopy
                      size={14}
                      className="text-gray-400 cursor-pointer"
                    />
                  </div>
                </td>

                <td className="py-3">{cust.orders}</td>
                <td className="py-3">{cust.orderTotal}</td>
                <td className="py-3">{cust.customerSince}</td>

                <td className="py-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    {cust.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
        <div className="flex items-center gap-1">
          <select className="border px-2 py-1 rounded-md">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          Items per page
        </div>

        <div>1–10 of 200 items</div>

        <div className="flex items-center gap-2">
          <button className="border px-3 py-1 rounded-md">&lt;</button>
          <select className="border px-2 py-1 rounded-md">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <span>of 44 pages</span>
          <button className="border px-3 py-1 rounded-md">&gt;</button>
        </div>
      </div>
    </div>
  );
}
