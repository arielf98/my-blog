import React from "react";
import Chips from "./Chips";

export default function Hero() {
  return (
    <div>
      <div className='w-screen h-[720px] bg-black bg-hero bg-cover bg-no-repeat text-white pt-8 flex flex-col items-end'>
        <div className='grid grid-cols-3 gap-3 pr-8 w-[35%]'>
          <Chips text='Front End' />
          <Chips text='Back End' />
          <Chips text='Digital Talent' />
        </div>
      </div>
    </div>
  );
}
