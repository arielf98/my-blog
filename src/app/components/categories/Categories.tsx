"use client";
import React from "react";
import CategoriesCard from "./CategoriesCard";
import AllCategoriesPost from "./AllCategoriesPost";

export default function Categories() {
  const [isClicked, setIsClicked] = React.useState('');

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setIsClicked(e.currentTarget.id)
  }

  return (
    <div className='flex flex-col gap-8 px-10 py-10'>
      <p className='font-bold uppercase text-2xl'>Categories</p>

      <div className='flex gap-16'>
        <CategoriesCard
          clicked={isClicked === 'AI'}
          content='lorem ipsum dolor sit amet. sjsjsjskssksasdasdasdsdasdasdasdasdasdasdasdasdasdasdasd'
          title='AI'
          onClick={(e) => handleClick(e)}
          id='AI'
          
        />
        <CategoriesCard
          clicked={isClicked === 'AI2'}
          content='lorem ipsum dolor sit amet.'
          title='AI'
          onClick={(e) => handleClick(e)}
          id='AI2'
        />
        <CategoriesCard
          clicked={isClicked === 'AI3'}
          content='lorem ipsum dolor sit amet.'
          title='AI'
          onClick={(e) => handleClick(e)}
          id='AI3'
        />
        <CategoriesCard
          clicked={isClicked === 'AI4'}
          content='lorem ipsum dolor sit amet.'
          title='AI'
          onClick={(e) => handleClick(e)}
          id='AI4'
        />
      </div>

    </div>
  );
}
