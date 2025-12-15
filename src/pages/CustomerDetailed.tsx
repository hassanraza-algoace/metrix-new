import { useParams } from "react-router-dom";
import { data } from "../components/UI/CustomersTable";
import Cards from "../components/UI/Cards";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiMapPin, FiShoppingCart } from "react-icons/fi";
import { HiOutlineChartPie } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";

export default function CustomerDetailed() {
  const { id } = useParams();
  const customer = data.find((c) => c.id === id);

  return (
    <div className="w-full min-h-screen">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-xl font-semibold">
            Order Number #{customer?.id}
          </h1>
          <div className="flex flex-wrap gap-3">
            <button className="w-full sm:w-fit  px-4 py-2 rounded-xl text-white bg-[#1C1D22]">
              Edit Customer
            </button>
            <button className="w-full sm:w-fit px-4 py-2 rounded-xl bg-[#CC5F5F] text-white">
              Suspend Customer
            </button>
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-4 mt-6">
          <div className=" bg-white border rounded-2xl shadow-sm xl:col-span-2">
            <Cards
              icons={FaRegCircleUser}
              lastOrder={customer?.lastOrder}
              lastOrderClassName="block!"
              customerName={customer?.name}
              iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
              filterContent="Active"
              filterClassName="bg-[#32936F29] px-4 py-1 rounded-xl self-center"
              filterTextClassName="text-[#519C66]!"
              downIconClassName="hidden"
              className="p-4 rounded-lg w-full"
              divClassName={"w-fit"}
              vlueClassName="text-[14px]!"
              content={[
                { id: 1, title: "Phone", description: customer?.phone },
                { id: 2, title: "Email", description: customer?.email },
              ]}
            />
          </div>

          <div className="bg-white border rounded-2xl shadow-sm xl:col-span-2 xl:col-start-3">
            <Cards
              icons={FiMapPin}
              iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
              filterClassName="hidden"
              lastOrderClassName="hidden"
              downIconClassName="hidden"
              className="p-4 rounded-lg w-full"
              divClassName={"sm:w-[50%]"}
              vlueClassName="text-[14px]!"
              content={[
                {
                  id: 1,
                  title: "Home Address",
                  description: customer?.homeAddress,
                },
                {
                  id: 2,
                  title: "Billing Address",
                  description: customer?.billingAddress,
                },
              ]}
            />
          </div>

          <div className="bg-white border rounded-2xl shadow-sm xl:col-start-5">
            <Cards
              icons={HiOutlineChartPie}
              iconClassName="bg-[#5570F114] text-[#5570F1] rounded-[8px] p-2"
              filterContent="All-time"
              lastOrderClassName="hidden"
              className="p-4 rounded-lg w-full"
              divClassName={"w-[50%]"}
              vlueClassName="text-[20px]!"
              content={[
                {
                  id: 1,
                  title: "Total Orders",
                  description: "₦" + customer?.orderTotal,
                },
              ]}
            />
          </div>

          <div className="bg-white border rounded-2xl shadow-sm xl:col-span-2">
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
                  description: customer?.allOrders,
                },
                {
                  id: 2,
                  title: "Pending",
                  description: customer?.pending,
                },
                {
                  id: 3,
                  title: "Completed",
                  description: customer?.completed,
                },
              ]}
            />
          </div>
          <div className="bg-white border rounded-2xl shadow-sm xl:col-span-2">
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
                  description: customer?.canceled,
                },
                {
                  id: 2,
                  title: "Returned",
                  description: customer?.returned,
                },
                {
                  id: 3,
                  title: "Damaged",
                  description: customer?.damaged,
                },
              ]}
            />
          </div>
          <div className="bg-white border rounded-2xl shadow-sm xl:col-start-5">
            <Cards
              icons={FiShoppingCart}
              iconClassName="bg-[#FFCC9129] text-[#1C1D22] rounded-[8px] p-2"
              lastOrderClassName="hidden"
              downIconClassName="hidden"
              className="p-4 rounded-lg w-full"
              divClassName={"w-full"}
              titleClassName="text-[#CC5F5F]"
              vlueClassName="text-[20px]!"
              content={[
                {
                  id: 1,
                  title: "Abandoned Cart",
                  description: customer?.abandonedCart,
                },
              ]}
            />
          </div>
        </div>

        {/* Orders Table */}
        <div className="mt-8 bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            {customer?.name}'s Orders
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="text-gray-500 text-sm border-b">
                  <th className="py-3">Order Date</th>
                  <th>Order Type</th>
                  <th>Tracking ID</th>
                  <th>Order Total</th>
                  <th>Action</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {customer?.ordersList?.map((order, i) => (
                  <tr key={i} className="border-b text-sm">
                    <td className="py-3">{order.date}</td>
                    <td>{order.type}</td>
                    <td>{order.tracking}</td>
                    <td>₦{order.total}</td>
                    <td>
                      <span className="px-3 py-1 bg-gray-200 rounded-xl text-xs">
                        {order.action}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-xl text-xs text-white ${
                          order.status === "Completed"
                            ? "bg-green-500"
                            : order.status === "In-Progress"
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                        }`}
                      >
                        {order.status}
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
