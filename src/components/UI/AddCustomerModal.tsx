import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}
export default function AddCustomerModal({ open, onClose }: Props) {
  const [addAddress, setAddAddress] = useState(false);
  if (!open) return null;

  return (
    <div className="p-6 absolute">
      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          {/* Modal Card */}
          <div className="bg-white rounded-2xl p-6 w-[90%] md:w-[360px] shadow-xl relative animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 bg-[#FFF2E2] text-[#1C1D22] px-1 rounded-full"
            >
              ✕
            </button>

            <h2 className="text-[20px] font-[Poppins] text-[#000000] font-medium mb-4">Add a New Customer</h2>
            <p className="text-gray-500 mb-4">Customer Information</p>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Customer Name"
                className="w-full p-3 bg-[#EFF1F999] text-[16px] font-[Inter] rounded-lg outline-none"
              />

              <input
                type="email"
                placeholder="Customer Email"
                className="w-full p-3 bg-[#EFF1F999] text-[16px] font-[Inter] rounded-lg outline-none"
              />

              <div className="flex gap-2">
                <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg w-28">
                  <span>🇳🇬</span>
                  <span>+234</span>
                </div>

                <input
                  type="text"
                  placeholder="8023456789"
                  className="flex-1 p-3 bg-[#EFF1F999] w-full text-[16px] font-[Inter] rounded-lg outline-none"
                />
              </div>

              {/* Toggle */}
              <div className="flex items-center gap-3 mt-2">
                <span className="text-gray-600">Add Address</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={addAddress}
                    onChange={() => setAddAddress(!addAddress)}
                  />
                  <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:w-4 after:h-4 after:rounded-full after:transition-all peer-checked:after:translate-x-5"></div>
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6 gap-1 lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse">
              <button
                onClick={onClose}
                className="border w-full border-[#5570F1] text-[#5570F1] px-6 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button className="border border-[#5570F1] bg-[#5570F1] w-full text-white px-6 py-2 rounded-lg">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
