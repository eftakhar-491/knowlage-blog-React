import React, { useContext } from "react";
import { BookMark } from "./BookMark";
import { BM } from "../context/bookmark";

export const AllBookMarks = () => {
  const book = useContext(BM);

  return (
    <section className="p-4 bg-[#1111110D] mt-3 rounded-lg max-w-[400px]">
      <h1 className="mt-1 text-xl font-bold">
        Bookmarked Blogs : {book.bookmark.length}
      </h1>
      {book.bookmark.leangth !== 0 &&
        book.bookmark?.map((item, i) => <BookMark key={i} data={item} />)}
    </section>
  );
};
