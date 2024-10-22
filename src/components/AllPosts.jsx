import React, { useEffect, useState } from "react";
import { Post } from "./Post";

export const AllPosts = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data.posts);
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
