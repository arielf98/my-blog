import Image from "next/image";
import React from "react";

export default function AllCategoriesPostCard() {
  return (
    <div className='flex gap-10'>
      <div>
        <Image src='/bg-hero.jpg' alt='post' width={290} height={98} />
      </div>
      <div className='flex flex-col w-[45%]'>
        <p className='uppercase text-purple text-lg'>AI</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse
          accusamus quibusdam, laboriosam incidunt praesentium fuga hic ab quam
          facere, soluta assumenda sunt perspiciatis est, vel quidem recusandae.
          Accusamus, quasi.
        </p>
        <p className="text-sm text-medium-gray mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          illo vero fugit commodi assumenda, incidunt ipsam voluptatibus ullam
          debitis pariatur eaque cumque hic sed optio laudantium excepturi totam
          iusto ducimus!
        </p>
      </div>
    </div>
  );
}
