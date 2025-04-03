import React from "react";

export const PageHeader = () => {
  return (
    <div className="flex items-center gap-[30px] pb-[50px] border-b-[#E1E1E1] border-b border-solid max-md:flex-wrap max-sm:flex-col max-sm:p-[15px]">
      <div className="flex-1">
        <h1 className="text-[#1F1C1C] text-[35px] mb-[15px] max-sm:text-[28px]">
          Inventory Management
        </h1>
        <p className="text-[#838383] text-[15px]">
          Effortless Inventory Control. Track, Manage, and Optimize Your Car
          Listings!
        </p>
      </div>
      <button className="h-[51px] bg-[#E81E26] text-white px-6 py-2 rounded-[50px] flex items-center gap-2">
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" />
        </svg>
        <span>Publish</span>
      </button>
      <div className="w-px h-[51px] bg-[#E1E1E1]" />
      <button className="flex h-[51px] items-center gap-[15px] cursor-pointer bg-white pl-2.5 pr-5 py-[15px] rounded-[50px]">
        <div className="w-[30px] h-[30px] bg-[#E81E26] rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <span className="text-[#1F1C1C] text-[15px]">Add new Item</span>
      </button>
    </div>
  );
};
