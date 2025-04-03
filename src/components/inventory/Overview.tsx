import React from "react";

export const Overview = () => {
  return (
    <div>
      <h2 className="text-black text-xl mb-[25px]">Overview</h2>
      <textarea
        className="h-[186px] w-full bg-white p-[30px] rounded-[10px] resize-none"
        placeholder="Enter overview details..."
      />
    </div>
  );
};
