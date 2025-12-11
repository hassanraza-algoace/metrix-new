import ProductForm from "@/components/UI/ProductForm";

const NewInventory = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-2 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-xl font-semibold">New Inventory Item</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl text-white bg-[#1C1D22]">
            Save as Draft
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="px-4 py-2 rounded-xl bg-[#5570F1] text-white"
          >
            Save & Publish
          </button>
        </div>
      </div>
      <div>
        <form>
          <ProductForm />
        </form>
      </div>
    </div>
  );
};

export default NewInventory;
