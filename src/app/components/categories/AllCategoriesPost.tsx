import React from "react";
import AllCategoriesPostCard from "./AllCategoriesPostCard";

export default function AllCategoriesPost() {
  return (
    <div className="flex flex-col gap-8">
      <p className='font-bold text-2xl'>All Post</p>
      <AllCategoriesPostCard />
      <AllCategoriesPostCard />
      <AllCategoriesPostCard />
      <AllCategoriesPostCard />
    </div>
  );
}
