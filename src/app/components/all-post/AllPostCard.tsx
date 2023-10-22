import React from "react";
import AuthorText from "@/common/AuthorText";

export default function AllPostCard() {
  return (
    <div className='pl-8 pt-8 pb-6 pr-28 cursor-pointer text-lg hover:bg-light-yellow'>
      <AuthorText date='May 23, 2023' name='Ariel Febrian' classname="mb-2" />
      <p className='font-bold '>
        8 Figma design systems that you can download for free today.
      </p>
    </div>
  );
}
