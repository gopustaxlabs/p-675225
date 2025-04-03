import React from "react";
import { AdditionalDetails } from "./AdditionalDetails";
import { ImageUpload } from "./ImageUpload";
import { Overview } from "./Overview";
import { Specifications } from "./Specifications";

export const InventoryForm = () => {
  return (
    <div className="grid grid-cols-[870px_719px] gap-[50px] px-0 py-[50px] max-md:grid-cols-[1fr] max-md:gap-[30px] max-sm:p-[15px]">
      <div>
        <div className="space-y-8">
          <div className="flex flex-col gap-5 max-sm:w-full">
            <label className="text-[#838383] text-[15px]">
              Page &amp; Item Title
            </label>
            <input
              type="text"
              className="flex h-[70px] items-center bg-white px-6 py-5 rounded-[10px]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-5 max-sm:w-full">
              <label className="text-[#838383] text-[15px]">Price</label>
              <div className="flex h-[55px] items-center bg-white px-6 py-5 rounded-[10px]">
                <span className="text-[#838383] text-[15px]">AED</span>
                <div className="w-px h-[15px] bg-[#E1E1E1] mx-5 my-0" />
                <input
                  type="text"
                  className="flex-1 bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 max-sm:w-full">
              <label className="text-[#838383] text-[15px]">
                Offer Price (Optional)
              </label>
              <div className="flex h-[55px] items-center bg-white px-6 py-5 rounded-[10px]">
                <span className="text-[#838383] text-[15px]">AED</span>
                <div className="w-px h-[15px] bg-[#E1E1E1] mx-5 my-0" />
                <input
                  type="text"
                  className="flex-1 bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-5 max-sm:w-full">
              <label className="text-[#838383] text-[15px]">Year</label>
              <input
                type="text"
                className="flex h-[55px] items-center bg-white px-6 py-5 rounded-[10px]"
              />
            </div>

            <div className="flex flex-col gap-5 max-sm:w-full">
              <label className="text-[#838383] text-[15px]">Location</label>
              <div className="flex h-[55px] items-center justify-between bg-white px-6 py-5 rounded-[10px]">
                <span>Choose Location</span>
                <svg
                  className="w-4 h-4"
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
          </div>
        </div>

        <div className="h-px bg-[#E1E1E1] mx-0 my-[50px]" />
        <AdditionalDetails />
      </div>

      <div className="space-y-[50px]">
        <ImageUpload />
        <div className="h-px bg-[#E1E1E1]" />
        <Overview />
        <div className="h-px bg-[#E1E1E1]" />
        <Specifications />
      </div>
    </div>
  );
};
