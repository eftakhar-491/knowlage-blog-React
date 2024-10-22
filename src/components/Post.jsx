import React, { useContext, useState } from "react";
import pp from "../assets/pp.jpg";
import { BM } from "../context/bookmark";
export const Post = ({ post }) => {
  const [mark, setMark] = useState(true);
  const book = useContext(BM);

  function bookmark(data) {
    book.setBookmark((pre) => [...pre, data]);
  }
  function removeBookmark(data) {
    book.setBookmark(book.bookmark.filter((item) => item.id !== data.id));
  }
  return (
    <>
      <section className="max-w-[500px] p-4 border-2 rounded-xl shadow-lg">
        <div>
          <img
            className="w-full rounded-lg"
            src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-3">
            <img className="w-8 rounded-full" src={pp} alt="" />
            <div>
              <h1 className="text-lg font-bold">{post.profile.name}</h1>
              <p className="text-sm text-[#181818e6]">
                {post.profile.publish_date} (4 days ago)
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p>{post.profile.reading_time}</p>
            <div>
              {mark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                  onClick={() => {
                    setMark(false);
                    bookmark(post);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                  onClick={() => {
                    setMark(true);
                    removeBookmark(post);
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <h1 className="text-xl md:text-2xl font-bold mt-2">{post.title}</h1>
        <p className="text-lg font-semibold text-[#252525]">
          {post.description}
        </p>
        <p className="text-sm text-[#181818f8] mt-2">{post.hashtag}</p>
        <p className="text-[#6047EC] font-bold text-sm underline mt-3">
          Mark as read
        </p>
      </section>
    </>
  );
};
