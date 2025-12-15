import React, { useRef, useState } from "react";
import { FiUser, FiMail, FiMapPin, FiUpload, FiTrash2 } from "react-icons/fi";

const DashboardSettings = () => {
  const [image, setImage] = useState<string>("./images/profile.jpg");
  const [formData, setFormData] = useState({
    firstName: "Usman",
    lastName: "Ndako",
    email: "usmanndako@gmail.com",
    phoneCountry: "+234",
    phoneNumber: "08065650633",
    address: "No. 93 Skyfield Apartments",
    city: "Yaba",
    country: "Nigeria",
    state: "Lagos",
  });

  const [activeTab, setActiveTab] = useState("Account");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleRemove = () => {
    setImage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen rounded-xl bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-between sm:justify-start sm:gap-8 mb-8 border-b border-gray-200">
          {["Account", "Business", "Security"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 sm:px-2 font-medium transition-colors ${
                activeTab === tab
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h1 className="text-2xl sm:text-[20px] font-semibold text-gray-900">
            Account Settings
          </h1>
          <button className="bg-[#5570F1] text-white px-6 py-2.5 rounded-lg hover:[#5570F1] transition-colors font-medium w-full sm:w-auto">
            Update
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8">
          {/* Left Column - Form Fields */}
          <div className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <div className="relative">
                <FiUser
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-[#EFF1F999] border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <div className="relative">
                <FiUser
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-[#EFF1F999] border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <FiMail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-[#EFF1F999] border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex gap-2">
                <div className="relative sm:w-28">
                  <div className="flex items-center gap-1 px-3 py-3 bg-[#EFF1F999] rounded-lg">
                    <div className="sm:flex hidden gap-0.5">
                      <div className="w-3 h-4 bg-green-600"></div>
                      <div className="w-3 h-4 bg-white"></div>
                      <div className="w-3 h-4 bg-green-600"></div>
                    </div>
                    <select
                      name="phoneCountry"
                      value={formData.phoneCountry}
                      onChange={handleInputChange}
                      className="bg-[#EFF1F999] outline-none text-sm appearance-none cursor-pointer"
                    >
                      <option value="+234">+234</option>
                      <option value="+1">+1</option>
                      <option value="+92">+92</option>
                      <option value="+44">+44</option>
                    </select>
                  </div>
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="flex-1 px-4 w-full py-3 bg-[#EFF1F999] border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <div className="relative">
                <FiMapPin
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-[#EFF1F999] border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#EFF1F999] border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Country and State */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#EFF1F999] border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none appearance-none cursor-pointer"
                >
                  <option value="Nigeria">Nigeria</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#EFF1F999] border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none appearance-none cursor-pointer"
                >
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Kano">Kano</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Picture */}
          <div className="lg:flex lg:justify-center  lg:items-start">
            <div className="relative bg-[#EFF1F999] inline-block">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover"
                />
              ) : (
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />

              {/* icons */}
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="bg-white p-2 rounded-full shadow-lg hover:bg-[#EFF1F999] transition-colors"
                >
                  <FiUpload className="text-gray-700" size={18} />
                </button>

                <button
                  type="button"
                  onClick={handleRemove}
                  className="bg-white p-2 rounded-full shadow-lg hover:bg-[#EFF1F999] transition-colors"
                >
                  <FiTrash2 className="text-gray-700" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSettings;
