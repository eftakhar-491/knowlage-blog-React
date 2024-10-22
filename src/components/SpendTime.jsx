import React, { useContext } from "react";
import { BM } from "../context/bookmark";

export const SpendTime = () => {
  const time = useContext(BM);

  // time.bookmark.forEach((item) => {
  //   console.log(parseInt(item.profile.reading_time));
  //   x += parseInt(item.profile.reading_time);
  //   console.log(x);
  // });
  let x =
    time.bookmark.length !== 0
      ? time.bookmark.reduce(
          (acc, crr) => acc + parseInt(crr.profile.reading_time),
          0
        )
      : "";
  console.log(x);
  return (
    <div className="text-center py-3 rounded-lg text-xl font-bold bg-[#6047EC1A] text-[#6047EC] border-2 border-[#6047EC]">
      Spent time on read : {x} min
    </div>
  );
};
