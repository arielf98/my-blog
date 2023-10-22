import Link from "next/link";
import React from "react";

export default function AboutMe() {
  return (
    <div className='mt-40 w-[80%] h-[500px]'>
      <div className='grid grid-cols-4 w-full h-3'>
        <div />
        <div className='bg-custom-secondary col-span-2' />
        <div className='bg-purple' />
      </div>
      <div className='w-full bg-lavender h-full grid grid-cols-2 justify-center items-center pl-20 pr-32 gap-10'>
        <div>
          <p className="mb-8">ABOUT ME</p>
          <p className="text-4xl font-bold">We are a community of content writers who share their learnings</p>
          <p className="text-base text-medium-gray mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit quidem earum molestiae obcaecati sapiente consequatur nesciunt hic laudantium odit! Consectetur perspiciatis quae expedita? Atque delectus modi vitae sapiente vero. </p>
          <Link href="/" >
          <p className="font-bold text-purple mt-5">{"Read More >"}</p>
          </Link>
        </div>
        <div>
            <p className="text-4xl font-bold mb-4">Creating valuable content for creatives all around the world</p>
            <p className="text-medium-gray text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque fuga dolor praesentium architecto labore facere facilis nam laudantium ex enim eos dolore possimus, perferendis ducimus consequatur quisquam a animi.</p>
        </div>
      </div>
    </div>
  );
}
