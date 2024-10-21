import React from "react";
import { BookMark } from "./BookMark";

export const AllBookMarks = () => {
  return (
    <section className="p-4 bg-[#1111110D] mt-3 rounded-lg max-w-[400px]">
      <h1 className="mt-1 text-xl font-bold">Bookmarked Blogs : 8</h1>
      <BookMark />
      <BookMark />
      <BookMark />
      <BookMark />
      <BookMark />
      <BookMark />
      <BookMark />
    </section>
  );
};
