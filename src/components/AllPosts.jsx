import React, { useEffect, useState } from "react";
import { Post } from "./Post";

export const AllPosts = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);

  return (
    <>
      <section>
        {allData.length !== 0
          ? allData?.map((item, i) => <Post key={i} post={item} />)
          : ""}
      </section>
    </>
  );
};
