import React, { useContext } from "react";

export const BookMark = ({ data }) => {
  return (
    <>
      <div className="bg-white p-3 font-semibold text-lg mt-2 rounded-sm">
        {data.title}
        <p className="cursor-pointer text-sm font-medium text-[#181818f8] underline mt-1">
          see more
        </p>
      </div>
    </>
  );
};
