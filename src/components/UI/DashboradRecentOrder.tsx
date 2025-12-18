// import { Plus } from "lucide-react";

import { GoPlus } from "react-icons/go";
import SimpleButton from "./SimpleButton";
import { NavLink } from "react-router-dom";
import { RouteDashboardInventoryAdd } from "../../pages/Routes";
// import { getAllProducts } from "../../../services/productServices";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useEffect, useState } from "react";

interface RecentOrderProps {
  classes?: string;
  mainClass?: string;
}
type Product = {
  id: string;
  productName: string;
  imageUrl: string;
  dateAdded: string;
  sellingPrice: number;
};
export default function DashboardRecentOrder({
  classes,
  mainClass,
}: RecentOrderProps) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));

        const data: Product[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, "id">),
        }));

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      className={`bg-white mx-auto p-4 rounded-lg min-h-full flex flex-col ${mainClass}`}
    >
      {/* Header */}
      <h2 className={`${classes} text-sm font-medium text-gray-600 mb-6`}>
        Recent Orders
      </h2>
      {loading ? (
        <div className="rounded-xl bg-white p-4 sm:p-6 lg:p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading profile...</p>
          </div>
        </div>
      ) : products.length === 0 ? (
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
        products.map((product) => (
          <div
            key={product.id}
            className="flex flex-wrap lg:flex-nowrap gap-1 items-center py-2 border-b mt-1 justify-between"
          >
            <div className="lg:w-[15%] w-full lg:border lg:rounded-[10px] lg:p-2 overflow-hidden">
              <img
                src={product.imageUrl}
                className="border rounded-[10px] p-2 lg:border-none lg:rounded-none lg:p-0"
                alt={product.productName}
                width="80px"
              />
            </div>
            <div className="lg:w-[60%]">
              <p className="capitalize">{product.productName}</p>
              <p className="text-[12px]">₦{product.sellingPrice} x 1</p>
            </div>
            <div className="lg:w-[25%]">
              <p className="text-[12px] text-center">{product.dateAdded}</p>
              <p className="text-[12px] bg-[#32936F1F] text-[#519C66] text-center px-1 py-0.5 rounded-xl">Completed</p>
            </div>
          </div>
        ))
      )}
      {/* Empty State Content */}
    </div>
  );
}
