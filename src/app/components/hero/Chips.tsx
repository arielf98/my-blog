import React from "react";

export default function Chips({ text }: { text: string }) {
  return (
    <div className='bg-custom-secondary rounded-full w-full h-full p-3 flex justify-center text-black font-bold text-base'>
      {text}
    </div>
  );
}
