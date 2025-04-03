import React from "react";

export const ImageUpload = () => {
  return (
    <div>
      <label className="text-[#838383] text-[15px]">Images</label>
      <div className="flex h-[107px] justify-center items-center border bg-[rgba(225,225,225,0.21)] mt-5 p-[30px] rounded-[10px] border-solid border-[#E1E1E1]">
        <div className="flex flex-col items-center gap-2">
          <svg
            className="w-6 h-6 text-[#838383]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <span className="text-[#1F1C1C] text-[15px]">Drop your images</span>
        </div>
      </div>
    </div>
  );
};
