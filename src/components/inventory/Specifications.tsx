import React from "react";

export const Specifications = () => {
  return (
    <div>
      <h2 className="text-black text-xl mb-[25px]">Specifications</h2>
      <div className="space-y-6">
        <div className="flex flex-col gap-5 max-sm:w-full">
          <label className="text-[#838383] text-[15px]">Mileage</label>
          <div className="flex h-[55px] items-center gap-5 bg-white px-6 py-5 rounded-[10px]">
            <svg
              className="w-5 h-5 text-[#838383]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <div className="w-px h-[15px] bg-[#E1E1E1]" />
            <input type="text" className="flex-1 bg-transparent outline-none" />
          </div>
        </div>

        <div className="flex flex-col gap-5 max-sm:w-full">
          <label className="text-[#838383] text-[15px]">Cylinder</label>
          <div className="flex h-[55px] items-center gap-5 bg-white px-6 py-5 rounded-[10px]">
            <svg
              className="w-5 h-5 text-[#838383]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <div className="w-px h-[15px] bg-[#E1E1E1]" />
            <input type="text" className="flex-1 bg-transparent outline-none" />
          </div>
        </div>

        <div className="flex flex-col gap-5 max-sm:w-full">
          <label className="text-[#838383] text-[15px]">Exterior color</label>
          <div className="flex h-[55px] items-center gap-5 bg-white px-6 py-5 rounded-[10px]">
            <svg
              className="w-5 h-5 text-[#838383]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            <div className="w-px h-[15px] bg-[#E1E1E1]" />
            <input type="text" className="flex-1 bg-transparent outline-none" />
          </div>
        </div>

        <div className="flex flex-col gap-5 max-sm:w-full">
          <label className="text-[#838383] text-[15px]">Interior color</label>
          <div className="flex h-[55px] items-center gap-5 bg-white px-6 py-5 rounded-[10px]">
            <svg
              className="w-5 h-5 text-[#838383]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <div className="w-px h-[15px] bg-[#E1E1E1]" />
            <input type="text" className="flex-1 bg-transparent outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
};
