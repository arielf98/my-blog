import React from "react";
import HeroText from "@/components/hero-text/HeroText";

export default function Page() {
  return (
    <div className="py-8">
      <div className='bg-lavender flex justify-center items-center flex-col'>
        <div className='h-fit w-[40%]'>
          <HeroText />
        </div>
      </div>

      <div className="mt-32">
        <p>Post</p>
        <p>Post</p>
        <p>Post</p>
        <p>Post</p>
        <p>Post</p>
      </div>
    </div>
  );
}
