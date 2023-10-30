import React from "react";

export default function Author() {
  return (
    <div className='flex flex-col'>
      <Avatar />
    </div>
  );
}

function Avatar() {
  return (
    <div className='flex gap-2 items-center'>
      <div className='rounded-full text-white bg-purple w-12 h-12 flex justify-center items-center font-bold text-2xl'>
        <p>A</p>
      </div>
      <div>
        <p className='text-sm text-purple font-bold'>Ariel Febrian</p>
        <p className='text-xs text-medium-gray'>Posted on 27th January 2023</p>
      </div>
    </div>
  );
}
