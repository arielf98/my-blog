import React from "react";

export default function Header() {
  return (
    <div className="bg-custom-black p-7 flex justify-between text-white">
      <p className="cursor-pointer ml-10">Gigs Engineering</p>
      <ul className="flex gap-4 cursor-pointer mr-28">
        <li >Home</li>
        <li>Blog</li>
        <li>Contact Me</li>
        <li>Term & Condition</li>
      </ul>
    </div>
  );
}
