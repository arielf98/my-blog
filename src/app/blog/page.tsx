import Image from "next/image";
import React from "react";
import AuthorText from "@/components/common/AuthorText";
import ButtonBase from "@/components/common/Button";

export default function Blog() {
  return (
    <div className='h-screen'>
      <div className='grid grid-cols-2 bg-lavender h-[500px] w-screen justify-center items-center p-20'>
        <div className='px-8'>
          <p className="text-lg mb-10">Featured Post</p>
          <p className='font-bold text-4xl'>
            Step-by-step guide to choosing great font pairs
          </p>
          <AuthorText
            name='Ariel Febrian'
            date='May 23, 2023'
            classname='my-2'
          />
          <p className='text-medium-gray text-base mb-8'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <ButtonBase childrenComposition={<p className="font-bold text-base">{"Read More >"}</p>} />
        </div>
        <div className='relative w-[600px] h-[350px]'>
          <Image src='/bg-hero.jpg' alt='featured post photo' fill />
        </div>
      </div>
    </div>
  );
}
