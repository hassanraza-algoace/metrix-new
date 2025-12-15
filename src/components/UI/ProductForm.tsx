import React, { useState } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

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
  coverImage: File | null;
  additionalImages: File[];
}

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
    dateAdded: "12/12/2020",
    timeAdded: "12:00 PM",
    coverImage: null,
    additionalImages: [],
  });

  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

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

  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, coverImage: e.target.files![0] }));
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap lg:flex-nowrap gap-2">
        {/* Left Column */}
        <div className="flex-1 w-full! flex flex-col gap-6">
          {/* Product Name and Short Description */}
          <div className="flex bg-white p-4 rounded-xl flex-wrap lg:flex-nowrap justify-between gap-2">
            <div className="flex w-full flex-col gap-10 lg:w-[50%]">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    value={formData.productName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Category Dropdown */}
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                >
                  <option value="">Select Product Category</option>
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
                    type="text"
                    name="sellingPrice"
                    placeholder="Selling Price"
                    value={formData.sellingPrice}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1 min-w-[200px]">
                  <input
                    type="text"
                    name="costPrice"
                    placeholder="Cost Price"
                    value={formData.costPrice}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Quantity in Stock */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Quantity in Stock"
                  value={formData.quantity || ""}
                  readOnly
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                  <button
                    onClick={(e) => handleQuantityChange(true, e)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    ▲
                  </button>
                  <button
                    onClick={(e) => handleQuantityChange(false, e)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    ▼
                  </button>
                </div>
              </div>

              {/* Order Type */}
              <div className="relative">
                <select
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
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
                    <span className="text-blue-600 text-sm">Add Discount</span>
                    <button
                      onClick={(e) => handleToggle("discount", e)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        formData.discount ? "bg-blue-500" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          formData.discount ? "translate-x-6" : "translate-x-1"
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
            <div className="lg:w-[50%] w-full flex flex-col gap-2">
              {/* short discription */}
              <div className="flex-1">
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

                {/* Toolbar */}
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
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="px-2 py-1 rounded hover:bg-gray-100"
                    >
                      ≡
                    </button>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="px-2 py-1 rounded hover:bg-gray-100"
                    >
                      ☰
                    </button>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="px-2 py-1 rounded hover:bg-gray-100"
                    >
                      ⋮
                    </button>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="px-2 py-1 rounded hover:bg-gray-100"
                    >
                      🔗
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

              {/* Return Policy */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-700">
                    Return Policy
                  </h3>
                  <div className="flex  items-center gap-3">
                    <span className="text-blue-600 text-sm">Add Discount</span>
                    <button
                      onClick={(e) => handleToggle("discount", e)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        formData.discount ? "bg-blue-500" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          formData.discount ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm text-gray-600">Date Added</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[150px] flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-400"><FaRegCalendarAlt /></span>
                      <input
                        type="date"
                        name="dateAdded"
                        value={formData.dateAdded}
                        onChange={handleInputChange}
                        className="bg-transparent focus:outline-none w-full"
                      />
                    </div>
                    <div className="flex-1 min-w-[150px] flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-400"> <FaRegClock /> </span>
                      <input
                        type="time"
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
        </div>

        {/* Right Column - Image Upload */}
        <div className="w-full lg:w-80 shrink-0 flex flex-col gap-6 bg-white p-4 rounded-xl">
          {/* Cover Image */}
          <div className="bg-white rounded-lg border border-gray-200 p-2 md:p-6">
            <div className="flex p-0.5 md:p-2 flex-col items-center justify-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">
                  <BsFillImageFill className="text-[#5570F1]" />
                </span>
              </div>
              <label className="text-blue-600 text-center cursor-pointer hover:text-blue-700">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverImageUpload}
                  className="hidden"
                />
              </label>
              <p className="text-center text-sm">
                <span className="text-gray-400 text-center mr-1">
                  Upload a cover image for your product
                </span>
                <span className="text-xs text-gray-400 text-center mr-1">
                  File Format
                  <span className="font-medium mx-1 text-[#2C2D33]">jpeg, png</span>
                  Recommended Size
                  <span className="font-medium ml-1 text-[#2C2D33]">600x600 (1:1)</span>
                </span>
              </p>
            </div>
          </div>

          {/* Additional Images */}
          <div className="bg-white rounded-lg border border-gray-200 p-2 md:p-6">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Additional Images
            </h3>
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <div className="w-full md:flex-1 flex flex-col items-center justify-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">
                    <BsFillImageFill className="text-[#5570F1]" />
                  </span>
                </div>
                <label className="text-blue-600 text-center text-sm cursor-pointer hover:text-blue-700">
                  Upload Image
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>
              <div className="w-full  md:flex-1 flex flex-col items-center justify-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-300 text-2xl">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
