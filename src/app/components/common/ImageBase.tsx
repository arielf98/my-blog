import React from "react";
import Image from "next/image";

export default function ImageBase({ src }: { src: string }) {
  return (
    <div className='w-full xl:h-[504px] lg:h-[404px] md:h-[250px] sm:h-[200px] h-[130px] relative'>
      <Image src={src} alt='image post 1' fill />
    </div>
  );
}
