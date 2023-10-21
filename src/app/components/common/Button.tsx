import React, { ReactNode } from "react";

export default function ButtonBase({
  childrenComposition,
}: {
  childrenComposition: ReactNode;
}) {
  return(<button className='bg-custom-secondary lg:px-10 lg:py-4 lg:text-base md:py-3 md:text-sm md:px-8 sm:px-4 sm:py-2 sm:text-sm px-4 py-2 text-xs'>
    {childrenComposition}
    </button>);
}
