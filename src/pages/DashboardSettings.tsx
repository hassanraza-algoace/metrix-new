import React, { useRef, useState, useEffect } from "react";
import { FiUser, FiMail, FiMapPin, FiUpload, FiTrash2 } from "react-icons/fi";
import { getUserProfile, updateCompleteProfile } from "../../services/userService"; // apna path

const DashboardSettings = () => {
  const [image, setImage] = useState<string>("/images/user.webp");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountry: "+92",
    phoneNumber: "",
    address: "",
    city: "",
    country: "Pakistan",
    state: "",
  });

  const [activeTab, setActiveTab] = useState("Account");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Component load hone par user data fetch karo
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setLoading(true);
    const result = await getUserProfile();
    
    if (result.success && result.data) {
      const userData = result.data;
      
      // Firebase se data ko form mein set karo
      setFormData({
        firstName: userData.displayName?.split(" ")[0] || "",
        lastName: userData.displayName?.split(" ")[1] || "",
        email: userData.email || "",
        phoneCountry: "+92",
        phoneNumber: userData.phoneNumber || "",
        address: userData.address || "",
        city: userData.city || "",
        country: "Pakistan",
        state: userData.state || "",
      });

      // Profile photo agar hai to set karo
      if (userData.photoURL) {
        setImage(userData.photoURL);
      }
    }
    
    setLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  // Update button click handler
  const handleUpdate = async () => {
    setUpdating(true);
    
    try {
      // Display name ko first name + last name se banao
      const displayName = `${formData.firstName} ${formData.lastName}`.trim();
      
      // Phone number ko country code ke saath combine karo
      const fullPhoneNumber = `${formData.phoneCountry} ${formData.phoneNumber}`;
      
      // Firebase mein update karo
      const result = await updateCompleteProfile(
        displayName,
        fullPhoneNumber,
        formData.address,
        formData.city,
        formData.state
      );

      if (result.success) {
        // alert("Profile updated successfully! ✅");
        // Fresh data fetch karo
        await fetchUserData();
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen rounded-xl bg-white p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

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
          <button 
            onClick={handleUpdate}
            disabled={updating}
            className="bg-[#5570F1] text-white px-6 py-2.5 rounded-lg hover:bg-[#4560e1] transition-colors font-medium w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {updating ? "Updating..." : "Update"}
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
                  disabled
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 border-0 rounded-lg outline-none cursor-not-allowed"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
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
                      <option value="+92">+92</option>
                      <option value="+234">+234</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                  </div>
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="3001234567"
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
                  placeholder="House 123, Street 5"
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
                placeholder="Karachi"
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
                  <option value="Pakistan">Pakistan</option>
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
                  <option value="">Select State</option>
                  <option value="Sindh">Sindh</option>
                  <option value="Punjab">Punjab</option>
                  <option value="KPK">KPK</option>
                  <option value="Balochistan">Balochistan</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Picture */}
          <div className="lg:flex lg:justify-center lg:items-start">
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