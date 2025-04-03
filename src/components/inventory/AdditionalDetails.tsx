import React from "react";

export const AdditionalDetails = () => {
  return (
    <div>
      <h2 className="text-black text-xl mb-[25px]">Additional Details</h2>
      <div className="flex gap-[30px] items-start max-sm:flex-col">
        <div className="flex flex-col gap-5 max-sm:w-full">
          <label className="text-[#838383] text-[15px]">Title</label>
          <input
            type="text"
            className="flex h-[55px] items-center bg-white px-6 py-5 rounded-[10px]"
          />
        </div>
        <div className="flex flex-col gap-5 max-sm:w-full">
          <label className="text-[#838383] text-[15px]">Value</label>
          <input
            type="text"
            className="flex h-[55px] items-center bg-white px-6 py-5 rounded-[10px]"
          />
        </div>
        <button className="flex w-10 h-10 justify-center items-center cursor-pointer bg-[#FDE9EA] rounded-[50px]">
          <svg
            className="w-5 h-5 text-[#E81E26]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
      <button className="flex h-[61px] w-full justify-center items-center gap-2.5 border text-[#838383] text-sm cursor-pointer mt-5 px-2 py-[15px] rounded-[50px] border-solid border-[#CACACA]">
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span>ADD ROW</span>
      </button>
    </div>
  );
};
