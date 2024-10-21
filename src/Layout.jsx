import React from "react";
import { Nav } from "./components/Nav";
import { AllPosts } from "./components/AllPosts";
import { SpendTime } from "./components/SpendTime";
import { AllBookMarks } from "./components/AllBookMarks";

export const Layout = () => {
  return (
    <>
      <section>
        <header className="max-w-[1440px] mx-auto">
          <Nav />
        </header>
        <main className="max-w-[1440px] mx-auto mt-5">
          <section className="flex flex-col lg:flex-row gap-4 lg:items-start items-center justify-center w-11/12 lg:w-4/5 mx-auto">
            <AllPosts />
            <div>
              <SpendTime />
              <AllBookMarks />
            </div>
          </section>
        </main>
      </section>
    </>
  );
};
