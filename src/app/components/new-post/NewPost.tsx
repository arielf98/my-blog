import React from "react";
import ButtonBase from "@/common/Button";
import ImageBase from "@/common/ImageBase";
import AuthorText from "@/common/AuthorText";

export default function NewPost() {
  return (
    <div className='border border-gray-500 px-8 pt-14 pb-6 border-opacity-10 h-fit mt-4'>
      <ImageBase src='/bg-hero.jpg' />

      <AuthorText date='May 23, 2023' name='Ariel Febrian' classname="mt-10" />

      {/* content info */}
      <div className='text-medium-gray'>
        <p className='black font-bold text-2xl mb-8 mt-8'>Heading Articles</p>

        <p className='mb-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          consequuntur. Laborum sed, possimus harum atque odio quisquam
          repellat, laudantium alias quis illo inventore, eaque corporis ratione
          molestias quam rerum? Tenetur? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam, consequuntur. Laborum sed, possimus harum
          atque odio quisquam repellat, laudantium alias quis illo inventore,
          eaque corporis ratione molestias quam rerum? Tenetur? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quam, consequuntur.
          Laborum sed, possimus harum atque odio quisquam repellat, laudantium
          alias quis illo inventore, eaque corporis ratione molestias quam
          rerum? Tenetur? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quam, consequuntur. Laborum sed, possimus harum atque odio
          quisquam repellat, laudantium alias quis illo inventore, eaque
          corporis ratione molestias quam rerum? Tenetur? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quam, consequuntur. Laborum sed,
          possimus harum atque odio quisquam repellat, laudantium alias quis
          illo inventore, eaque corporis ratione molestias quam rerum? Tenetur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          consequuntur. Laborum sed, possimus harum atque odio quisquam
          repellat, laudantium alias quis illo inventore, eaque corporis ratione
          molestias quam rerum? Tenetur? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam, consequuntur. Laborum sed, possimus harum
          atque odio quisquam repellat, laudantium alias quis illo inventore,
          eaque corporis ratione molestias quam rerum? Tenetur? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quam, consequuntur.
          Laborum sed, possimus harum atque odio quisquam repellat, laudantium
          alias quis illo inventore, eaque corporis ratione molestias quam
          rerum? Tenetur?
        </p>
      </div>

      <ButtonBase
        childrenComposition={
          <div>
            <p>{"Read More >"} </p>
          </div>
        }
      />
    </div>
  );
}
