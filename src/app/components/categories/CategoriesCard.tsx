"use client";

import Image from "next/image";
import React, { MouseEventHandler } from "react";

type CategoriesCardType = {
  clicked: boolean;
  content: string;
  title: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  id?: string;
};

export default function CategoriesCard(props: CategoriesCardType) {
  const { clicked = false, content = "", title = "", onClick, id } = props;

  return (
    <div
      className={`flex flex-col w-[296px] h-[228px] pl-10 pt-3 border hover:cursor-pointer ${
        clicked ? "bg-light-yellow" : ""
      } pr-3`}
      onClick={onClick}
      id={id}
    >
      <Image
        src='/tech-brain.svg'
        alt='tech icon'
        width={54}
        height={54}
        className='-ml-5'
      />
      <p className='font-bold uppercase text-2xl'>{title}</p>
      <div className="overflow-hidden text-ellipsis">
        <p className="break-words">{content}</p>
      </div>
    </div>
  );
}
