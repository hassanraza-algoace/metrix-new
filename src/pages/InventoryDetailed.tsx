import { useParams } from "react-router-dom";
import { data } from "../components/UI/InventoryTable";
import Cards from "@/components/UI/Cards";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineChartPie } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";

export default function InventoryDetailed() {
  const { id } = useParams();
  const product = data.find((c) => c.id === id);

  return (
    <div className="w-full min-h-screen">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-xl font-semibold">{product?.productName}</h1>
          <div className="flex flex-wrap md:flex-nowrap gap-3">
            <button className="px-4 py-2 rounded-xl w-full md:w-fit text-white bg-[#1C1D22]">
              Edit product
            </button>
            <button className="px-4 py-2 rounded-xl w-full md:w-fit bg-[#CC5F5F] text-white">
              Suspend product
            </button>
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6 gap-4 mt-6">
          <div className=" bg-white border rounded-2xl shadow-sm xl:col-start-1 flex justify-center items-center">
            <img
              src={product?.productImageUrl}
              alt={product?.productName}
              title={product?.productName}
              width={100}
            />
          </div>
          <div className=" bg-white border rounded-2xl content-center shadow-sm xl:col-span-2">
            <Cards
              icons={FaRegCircleUser}
              lastOrder={product?.lastOrder}
              lastOrderClassName="block!"
              //   customerName={product?.productName}
              iconClassName="hidden"
              filterContent="Published"
              filterClassName="bg-[#32936F29] px-4 py-1 rounded-xl self-center"
              filterTextClassName="text-[#519C66]!"
              downIconClassName="hidden"
              className="p-4 rounded-lg w-full"
              divClassName={"w-fit"}
              vlueClassName="text-[14px]!"
              content={[
                { id: 1, title: "Price", description: product?.unitPrice },
                { id: 2, title: "In-Stock", description: product?.inStock },
              ]}
            />
          </div>

          <div className="bg-white border rounded-2xl content-center shadow-sm xl:col-span-1 xl:col-start-4">
            <Cards
              icons={HiOutlineChartPie}
              iconClassName="bg-[#5570F114] text-[#5570F1] rounded-[8px] p-2"
              filterClassName="hidden"
              lastOrderClassName="hidden"
              downIconClassName="hidden"
              className="p-4 rounded-lg w-full"
              divClassName={"w-full"}
              vlueClassName="text-[20px]!"
              content={[
                {
                  id: 1,
                  title: "Total Orders",
                  description: product?.totalValue,
                },
              ]}
            />
          </div>

          <div className="bg-white border rounded-2xl content-center shadow-sm xl:col-start-5 xl:col-span-2">
            <Cards
              icons={IoEyeOutline}
              iconClassName="bg-[#FFCC9129] text-black rounded-[8px] p-2"
              filterContent="All-time"
              lastOrderClassName="hidden"
              className="p-4 rounded-lg w-full"
              divClassName={"w-[50%]"}
              vlueClassName="text-[20px]!"
              content={[
                {
                  id: 1,
                  title: "Views",
                  description: product?.views,
                },
                {
                  id: 2,
                  title: "Favourite",
                  description: product?.favourite,
                },
              ]}
            />
          </div>

          <div className="bg-white border rounded-2xl content-center shadow-sm xl:col-span-3">
            <Cards
              icons={BsHandbag}
              iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
              filterContent="All-time"
              lastOrderClassName="hidden"
              className="p-4 rounded-lg w-full"
              divClassName={"w-[35%] nth-3:w-[30%]"}
              vlueClassName="text-[20px]!"
              content={[
                {
                  id: 1,
                  title: "All Orders",
                  description: product?.allOrders,
                },
                {
                  id: 2,
                  title: "Pending",
                  description: product?.pending,
                },
                {
                  id: 3,
                  title: "Completed",
                  description: product?.completed,
                },
              ]}
            />
          </div>
          <div className="bg-white border rounded-2xl content-center shadow-sm xl:col-span-3">
            <Cards
              icons={BsHandbag}
              iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
              filterContent="All-time"
              lastOrderClassName="hidden"
              className="p-4 rounded-lg w-full"
              divClassName={"w-[35%] nth-3:w-[30%]"}
              vlueClassName="text-[20px]!"
              content={[
                {
                  id: 1,
                  title: "Canceled",
                  description: product?.canceled,
                },
                {
                  id: 2,
                  title: "Returned",
                  description: product?.returned,
                },
                {
                  id: 3,
                  title: "Damaged",
                  description: product?.damaged,
                },
              ]}
            />
          </div>
        </div>

        {/* Orders Table */}
        <div className="mt-8 bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Purchases</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="text-gray-500 text-sm border-b">
                  <th className="py-3">Order Date</th>
                  <th>Order Type</th>
                  <th>Unit Price</th>
                  <th>Qty</th>
                  <th>Discount</th>
                  <th>Order Total</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {product?.purchases?.map((items, i) => (
                  <tr key={i} className="border-b text-sm">
                    <td className="py-3">{items.orderDate}</td>
                    <td>{items.orderType}</td>
                    <td>{items.unitPrice}</td>
                    <td>{items.qty}</td>
                    <td>
                      <span className="px-3 py-1 bg-gray-200 rounded-xl text-xs">
                        {items.discount}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`px-3 py-1 bg-gray-200 rounded-xl text-xs`}
                      >
                        {items.orderTotal}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-xl text-xs text-white ${
                          items.status === "Completed"
                            ? "bg-green-500"
                            : items.status === "In-Progress"
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                        }`}
                      >
                        {items.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
