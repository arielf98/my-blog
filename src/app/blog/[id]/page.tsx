import Author from "@/app/components/author/Author";
import Image from "next/image";
import React from "react";
import Post from "./post";

export default function Page() {
  return (
    <div className="pt-24">
      <div className='pl-80 py-5'>
        <Author />

        <p className='font-bold text-4xl mt-8'>
          Step-by-step guide to choosing great font pairs
        </p>
        <div className='flex items-center mt-4'>
          <div className='h-[30px] w-[30px] relative'>
            <Image src='/tech-brain.svg' alt='icon' fill />
          </div>
          <p className='font-bold'>Front End</p>
        </div>
      </div>

      <div className="px-36 pb-9">
        <Post />
      </div>
    </div>
  );
}
