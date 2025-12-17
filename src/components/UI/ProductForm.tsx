import React, { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
// Firebase imports
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/config"; // apna firebase config path

interface ProductFormData {
  productName: string;
  shortDescription: string;
  category: string;
  sellingPrice: string;
  costPrice: string;
  quantity: number;
  orderType: string;
  discount: boolean;
  expiryDate: boolean;
  longDescription: string;
  returnPolicy: string;
  discountValue: string;
  dateAdded: string;
  timeAdded: string;
  coverImageUrl: string;
  additionalImages: string[];
}
const today = new Date().toISOString().split("T")[0];
const now = new Date();
let hours = now.getHours();
const minutes = now.getMinutes().toString().padStart(2, "0");
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12; // 0 => 12
const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;
const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    productName: "",
    shortDescription: "",
    category: "",
    sellingPrice: "",
    costPrice: "",
    quantity: 0,
    orderType: "",
    discount: false,
    expiryDate: false,
    longDescription: "",
    returnPolicy: "",
    discountValue: "",
    dateAdded: today,
    timeAdded: formattedTime,
    coverImageUrl: "",
    additionalImages: [],
  });

  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (
    field: "discount" | "expiryDate",
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setFormData((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleQuantityChange = (
    increment: boolean,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setFormData((prev) => ({
      ...prev,
      quantity: increment ? prev.quantity + 1 : Math.max(0, prev.quantity - 1),
    }));
  };

  // Simple Firebase upload function
  const uploadProduct = async () => {
    setIsUploading(true);
    setUploadMessage("");

    try {
      // Validate required fields
      if (
        !formData.productName ||
        !formData.category ||
        !formData.sellingPrice
      ) {
        throw new Error(
          "Please fill in all required fields (Product Name, Category, Selling Price)"
        );
      }
      // Product data prepare karo
      const productData = {
        productName: formData.productName,
        shortDescription: formData.shortDescription,
        longDescription: formData.longDescription,
        category: formData.category,
        sellingPrice: parseFloat(formData.sellingPrice),
        costPrice: formData.costPrice ? parseFloat(formData.costPrice) : 0,
        quantity: formData.quantity,
        orderType: formData.orderType,
        discount: formData.discount,
        discountValue: formData.discountValue,
        expiryDate: formData.expiryDate,
        returnPolicy: formData.returnPolicy,
        dateAdded: formData.dateAdded,
        timeAdded: formData.timeAdded,
        imageUrl: formData.coverImageUrl,
        additionalImages: formData.additionalImages,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      // Firestore mein save karo
      const docRef = await addDoc(collection(db, "products"), productData);

      const successMsg = `✅ Product uploaded successfully! ID: ${docRef.id}`;
      setUploadMessage(successMsg);

      // Reset form after successful upload
      setTimeout(() => {
        setFormData({
          productName: "",
          shortDescription: "",
          category: "",
          sellingPrice: "",
          costPrice: "",
          quantity: 0,
          orderType: "",
          discount: false,
          expiryDate: false,
          longDescription: "",
          returnPolicy: "",
          discountValue: "",
          dateAdded: "",
          timeAdded: "",
          coverImageUrl: "",
          additionalImages: [],
        });
        setUploadMessage("");
      }, 3000);
    } catch (error: any) {
      const errorMsg = `❌ Error: ${error.message}`;
      setUploadMessage(errorMsg);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2 ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-xl font-semibold">New Inventory Item</h1>
          <div className="flex flex-wrap lg:flex-nowrap gap-3">
            <button className="px-4 py-2 w-full md:w-fit rounded-xl text-white bg-[#1C1D22]">
              Save as Draft
            </button>
            <button
              type="button"
              disabled={isUploading}
              onClick={uploadProduct}
              className="px-4 w-full py-2 md:w-fit rounded-xl bg-[#5570F1] text-white disabled:opacity-50"
            >
              {isUploading ? "Publishing..." : "Save & Publish"}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* Left Column */}
          <div className="flex-1 w-full flex flex-col gap-6">
            <div className="flex bg-white p-6 rounded-xl shadow-sm flex-wrap lg:flex-nowrap justify-between gap-6">
              <div className="flex w-full flex-col gap-6 lg:w-[50%]">
                {/* Product Name */}
                <div>
                  <input
                    type="text"
                    name="productName"
                    placeholder="Product Name *"
                    value={formData.productName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Category Dropdown */}
                <div className="relative">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  >
                    <option value="">Select Product Category *</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Food</option>
                    <option value="books">Books</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Selling and Cost Price */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <input
                      type="number"
                      name="sellingPrice"
                      placeholder="Selling Price *"
                      value={formData.sellingPrice}
                      onChange={handleInputChange}
                      step="0.01"
                      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <input
                      type="number"
                      name="costPrice"
                      placeholder="Cost Price"
                      value={formData.costPrice}
                      onChange={handleInputChange}
                      step="0.01"
                      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Quantity in Stock */}
                <div className="relative">
                  <input
                    type="text"
                    name="QuantityInStock"
                    placeholder="Quantity in Stock"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                    <button
                      onClick={(e) => handleQuantityChange(true, e)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded"
                    >
                      <BiSolidUpArrow size="12px" />
                    </button>
                    <button
                      onClick={(e) => handleQuantityChange(false, e)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded"
                    >
                      <BiSolidDownArrow size="12px" />
                    </button>
                  </div>
                </div>

                {/* Order Type */}
                <div className="relative">
                  <select
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  >
                    <option value="">Order Type</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="both">Both</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Discount and Expiry Date Toggles */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-white rounded-lg border border-gray-200">
                    <span className="text-gray-600">Discount</span>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-sm">
                        Add Discount
                      </span>
                      <button
                        onClick={(e) => handleToggle("discount", e)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          formData.discount ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 bg-white rounded-full transition-transform ${
                            formData.discount
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-white rounded-lg border border-gray-200">
                    <span className="text-gray-600">Expiry Date</span>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-sm">
                        Add Expiry Date
                      </span>
                      <button
                        onClick={(e) => handleToggle("expiryDate", e)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          formData.expiryDate ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 bg-white rounded-full transition-transform ${
                            formData.expiryDate
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[50%] w-full flex flex-col gap-4">
                {/* Short Description */}
                <div>
                  <textarea
                    name="shortDescription"
                    placeholder="Short Description"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                {/* Product Long Description */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Product Long Description
                  </h3>
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200 flex-wrap">
                    <select className="px-2 py-1 bg-gray-50 border border-gray-200 rounded text-sm">
                      <option>Roboto</option>
                    </select>
                    <select className="px-2 py-1 bg-gray-50 border border-gray-200 rounded text-sm">
                      <option>Paragraph</option>
                    </select>
                    <div className="flex gap-1 ml-2 flex-wrap">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setIsBold(!isBold);
                        }}
                        className={`px-2 py-1 rounded ${
                          isBold ? "bg-gray-200" : "hover:bg-gray-100"
                        }`}
                      >
                        <strong>B</strong>
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setIsUnderline(!isUnderline);
                        }}
                        className={`px-2 py-1 rounded ${
                          isUnderline ? "bg-gray-200" : "hover:bg-gray-100"
                        }`}
                      >
                        <u>U</u>
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setIsItalic(!isItalic);
                        }}
                        className={`px-2 py-1 rounded ${
                          isItalic ? "bg-gray-200" : "hover:bg-gray-100"
                        }`}
                      >
                        <em>I</em>
                      </button>
                    </div>
                  </div>
                  <textarea
                    name="longDescription"
                    placeholder="Your text goes here"
                    value={formData.longDescription}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-3 py-2 focus:outline-none resize-none"
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    Add a long description for your product
                  </p>
                </div>

                {/* Date Added */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h4 className="text-sm text-gray-600 mb-3">Date Added</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[150px] flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        name="dateAdded"
                        value={formData.dateAdded}
                        onChange={handleInputChange}
                        className="bg-transparent focus:outline-none w-full"
                      />
                    </div>
                    <div className="flex-1 min-w-[150px] flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="timeAdded"
                        value={formData.timeAdded}
                        onChange={handleInputChange}
                        className="bg-transparent focus:outline-none w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image URL Input */}
          <div className="w-full lg:w-80 shrink-0 flex flex-col gap-6">
            <div className="bg-white p-6 lg:sticky lg:top-25 rounded-xl shadow-sm">
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                Product Image URL
              </h3>

              <div>
                <input
                  type="url"
                  name="coverImageUrl"
                  placeholder="Enter image URL"
                  value={formData.coverImageUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                />
                {formData.coverImageUrl && (
                  <div className="border-2 border-gray-200 rounded-lg p-2">
                    <img
                      src={formData.coverImageUrl}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded"
                      onError={(e) => {
                        e.currentTarget.src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EInvalid URL%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                )}
                <p className="text-xs text-gray-400 mt-2">
                  Enter a valid image URL (https://...)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Message */}
        {uploadMessage && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              uploadMessage.includes("✅")
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {uploadMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductForm;
