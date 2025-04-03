import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-between items-center w-full bg-[#F3F5F7] px-[75px] py-[30px] max-sm:flex-col max-sm:gap-[15px] max-sm:p-[15px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e88d7867567006455a4db25854c9573c535980b"
        className="w-[150px] h-[53px]"
        alt="Logo"
      />
      <div className="flex gap-[15px] max-sm:hidden">
        <div className="h-[51px] text-[#1F1C1C] text-[15px] cursor-pointer bg-white px-[30px] py-5 rounded-[50px]">
          Overview
        </div>
        <div className="h-[51px] text-[#1F1C1C] text-[15px] cursor-pointer bg-white px-[30px] py-5 rounded-[50px]">
          Inventory Management
        </div>
        <div className="h-[51px] text-[#1F1C1C] text-[15px] cursor-pointer bg-white px-[30px] py-5 rounded-[50px]">
          Pages
        </div>
        <div className="h-[51px] text-[#1F1C1C] text-[15px] cursor-pointer bg-white px-[30px] py-5 rounded-[50px]">
          Theme Options
        </div>
      </div>
      <div className="flex gap-[15px] items-center">
        <div className="h-[51px] text-[#1F1C1C] text-[15px] bg-white px-[30px] py-5 rounded-[50px]">
          العربية
        </div>
        <div className="flex items-center">
          <button className="flex items-center gap-2 h-[51px] bg-white px-4 py-2 rounded-[50px]">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <span className="text-[#1F1C1C] text-[15px]">Admin</span>
            <svg
              className="w-4 h-4 text-[#838383]"
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
          </button>
        </div>
      </div>
    </div>
  );
};
